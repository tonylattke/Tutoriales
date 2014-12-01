$(document).ready(function(){

	$('.rojo').click(function () {
		$(this).hide();
	});

	$('.verde').click(function () {
		$(this).fadeTo(1000, 0);
	});

	$('.azul').click(function () {
		$(this).toggle(1500, function() {
			alert("Listo");
		});
	});

});