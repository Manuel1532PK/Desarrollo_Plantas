const express = require('express');
const app= express();
const port = 3000;

app.get('/account/deposit', (req, res) => {
  res.send('deposit money');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});