var main = function() {

	// Start anneOne anneTwo

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


	// End ~>  anneOne anneTwo

	// Start ~> carolina

	var carolinaColor = $("#carolinaColor").html();
	var carolinaNumber = $("#carolinaNumber").html();
	$("#color").css('background-color', carolinaColor);

	$("#carolinaMyPlusIcon").on('click', function() {
		var a = $("#carololinaMyInput").val();
		a = Number(a);
		a += 1;
		$("#carololinaMyInput").val(a);
	});
	$("#carolinaMyMinusIcon").on('click', function() {
		var a = $("#carololinaMyInput").val();
		a = Number(a);
		a -= 1;
		$("#carololinaMyInput").val(a);
	});

	// Adding values to the Cart
	$("#carolinaMyCart").on('click', function() {
		var quantidade = $("#carololinaMyInput").val();
		var name = $("#carolinaName").html();
		var price = $("#carolinaPrice").html();
		var photo = $("#big-picture").attr('src');

		if (quantidade > 0) {
			$("#carolinaItemAdd").css('display', 'inline');
		}

		var carolinaString = name + "- " + price + "- " + quantidade + "- " + color + "- " + photo;
		localStorage.setItem("carolina", carolinaString);
	});

	// End ~> carolina

	// Start ~> dani

	var daniColor = $("#daniColor").html();
	var daniNumber = $("#daniNumber").html();
	$("#color").css('background-color', daniColor);

	$("#daniMyPlusIcon").on('click', function() {
		var a = $("#daniMyInput").val();
		a = Number(a);
		a += 1;
		$("#daniMyInput").val(a);
	});
	$("#daniMyMinusIcon").on('click', function() {
		var a = $("#daniMyInput").val();
		a = Number(a);
		a -= 1;
		$("#daniMyInput").val(a);
	});

	// Adding values to the Cart
	$("#daniMyCart").on('click', function() {
		var quantidade = $("#daniMyInput").val();
		var name = $("#daniName").html();
		var price = $("#daniPrice").html();
		var photo = $("#big-picture").attr('src');

		if (quantidade > 0) {
			$("#daniItemAdd").css('display', 'inline');
		}

		var daniString = name + "- " + price + "- " + quantidade + "- " + color + "- " + photo;
		localStorage.setItem("dani", daniString);
	});

	// End ~> dani

	// Start ~> deniseOne

	var deniseColor = $("#deniseColor").html();
	var deniseOneNumber = $("#deniseOneNumber").html();
	$("#color").css('background-color', deniseColor);

	$("#deniseOneMyPlusIcon").on('click', function() {
		var a = $("#deniseOneMyInput").val();
		a = Number(a);
		a += 1;
		$("#deniseOneMyInput").val(a);
	});
	$("#deniseOneMyMinusIcon").on('click', function() {
		var a = $("#deniseOneMyInput").val();
		a = Number(a);
		a -= 1;
		$("#deniseOneMyInput").val(a);
	});

	// Adding values to the Cart
	$("#deniseOneMyCart").on('click', function() {
		var quantidade = $("#deniseOneMyInput").val();
		var name = $("#deniseName").html();
		var price = $("#denisePrice").html();
		var photo = $("#big-picture").attr('src');

		if (quantidade > 0) {
			$("#deniseOneItemAdd").css('display', 'inline');
		}

		var deniseOneString = name + "- " + price + "- " + quantidade + "- " + color + "- " + photo;
		localStorage.setItem("denise", deniseOneString);
	});

	// End ~> deniseOne

};


$(document).ready(main);