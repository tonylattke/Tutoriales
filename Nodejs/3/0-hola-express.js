// Librerias necesarias
var express = require('express');
var path    = require('path');

// Configuracion
var app = express();
app.use(express.static(path.join(__dirname, 'public'))); 

// Manejando rutas
// Ruta: /
app.get('/', function (req, res) {
    res.send('Hola Express!');
});

// Correr servidor - Puerto 3000
app.listen(3000);
console.log("Servidor en linea en http://localhost:3000");