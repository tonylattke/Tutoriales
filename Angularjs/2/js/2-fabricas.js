var miApp = angular.module('Bitacora', []);

miApp.factory('FabricaBitacora', function() {
	var listaInicial = ['Despertar','Bañarse','Comer'];

	// Creando valor de salida
	var aux = {
		// Datos
		mensajes: listaInicial,
		// Funciones
		reiniciarBitacora: function() {
			aux.mensajes = listaInicial;
		},
		agregarTarea: function(tarea) {
			aux.mensajes.push(tarea);
		}
	};

	return aux;
});

miApp.controller('BitacoraCtrl', function($scope, FabricaBitacora) {

	$scope.agregar = function() {
		if ($scope.entradaMensaje != null && 
			$scope.entradaMensaje != "") {
			FabricaBitacora.agregarTarea($scope.entradaMensaje);
			$scope.entradaMensaje = null;
		}
	};

	$scope.reiniciar = function() {
		FabricaBitacora.reiniciarBitacora();
	};

	$scope.dato = FabricaBitacora;

});