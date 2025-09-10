const express = require('express');
const auth = express();
const port = 3000;

auth.post('/auth/reset_password', (req, res) => {
  res.send('Restablecer contraseña');
});

auth.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
});