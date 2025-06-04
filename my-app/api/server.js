const { PrismaClient } = require('./generated/prisma');
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
require('dotenv').config(); // 環境変数の適用
const PORT = 5001; //  5000だと[nodemon] clean exit - waiting for changes before restart

// app.get('/', (req, res) => {
//   res.send('<h1>Hello</h1>');
// });

// https://www.prisma.io/docs/getting-started/quickstart-sqlite

const prisma = new PrismaClient();

app.use(express.json()); // express側に、json形式で送ると宣言しておく

// 新規ユーザー登録API
// postできるかのテストとして、thunder clientというVScodeアプリを使用した。 post先はhttp://localhost:5001/api/auth/register
app.post('/api/auth/register', async (req, res) => {
  const { username, email, password } = req.body;
  const hashPassWord = await bcrypt.hash(password, 10); // hash化できる
  const user = await prisma.user.create({
    data: {
      username,
      email,
      password: hashPassWord,
    },
  });
  return res.json({ user });
});

// ユーザーログインAPIの作成
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  const user = prisma.user.findUnique({ where: { email } }); // where条件を絞るという意味

  if (!user) {
    return res.status(401).json({
      error: 'メールアドレスかパスワードが間違っています',
    });
  }

  const isPasswordVaild = await bcrypt.compare(password, user.password);

  if (!isPasswordVaild) {
    return res.status(401).json({
      error: 'パスワードが間違っています',
    });
  }

  //tocenの発行をidを用いて行う。＊環境変数は、dotenvライブラリが必要
  const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
    expiresIn: '1d',
  }); // expiresIn有効期限

  return res.json({ token });
});

app.listen(PORT, () => {
  console.log(`server is running on Port ${PORT}`);
});
