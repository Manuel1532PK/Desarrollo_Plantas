const express = require('express');
const auth = express();
const port = 3000;

auth.post('/auth/login', (req, res) => {
  res.send('Iniciar sesión');
});

auth.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
});