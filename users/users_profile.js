const express = require('express');
const users = express();
const port = 3000;

users.put('/users/profile/:id', (req, res) => {
    res.send(`Perfil del usuario con ID`);
});

users.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
});