var main = function() {


	/*var test = {
		price: 10,
		model: "Anne",
		description: "bla bla bla"
	};*/

	/* $("#testLocalStorage").on('click', function () {
		localStorage.setItem("testModel", test.model);
		localStorage.setItem("testDescription", test.description);
	});

	$("#testDisplayModel").html(localStorage.getItem("testModel"));
	$("#testDisplayDescription").html(localStorage.getItem("testDescription")); */

	var color = $("#test").html();
	var colorTwo = $("#testTwo").html();

	var name = $("#").html();


	var number = $("#number").html();
	var numberTwo = $("#numberTwo").html();

	
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

	$("#myCart").on('click', function() {
		var quantidade = $("#myInput").val();

		if (quantidade > 0 && number > 0) {
			var item = {};
			item.quantidade = quantidade;
			localStorage.setItem("quantidade", quantidade);
			$("#testQuantidade").html(localStorage.getItem("quantidade"));
		};
	});

};


$(document).ready(main);