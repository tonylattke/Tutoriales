// Cargando libreria
var sqlite3 = require('sqlite3').verbose();

// Creando archivo de base de datos
var base_datos = new sqlite3.Database('liga_de_la_justicia.db');

// Espacio para hacer operaciones en base de datos
base_datos.serialize(function() {

    // Crear tabla personas
    base_datos.run("CREATE TABLE IF NOT EXISTS personas (nombre TEXT, apellido TEXT)");
    
    // Insertando personas
    var stmt = base_datos.prepare("INSERT INTO personas VALUES (?,?)");
    stmt.run('Bruce','Wayne');
    stmt.run('Clark','Kent');
    stmt.run('Diana','');
    stmt.run('Hal','Jordan');
    stmt.run('Wally','West');
    stmt.finalize();

    // Consultando base de datos
    base_datos.each("SELECT rowid AS id, nombre FROM personas", function(err, persona) {
        console.log(persona.id + ": " + persona.nombre);
    });

});

// Cerrando acceso a base de datos
base_datos.close();