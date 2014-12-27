// Librerias necesarias
var http = require("http");
var sistemaArchivos = require('fs');

// Configuracion
var puerto = 3000;
var servidorURL = "127.0.0.1";

// Declarando servidor
var servidor = http.createServer(function(req, res) {
    // Nos permite ver que URL se esta consultando
    console.log("URL consultado: " + req.url);

    // Controla la ruta /prueba
    if(req.url == "/prueba") {
        sistemaArchivos.readFile("prueba.html", function(err, text){
            res.setHeader("Content-Type", "text/html");
            res.end(text);
        });
        return;
    }

    // El contenido por defecto
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Pagina por defecto</h1>");
});

// Correr servidor bajo el puerto y URL pasados como parametros
servidor.listen(puerto, servidorURL);
console.log("Servidor en linea en http://" + servidorURL + ":" + puerto);