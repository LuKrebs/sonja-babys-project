var main = function() {

	var color = $("#test").html();
	var colorTwo = $("#testTwo").html();


	var number = $("#number").html();
	var numberTwo = $("#numberTwo").html();

	// Zoom and span background features
	$('#ex1').zoom({magnify: 0.25});
	$("#color").css('background-color', color);
	$("#colorTwo").css('background-color', colorTwo);

	$(".pictures").on('click', function() {
		var x = $(this).attr("src");
		$("#big-picture").attr('src', x);
		$('#ex1').trigger('zoom.destroy');
		$("span.zoom").attr('id', "newZoom");
		$("#newZoom").zoom({magnify: 0.25});
	});
	// End ~> Zoom and span background features

	// Buttons couting
	$("#myPlusIcon").on('click', function() {
		var a = $("#myInput").val();
		a = Number(a);
		a += 1;
		$("#myInput").val(a);
	});
	$("#myMinusIcon").on('click', function() {
		var a = $("#myInput").val();
		a = Number(a);
		a -= 1;
		$("#myInput").val(a);
	});
	$("#myPlusIconTwo").on('click', function() {
		var a = $("#myInputTwo").val();
		a = Number(a);
		a += 1;
		$("#myInputTwo").val(a);
	});
	$("#myMinusIconTwo").on('click', function() {
		var a = $("#myInputTwo").val();
		a = Number(a);
		a -= 1;
		$("#myInputTwo").val(a);
	});
	//End ~> Buttons counting


	// Adding values to the Cart
	$("#myCart").on('click', function() {
		var quantidade = $("#myInput").val();
		var name = $("#anneName").html();
		var price = $("#annePrice").html();
		var photo = $("#big-picture").attr('src');

		if (quantidade > 0) {
			$("#itemAdd").css('display', 'inline');
		}

		var anneOneString = name + "- " + price + "- " + quantidade + "- " + color + "- " + photo;
		localStorage.setItem("anneOne", anneOneString);
	});

	$("#myCartTwo").on('click', function() {
		var quantidade = $("#myInputTwo").val();
		var name = $("#anneNameTwo").html();
		var price = $("#annePrice").html();
		var photo = $("#photoTwo").attr('src');

		if (quantidade > 0) {
			$("#itemAddTwo").css('display', 'inline');
		}

		var anneTwoString = name + "- " + price + "- " + quantidade + "- " + colorTwo + "- " + photo;
		localStorage.setItem("anneTwo", anneTwoString);
	});
	

	// End ~> Adding values to the cart
};


$(document).ready(main);