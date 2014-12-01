$(document).ready(function(){

	$('#tomar').click(function () {
		var foo = $('#texto_1').val();
		// Otra forma de obtener el valor
		// var foo =$('#texto_1').attr('value');
		alert(foo);
	});

	$('#limpiar').click(function () {
		$('#texto_2').val("");
	});

	$('#sustituir').click(function () {
		var bar = $('#texto_3').val();
		$('#texto_4').val(bar);
	});


	$('#texto_5').keyup(function () {
		var baz = $(this).val();
		$('#texto_6').empty();
		$('#texto_6').append(baz);
	});

});