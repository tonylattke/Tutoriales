// Librerias necesarias
var express = require('express');
var path 	= require('path');

// Configuracion
var app = express();
app.use(express.static(path.join(__dirname, 'public'))); 

// Manejando rutas

// Manejo de lectura de parametros
app.get('/objeto/:id', function(req, res){
  res.send('<h1>Objeto de parametro: ' + req.params.id + "</h1>");
});
// Ruta de inicio
app.get('/inicio', function(req, res){
  res.send('<h1>Pagina de inicio</h1>');
});
// Ruta por defecto
app.get('*', function(req, res){
  res.send('<h1>Pagina por defecto</h1>');
});

// Correr servidor
app.listen(3000);
console.log("Servidor en linea en http://localhost:3000");