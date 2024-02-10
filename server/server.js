const express = require('express');
const app = express();

app.get('/name/:name', (req, res) => {
  res.json({ message: req.params.name }); // Sending a JSON response
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});