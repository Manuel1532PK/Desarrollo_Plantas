const express = require('express');
const auth = express();
const port = 3000;

auth.post('/auth/forgot-password', (req, res) => {
  res.send('Recuperar contraseña');
});

auth.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
});