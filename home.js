const express = require('express');
const home = express();
const port = 3000;

home.get('/home', () => {
    res.send(`Página principal de la billetera virtual`);
});

home.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
});