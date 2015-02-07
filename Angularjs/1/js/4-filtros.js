var miApp = angular.module('filtrosApp', []);

miApp.controller('heroesCtrl', function ($scope) {

	// Lista de heroes
	$scope.heroes = [
		{
			'nombre': 'Batman',
			'identidad': 'Bruce Wayne',
			'fecha': new Date(1939, 5, 1),
			'apariciones': 315,
			'porcentaje': 40.547678,
		},
		{
			'nombre': 'Ironman',
			'identidad': 'Tony Stark',
			'fecha': new Date(1963, 3, 1),
			'apariciones': 70,
			'porcentaje': 20.345641,
		},
		{
			'nombre': 'Big Boss',
			'identidad': 'John',
			'fecha': new Date(1987, 7, 7),
			'apariciones': 10,		
			'porcentaje': 20.45,
		},
		{
			'nombre': 'Marcus Fenix',
			'identidad': 'Marcus Fenix',
			'fecha': new Date(2006, 11, 7),
			'apariciones': 4,		
			'porcentaje': 18.76104,
		}
	];

	$scope.criterioOrden = function(orden) {
		$scope.ordenSeleccionado = orden;
	};

});