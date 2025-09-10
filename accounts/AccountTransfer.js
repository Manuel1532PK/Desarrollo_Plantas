const express = require('express');
const app= express();
const port = 3000;

app.get('/account', (req, res) => {
  res.send('transferir dinero');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});