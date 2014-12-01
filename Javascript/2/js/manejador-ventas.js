// Listado de productos
var productos = [
	{
		"id"	: 1,
		"nombre": "pan",
		"precio": 0.5
	},
	{
		"id"	: 2,
		"nombre": "pizza",
		"precio": 3
	},
	{
		"id"	: 3,
		"nombre": "pasta",
		"precio": 2
	},
	{
		"id"	: 4,
		"nombre": "carne",
		"precio": 4
	},
];

// Precio Total
var precio_total = 0;

function iniciar () {
	var i = 0;
	var listado = $("#listado");

	// Agregar todos los productos al HTML
	while (i < productos.length) {
		var aux = 
			"<tr id='" 
			+ productos[i]["id"].toString() 
			+ "'><td> " 
			+ productos[i]["nombre"] 
			+ "</td><td>" 
			+ productos[i]["precio"].toString() 
			+ "</td><td><button class='producto_venta'>Agregar</button></td></tr>";

		listado.append(aux);
		i++;
	}
}

function calcularVuelto () {
	// Obtener el pago
	var pago = parseFloat($('#pago').val());
	// Calcular el Vuelto
	var vuelto = precio_total - pago;
	// Limpiar el mensaje de vuelto
	$("#vuelto").empty();

	// Falta dinero
	if (vuelto > 0){
		$("#vuelto").append("Faltan " + vuelto.toString());
	} 
	// Sobra dinero
	else if (vuelto < 0) {
		$("#vuelto").append("Sobran " + ((-1)*vuelto).toString());
	} 
	// Pago exacto
	else if (vuelto == 0) {
		$("#vuelto").append("Pago exacto");
	} 
	// Pago erroneo
	else {
		$("#vuelto").append("Error");
	}
}

$(document).ready(function(){

	// Función inicial
	iniciar();

	$('.producto_venta').click(function () {
		// Obtener el id del producto a aagregar
		var id = parseInt($(this).parent().parent().attr("id"));
		// Tomar la tabla del carro de compras
		var carro_compra = $("#carro");
		
		// Agrega elementos a la tabla del carro y actualiza costo toral
		var i = 0;
		while (i < productos.length){
			if (productos[i]["id"] == id){
				var aux = 
					"<tr><td>"
					+ productos[i]["nombre"]
					+ "</td><td> " 
					+ productos[i]["precio"].toString() 
					+ "</td></tr>";
				carro_compra.append(aux);

				precio_total += productos[i]["precio"];

				$(this).parent().parent().toggle(500);
				break;
			}
			i++;
		}

		// Actualiza el costo final
		$("#costo_final").empty();
		$("#costo_final").append(precio_total.toString());

		calcularVuelto();
	});

	// Función que actualiza el vuelto según el pago escrito
	$('#pago').keyup(function () {
		calcularVuelto();
	});

});