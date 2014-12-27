// Libreria necesaria
var http = require('http');

// Contador de visitas
var visitas = 0;

// Crear el servidor
http.createServer(function (req, res) {
	// Incrementar el numero de visitas al servidor
	visitas++;

	// Mensaje en la consola
  	console.log("Veces visatada: " + visitas);

  	// Estaplecer en la respuesta el tipo de contenido
	res.writeHead(200, {'Content-Type': 'text/plain'});

	// Mensaje enviado
	res.end('Hola mundo\n');

}).listen(3000, '127.0.0.1');

console.log('Servidor en linea en http://127.0.0.1:3000/');