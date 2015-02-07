var miApp = angular.module('heroesApp', []);

miApp.controller('listadoCtrl', function ($scope) {

	// Lista de heroes
	$scope.heroes = [
		{
			'nombre': 'Batman',
			'identidad': 'Bruce Wayne'
		},
		{
			'nombre': 'Ironman',
			'identidad': 'Tony Stark'
		},
		{
			'nombre': 'Big Boss',
			'identidad': 'John'
		}
	];

	// Función para agregar nuevo heroe a la lista
	$scope.agregarHeroe = function() {
		// Crear Heroe
		var heroe = {
			nombre: $scope.nuevo_nombre, 		// Obtener nombre del heroe
			identidad: $scope.nueva_identidad	// Obtener identidad del heroe
		};

		// Agregar el heroe a la lista
		$scope.heroes.push(heroe);

		// Vaciar los inputs
		$scope.nuevo_nombre = '';
		$scope.nueva_identidad = '';
	};

});