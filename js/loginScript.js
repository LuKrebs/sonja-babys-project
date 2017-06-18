var login = function() {



	$("body").hide();
	$("body").fadeIn(1500);

	if (!(localStorage.getItem("login") === "client" && localStorage.getItem("psw") === "test")) {
		$(".price").hide();
		$(".priceItem").hide();
		$(".priceText").fadeIn(1000);
	}


	var clientes = [
		"luciano"
	];

	var psw = [
		"test"
	];

	$('form').submit(function() {
		var a = document.getElementById('login').value;
		var b = document.getElementById('senha').value;

		for (var i = 0; i < clientes.length; i++) {
			if (a === clientes[i] && b === psw[i]) {
				window.open('../index.html');
				$(".price").fadeIn(2500);
				document.getElementById('senha').value = "";
				document.getElementById('login').value = "";
				localStorage.setItem("login", "client");
				localStorage.setItem("psw", "test");
				localStorage.setItem("name", "Cliente");
			}
			else {
				document.getElementById('fail').style.display = 'inline-block';
				document.getElementById('senha').value = "";
				document.getElementById('login').value = "";
			}	
		}
		return false;
	});
	


};


$(document).ready(login);