// Objeto JSON
var diccionario = {
	"usuarios":[
			{"nombre":"Tony", "apellido":"Lattke"}, 
			{"nombre":"Alexis",	"apellido":"Lattke"},
			{"nombre":"Susana", "apellido":"Lattke"}
		]
};

// Lista
var peliculas = ["The Following", "Memento", "Batman", "Prestige", "Inception"];
// Agregar uno extra
peliculas[peliculas.length] = "Interstellar";

function ColocarUsuarios () {
	var i;
	var l = diccionario["usuarios"].length;
	var texto = "";

	for (i = 0; i < l; i++) {
		texto += diccionario["usuarios"][i]["nombre"] + " " + diccionario["usuarios"][i]["apellido"] + "\n";
	}

	document.getElementById('usuarios_area').innerHTML = texto;
}

function MostrarPeliculas () {
	var i;
	var l = peliculas.length;
	var texto = "Películas de Christopher Nolan: <br>";

	for (i = 0; i < l; i++) {
		texto += peliculas[i] + "<br>";
	}

	document.getElementById('parrafo_peliculas').innerHTML = texto;
}

function ObtenerFecha () {
	document.getElementById('fecha').innerHTML = Date();
}