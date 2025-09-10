const express = require('express');
const app= express();
const port = 3000;

app.get('/account/transactions', (req, res) => {
  res.send('Consultar transacciones');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});