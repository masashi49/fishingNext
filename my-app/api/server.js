const express = require('express');
const app = express();
const PORT = 5001; //  5000だと[nodemon] clean exit - waiting for changes before restart

// app.get('/', (req, res) => {
//   res.send('<h1>Hello</h1>');
// });

// https://www.prisma.io/docs/getting-started/quickstart-sqlite

app.listen(PORT, () => {
  console.log(`server is running on Port ${PORT}`);
});
