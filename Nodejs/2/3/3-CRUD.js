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

        // Insertar
        base_datos.run("INSERT into personas(rowid,apellido,nombre) VALUES (6,'Curry','Orin')");

        // Leer
        base_datos.all("SELECT * FROM personas WHERE rowid=6",function(err,personas){
            console.log(personas);
        });

        // Actualizar
        base_datos.run("UPDATE personas SET nombre='Arthur' WHERE apellido='Curry'");

        // Eliminar
        base_datos.run("DELETE FROM personas WHERE rowid=6");        

    });

    // Cerrando acceso a base de datos
    base_datos.close();
} else {
    console.log("Archivo no existe");
}