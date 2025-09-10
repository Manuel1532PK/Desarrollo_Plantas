const express = require('express');
const app= express();
const port = 3000;

app.get('/account/transfer/history', (req, res) => {
  res.send('Consultar historial de transferencias');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});