if (!Modernizr.inputtypes.date){
	$('<link/>', {
		rel: 'stylesheet',
		type: 'text/css',
		href: 'https://code.jquery.com/ui/1.11.2/themes/smoothness/jquery-ui.css'
	}).appendTo('head');

	$.getScript('https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js')
		.done(function() {
			$('input[type="date"]').datepicker({
				dateFormat: 'yy-mm-dd'
			});
		});
}

if (!Modernizr.inputtypes.number) {
	$.getScript('js/number-polyfill.js');
}

var form = document.getElementById("form-contact");

var loadingButton = document.createElement('i');
if (Modernizr.classList) {
	loadingButton.classList.add("fa", "fa-spinner", "fa-spin");
} else {
	loadingButton.className += "fa fa-spinner fa-spin";
}

form.addEventListener("submit", function(evt){
	
	var nombreInput = document.getElementById("nombre");

	var emailInput = document.getElementById("email");

	/*var mediosRadioInput = {
		"medio1": document.getElementById("tipo_conocer_1");
		"medio2": document.getElementById("tipo_conocer_2");
		"medio3": document.getElementById("tipo_conocer_3");
		"medio4": document.getElementById("tipo_conocer_4");
	}*/

	var telefonoInput = document.getElementById("telefono");

	var submitInput = document.getElementById("enviar");

	if (email.checkValidity() == false) {
		alert("Escribe tu email");
		email.focus();
		evt.preventDefault();
		return false;
	}

	if (telefono.checkValidity == false) {
		alert("No es un número");
		telefono.focus();
		evt.preventDefault();
		return false;
	}


	submitInput.appendChild(loadingButton);
	evt.preventDefault();

	setTimeout(function(){
		submitInput.removeChild(loadingButton);
		sendNotification("Formulario recibido", "Yo soy el body");
	}, 1000);
});









