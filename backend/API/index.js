const express = require('express');
const espGeo = require('./main.js');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(espGeo);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

