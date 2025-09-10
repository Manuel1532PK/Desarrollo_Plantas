const express = require('express');
const app= express();
const port = 3000;

app.get('/account/withdraw/history', (req, res) => {
  res.send('historial de retiros');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});