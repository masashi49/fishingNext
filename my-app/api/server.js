const express = require('express');
const app = express();
require('dotenv').config(); // 環境変数の適用
const authRoute = require('./routers/auth');
const cors = require('cors'); // corsのインストールが必要

const PORT = 5001; //  5000だと[nodemon] clean exit - waiting for changes before restart

app.use(cors()); // corsの適用
app.use(express.json()); // express側に、json形式で送ると宣言しておく
app.use('/api/auth', authRoute);
app.listen(PORT, () => {
  console.log(`server is running on Port ${PORT}`);
});
