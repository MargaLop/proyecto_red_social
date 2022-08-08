const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use('/', express.static('./frontend'));

app.post("/", (req, res) => {
  console.log('holiiiiiiiiiiiiiiii')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
