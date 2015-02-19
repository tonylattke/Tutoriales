var miApp = angular.module('Calculadora', []);

miApp.service('ServiciosMath', function() {
	this.suma = function(a, b) { return a + b };

	this.resta = function(a, b) { return a - b };

	this.respaldo = 0;
});
  
miApp.controller('CalculadoraCtrl', function($scope, ServiciosMath) {

	$scope.hacerSuma = function() {
		$scope.mensaje = "Suma de " + $scope.valorA + " con " + $scope.valorB;
		$scope.resultado = ServiciosMath.suma($scope.valorA, $scope.valorB);
	}

	$scope.hacerResta = function() {
		$scope.mensaje = "Resta de " + $scope.valorA + " con " + $scope.valorB;
		$scope.resultado = ServiciosMath.resta($scope.valorA, $scope.valorB);
	}

	$scope.sumarRespaldo = function() {
		$scope.mensaje = "Suma de " + $scope.resultado + " con el valor guardado " + ServiciosMath.respaldo;
		$scope.resultado = ServiciosMath.suma($scope.resultado, ServiciosMath.respaldo);
	}

	$scope.guardarResultado = function() {
		ServiciosMath.respaldo = $scope.resultado;
	}

});