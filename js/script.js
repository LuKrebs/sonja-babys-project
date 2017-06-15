var main = function() {

	var test = {
		price: 10,
		model: "Anne",
		description: "bla bla bla"
	};

	$("#testLocalStorage").on('click', function () {
		localStorage.setItem("testModel", test.model);
		localStorage.setItem("testDescription", test.description);
	});

	$("#testDisplayModel").html(localStorage.getItem("testModel"));
	$("#testDisplayDescription").html(localStorage.getItem("testDescription"));

};


$(document).ready(main);