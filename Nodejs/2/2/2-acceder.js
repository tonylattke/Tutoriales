// Cargando librerias
var sqlite3 = require('sqlite3').verbose();
var fs = require("fs");

// Comprobar que existe el archivo de base de datos
var archivo = "liga_de_la_justicia.db";
var existe = fs.existsSync(archivo);
if (existe) {
    // Cargando archivo de base de datos
    var base_datos = new sqlite3.Database(archivo);

    // Espacio para hacer operaciones en base de datos
    base_datos.serialize(function() {

        // Crear tabla
        base_datos.run("CREATE TABLE sucesos (numero_de_caso INTEGER PRIMARY KEY, nombre TEXT, fecha DATE NOT NULL, dinero REAL)");

        // Elimina tabla
        base_datos.run("DROP TABLE sucesos");

    });

    // Cerrando acceso a base de datos
    base_datos.close();
} else {
    console.log("Archivo no existe");
}
