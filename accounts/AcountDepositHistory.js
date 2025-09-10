const express = require('express');
const app= express();
const port = 3000;

app.get('/account/deposit/history', (req, res) => {
  res.send('Historial de depositos');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});