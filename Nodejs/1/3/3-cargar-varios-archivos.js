// Librerias necesarias
var http = require("http");
var path = require("path"); 
var sistemaArchivos = require("fs");

// Configuracion
var puerto = 3000;
var servidorURL = "127.0.0.1";

// Declarando servidor 
var servidor = http.createServer( function(req, res) {
 
    // Obtener informacion del archivo leido
    var nombre_archivo  = req.url;
    var extension       = path.extname(nombre_archivo);
    var ruta            = __dirname;

    // Extensiones validas
    var extensiones_validas = {
        ".html" : "text/html",          
        ".js"   : "application/javascript", 
        ".css"  : "text/css",
        ".txt"  : "text/plain",
        ".jpg"  : "image/jpeg",
        ".jpeg" : "image/jpeg",
        ".gif"  : "image/gif",
        ".png"  : "image/png",
        ".ico"  : "image/ico"
    };

    // Verificar que el archivo sea una extension valida
    if (extensiones_validas[extension]) {
        ruta += nombre_archivo;
        // Verificando la ruta del archivo
        path.exists(ruta, function(exists) {
            // Ruta del archivo encontrada
            if(exists) {
                // Se lee el archivo
                sistemaArchivos.readFile(ruta, function(error_encontrado, contenido) {
                    if(!error_encontrado) {
                        res.setHeader("Content-Length", contenido.length);
                        res.setHeader("Content-Type", extension);
                        res.statusCode = 200;
                        res.end(contenido);
                    } else {
                        res.writeHead(500);
                        res.end("Error de lectura");
                    }
                });
            } else {
                // Archivo no encontrado
                res.writeHead(404);
                res.end("<h1>Archivo no encontrado</h1>");
            }
        });
    } else {
        // Si el archivo tiene una extension no soportada
        console.log("Extension de archivo \'" + extension +"\' no soportada.");
        res.writeHead(404);
        res.end("Extension de archivo \'" + extension +"\' no soportada.");
    }
 
});

// Correr servidor bajo el puerto y URL pasados como parametros
servidor.listen(puerto, servidorURL);
console.log("Servidor en linea en http://" + servidorURL + ":" + puerto);