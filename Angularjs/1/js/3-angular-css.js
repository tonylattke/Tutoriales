var miApp = angular.module('tareasApp', []);

miApp.controller('listaCtrl', function ($scope) {

	// Lista de tareas
	$scope.tareas = [
		{
			'txt': 'Comprar comida',
			'estado': false
		},
		{
			'txt': 'Preparar',
			'estado': false
		},
		{
			'txt': 'Cocinar',
			'estado': false
		},
		{
			'txt': 'Comer',
			'estado': false
		}
	];

	$scope.restantes = $scope.tareas.length;

	// Elimina las tareas ya realizadas
	$scope.actualizar = function() {
		var respaldo_tareas = [];

		// Iterar sobre las tareas
		angular.forEach($scope.tareas, function(tarea) {
			// Encontrar las tareas no realizadas
			if (!tarea.estado) {
				respaldo_tareas.push(tarea);
			}
		});

		// Agregar el heroe a la lista
		$scope.tareas = respaldo_tareas;
	};

	// Cuenta las tareas sin hacer
	$scope.tareasSinHacer = function() {
		var restantes = $scope.tareas.length;

		// Contar las tareas no realizadas
		angular.forEach($scope.tareas, function(tarea) {
			if (tarea.estado) {
				restantes--;
			}
		});

		// Actualizar cantidad restante
		$scope.restantes = restantes;

		return restantes;
	};

	// Actualiza color de mensaje
	$scope.colorEstado = function() {
		if ($scope.restantes == 0) {
			return "verde";		// Todas las tareas fueron realizadas
		} else if ($scope.restantes > 0 
				   && $scope.restantes < $scope.tareas.length) {
			return "amarillo";  // Quedan tareas por realizar
		}
		return "rojo";			// No se ha realizado ninguna tarea
	};

});