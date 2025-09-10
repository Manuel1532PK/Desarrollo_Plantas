const express = require('express');
const app= express();
const port = 3000;

app.get('/account/logout', (req, res) => {
  res.send('Cerrar sesión');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});