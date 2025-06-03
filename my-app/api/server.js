const { PrismaClient } = require('./generated/prisma');
const express = require('express');
const app = express();
const PORT = 5001; //  5000だと[nodemon] clean exit - waiting for changes before restart

// app.get('/', (req, res) => {
//   res.send('<h1>Hello</h1>');
// });

// https://www.prisma.io/docs/getting-started/quickstart-sqlite

const prisma = new PrismaClient();

// 新規ユーザー登録API
app.post('/api/auth/register', async (req, res) => {
  const { username, email, password } = req.body;
  const user = await prisma.user.create({
    data: {
      username,
      email,
      password,
    },
  });
  return res.json({ user });
});

app.listen(PORT, () => {
  console.log(`server is running on Port ${PORT}`);
});
