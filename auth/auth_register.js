const express = require('express');
const auth = express.Router();
const port = 3000;

auth.post('/auth/register', (req, res) => {
  res.send('Registrar usuario');
});

auth.listen(port, ()=>{
    console.log(`API escuchando en http://localhost:${port}`);
});