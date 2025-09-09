const express = require('express');
const account = express.Router();
const port = 3000;

account.get('/account/balance', (req, res) => {
  res.send('Consultar balance');
});

account.listen(port, ()=>{
    console.log(`API escuchando en http://localhost:${port}`);
});