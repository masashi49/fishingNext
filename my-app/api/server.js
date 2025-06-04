const { PrismaClient } = require('./generated/prisma');
const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
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

  console.log(hashPassWord);

  const user = await prisma.user.create({
    data: {
      username,
      email,
      password: hashPassWord,
    },
  });
  return res.json({ user });
});

app.listen(PORT, () => {
  console.log(`server is running on Port ${PORT}`);
});
