const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use('/', express.static('./frontend'));

app.get("/busqueda", (req, res) => {
  console.log(req.query.km);
  console.log(req.query.place);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
