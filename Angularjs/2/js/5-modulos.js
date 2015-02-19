var myApp = angular.module('pruebaModulo', ['infinite-scroll']);

myApp.controller('controlador', function($scope) {
	$scope.datos = [];
	for(var i = 1; i <= 40; i++) {
		$scope.datos.push(i);
	}

	$scope.cargarMasDatos = function() {
		var ultimo = $scope.datos[$scope.datos.length - 1];
		for(var i = 1; i <= 8; i++) {
			$scope.datos.push(ultimo + i);
		}
	};
});