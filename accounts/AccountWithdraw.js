const express = require('express');
const app= express();
const port = 3000;

app.get('/account/withdraw', (req, res) => {
  res.send('Retirar dinero');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});