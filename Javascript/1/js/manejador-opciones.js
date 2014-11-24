function obtenerValor(opcion) {
	return document.getElementById(opcion).checked;
}

function mostrarAlerta() {
	var mensaje = "Opciones marcadas: ";
	var valor_1 = obtenerValor("opcion-1");
	var valor_2 = obtenerValor("opcion-2");

	// Opción 1 y 2 marcadas
	if (valor_1 && valor_2) {
		mensaje += "1 y 2";
	}
	// Opción 1 marcada
	else if (valor_1 && !valor_2) {
		mensaje += "1";
	}
	// Opción 2 marcada
	else if (!valor_1 && valor_2) {
		mensaje += "2";
	} 
	// Ninguna opción marcada
	else {
		mensaje += "Ninguna";
	}

	alert(mensaje);
}