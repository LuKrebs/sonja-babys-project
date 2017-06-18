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
		var subtotal = subtotalPrice * quantidade;
		subtotal = subtotal.toFixed(2);
		//totalPrice += subtotal;

		var templateHTML = '<div class="row" id="anneOne">\
        						<div class="col-md-2 col-sm-2 col-xs-2">\
          							<img src="' + imagem +  '"class="img-responsive img-rounded">\
        						</div>\
    							<div class="col-md-3 col-sm-3 col-xs-3">\
          							<h3>' + name + '</h3>\
          							<h4>' + price + '</h4>\
          							<h4>Quantidade: ' + quantidade + '</h4>\
          							<h4 class="cor">Cor: <span style="background-color: ' + color + '"></span></h4>\
        						</div>\
        						<div class="col-md-3">\
        							<h3 class="subtotal">R$ ' + subtotal + '</h3>\
        						</div>\
        						<div class="col-md-4 col-sm-4 col-xs-4">\
        							<h4 class="remove"><i class="fa fa-times" aria-hidden="true"></i>Remover</h4>\
        						</div>\
      						</div>';

		$("#cartContainer").append(templateHTML);
		$(".remove").on('click', function() {
			$("#anneOne").remove();
			localStorage.setItem("anneOne", "");
			totalPrice -= subtotal;
			$("#valorTotal").html("Valor total: R$ " + totalPrice);
		});
		$("#valorTotal").html("Valor total: R$ " + totalPrice);
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
		subtotal = subtotal.toFixed(2);
		totalPrice += subtotal;
		console.log(totalPrice);

		var templateHTML = '<div class="row" id="anneTwo">\
        						<div class="col-md-2 col-sm-2 col-xs-2">\
          							<img src="' + imagem +  '"class="img-responsive img-rounded">\
        						</div>\
    							<div class="col-md-3 col-sm-3 col-xs-3">\
          							<h3>' + name + '</h3>\
          							<h4>' + price + '</h4>\
          							<h4>Quantidade: ' + quantidade + '</h4>\
          							<h4 class="cor">Cor: <span style="background-color: ' + color + '"></span></h4>\
        						</div>\
        						<div class="col-md-3">\
        							<h3 class="subtotal">R$ ' + subtotal + '</h3>\
        						</div>\
        						<div class="col-md-4 col-sm-4 col-xs-4">\
        							<h4 class="remove"><i class="fa fa-times" aria-hidden="true"></i>Remover</h4>\
        						</div>\
      						</div>';

		$("#cartContainer").append(templateHTML);
		$(".remove").on('click', function() {
			$("#anneTwo").remove();
			localStorage.setItem("anneTwo", "");
			totalPrice -= subtotal;
			$("#valorTotal").html("Valor total: R$ " + totalPrice);
		});
		$("#valorTotal").html("Valor total: R$ " + totalPrice);
	}
};



$(document).ready(carrinho);