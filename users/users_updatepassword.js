const express = require('express');
const users = express();
const port = 3000;

users.put('/users/updatepassword/:id', (req, res) => {
  res.send(`Actualizar contraseña del usuario con ID`);
});

auth.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
});