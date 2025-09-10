const express = require("express");
const users = express();
const port = 3000;

users.put('/users/update/:id', (req, res) => {
    res.send(`Actualizar datos del usuario con ID`)
});

users.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
});