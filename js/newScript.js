var carrinho = function() {
	
	var totalPrice = 0;

	if (localStorage.getItem("anneOne")) {
		var auxString = localStorage.getItem("anneOne");
		var auxArray = auxString.split("-");
		console.log(auxArray);
		
		var name = auxArray[0];
		var price = auxArray[1];
		var quantidade = auxArray[2];
		var color = auxArray[3];
		var imagem = auxArray[4];
		imagem = imagem.substring(4,imagem.length);
		var subtotalPrice = price.replace("R$", "");
		var subtotalAnneOne = subtotalPrice * quantidade;
		totalPrice += subtotalAnneOne;
		subtotalAnneOne = subtotalAnneOne.toFixed(1);
		

		var templateHTML = '<div class="row" id="anneOne">\
        						<div class="col-md-2 col-sm-3 col-xs-4">\
          							<img src="' + imagem +  '"class="img-responsive img-rounded">\
        						</div>\
    							<div class="col-md-3 col-sm-4 col-xs-8">\
          							<h3>' + name + '</h3>\
          							<h4>' + price + '</h4>\
          							<h4>Quantidade: ' + quantidade + '</h4>\
          							<h4 class="cor">Cor: <span style="background-color: ' + color + '"></span></h4>\
        						</div>\
        						<div class="col-md-3 col-sm-2 col-xs-6">\
        							<h3 class="subtotal">R$ ' + subtotalAnneOne + '0</h3>\
        						</div>\
        						<div class="col-md-2 col-sm-2 col-xs-6">\
        							<h4 class="remove" id="removeAnneOne" class="text-center"><i class="fa fa-times" aria-hidden="true"></i></h4>\
        						</div>\
      						</div>';

		$("#cartContainer").append(templateHTML);
	}

	if (localStorage.getItem("anneTwo")) {
		var auxString = localStorage.getItem("anneTwo");
		var auxArray = auxString.split("-");
		console.log(auxArray);
		
		var name = auxArray[0];
		var price = auxArray[1];
		var quantidade = auxArray[2];
		var color = auxArray[3];
		var imagem = auxArray[4];
		imagem = imagem.substring(4,imagem.length);
		var subtotalPrice = price.replace("R$", "");
		var subtotal = subtotalPrice * quantidade;
		totalPrice += subtotal;
		subtotal = subtotal.toFixed(1);
		

		var templateHTML = '<div class="row" id="anneTwo">\
        						<div class="col-md-2 col-sm-3 col-xs-4">\
          							<img src="' + imagem +  '"class="img-responsive img-rounded">\
        						</div>\
    							<div class="col-md-3 col-sm-4 col-xs-8">\
          							<h3>' + name + '</h3>\
          							<h4>' + price + '</h4>\
          							<h4>Quantidade: ' + quantidade + '</h4>\
          							<h4 class="cor">Cor: <span style="background-color: ' + color + '"></span></h4>\
        						</div>\
        						<div class="col-md-3 col-sm-2 col-xs-6">\
        							<h3 class="subtotal">R$ ' + subtotal + '0</h3>\
        						</div>\
        						<div class="col-md-2 col-sm-2 col-xs-6">\
        							<h4 class="remove" id="removeAnneTwo"><i class="fa fa-times" aria-hidden="true"></i></h4>\
        						</div>\
      						</div>';

		$("#cartContainer").append(templateHTML);
	}
	$("#removeAnneTwo").on('click', function() {
		$("#anneTwo").remove();
			localStorage.setItem("anneTwo", "");
			totalPrice -= subtotal;
			$("#valorTotal").html("R$ " + totalPrice.toFixed(1) + "0");
	});
	$("#removeAnneOne").on('click', function() {
		$("#anneOne").remove();
			localStorage.setItem("anneOne", "");
			totalPrice -= subtotalAnneOne;
			$("#valorTotal").html("R$ " + totalPrice.toFixed(1) + "0");
	});

	if (localStorage.getItem("carolina")) {
		var auxString = localStorage.getItem("carolina");
		var auxArray = auxString.split("-");
		console.log(auxArray);
		
		var name = auxArray[0];
		var price = auxArray[1];
		var quantidade = auxArray[2];
		var color = auxArray[3];
		var imagem = auxArray[4];
		imagem = imagem.substring(4,imagem.length);
		var subtotalPriceCarolina = price.replace("R$", "");
		var subtotalCarolina = subtotalPriceCarolina * quantidade;
		totalPrice += subtotalCarolina;
		subtotalCarolina = subtotalCarolina.toFixed(1);
		

		console.log(subtotalCarolina);

		var templateHTML = '<div class="row" id="carolina">\
        						<div class="col-md-2 col-sm-3 col-xs-4">\
          							<img src="' + imagem +  '"class="img-responsive img-rounded">\
        						</div>\
    							<div class="col-md-3 col-sm-4 col-xs-8">\
          							<h3>' + name + '</h3>\
          							<h4>' + price + '</h4>\
          							<h4>Quantidade: ' + quantidade + '</h4>\
          							<h4 class="cor">Cor: <span style="background-color: ' + color + '"></span></h4>\
        						</div>\
        						<div class="col-md-3 col-sm-2 col-xs-6">\
        							<h3 class="subtotal">R$ ' + subtotalCarolina + '0</h3>\
        						</div>\
        						<div class="col-md-2 col-sm-2 col-xs-6">\
        							<h4 class="remove" id="removeCarolina" class="text-center"><i class="fa fa-times" aria-hidden="true"></i></h4>\
        						</div>\
      						</div>';

		$("#cartContainer").append(templateHTML);
	}
	$("#removeCarolina").on('click', function() {
		$("#carolina").remove();
			localStorage.setItem("carolina", "");
			totalPrice -= subtotalCarolina;
			$("#valorTotal").html("R$ " + totalPrice.toFixed(1) + "0");
	});


	if (localStorage.getItem("dani")) {
		var auxString = localStorage.getItem("dani");
		var auxArray = auxString.split("-");
		console.log(auxArray);
		
		var name = auxArray[0];
		var price = auxArray[1];
		var quantidade = auxArray[2];
		var color = auxArray[3];
		var imagem = auxArray[4];
		imagem = imagem.substring(4,imagem.length);
		var subtotalPriceDani = price.replace("R$", "");
		var subtotalDani = subtotalPriceDani * quantidade;
		totalPrice += subtotalDani;
		subtotalDani = subtotalDani.toFixed(1);
		

		console.log(subtotalDani);

		var templateHTML = '<div class="row" id="dani">\
        						<div class="col-md-2 col-sm-3 col-xs-4">\
          							<img src="' + imagem +  '"class="img-responsive img-rounded">\
        						</div>\
    							<div class="col-md-3 col-sm-4 col-xs-8">\
          							<h3>' + name + '</h3>\
          							<h4>' + price + '</h4>\
          							<h4>Quantidade: ' + quantidade + '</h4>\
          							<h4 class="cor">Cor: <span style="background-color: ' + color + '"></span></h4>\
        						</div>\
        						<div class="col-md-3 col-sm-2 col-xs-6">\
        							<h3 class="subtotal">R$ ' + subtotalDani + '0</h3>\
        						</div>\
        						<div class="col-md-2 col-sm-2 col-xs-6">\
        							<h4 class="remove" id="removeDani" class="text-center"><i class="fa fa-times" aria-hidden="true"></i></h4>\
        						</div>\
      						</div>';

		$("#cartContainer").append(templateHTML);
	}
	$("#removeDani").on('click', function() {
		$("#dani").remove();
			localStorage.setItem("dani", "");
			totalPrice -= subtotalDani;
			$("#valorTotal").html("R$ " + totalPrice.toFixed(1) + "0");
	});





	$("#valorTotal").html("<h3>R$ " + totalPrice.toFixed(1) + "0 </h3>");
};



$(document).ready(carrinho);