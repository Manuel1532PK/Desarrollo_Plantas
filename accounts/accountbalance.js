const express = require('express');
const app = express();
const port = 3000;

// Ruta para consultar balance
app.get('/account/balance', (req, res) => {
  res.send('Consultar balance');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});


