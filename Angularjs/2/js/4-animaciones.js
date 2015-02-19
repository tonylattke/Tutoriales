var miApp = angular.module('Animaciones', ['ngAnimate']);

// Controlador de la animación
miApp.controller('AnimacionCtrl', function($scope) {
	$scope.disponible = true;
});

// Creando una animación dentro del módulo
miApp.animation('.animacion1', function() {
	return {
		// Desaparecer
		leave: function(elemento, terminar) {
			elemento.text('Desapareciendo');
			elemento.addClass('difuminar');
			terminar();
		},
		// Aparecer
		enter: function(elemento, terminar) {
			elemento.text('Nuevo mensaje');
			elemento.addClass('difuminar');
			terminar();
		}
	}
});
