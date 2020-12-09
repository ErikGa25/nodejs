
function validaciones() {
	var name = document.getElementById('name');
	var address = document.getElementById('address');
	var phone = document.getElementById('phone');
	var verificar = true;

	if (!name.value) {
		alert('El campo nombre es obligatorio');
		name.focus();
		verificar = false;
	} else if (!address.value) {
		alert('El campo dirección es obligatorio');
		address.focus();
		verificar = false;
    } else if (!phone.value) {
		alert('El campo teléfono es obligatorio');
		phone.focus();
		verificar = false;
    }
    
	if (verificar) {
		document.form_node.submit();
	}
}

window.onload = function() {
	var btn = document.form_node.btnEnviar;
	btn.onclick = validaciones;
};