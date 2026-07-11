let selectedModel = "";
let selectedPrice = "";


function openBuy(model, price) {
	selectedModel = model;
	selectedPrice = price;


	document.getElementById("modelName").innerHTML =
	model + " - €" + price;


	document.getElementById("popup").style.display="flex";
}



function closeBuy() {
	document.getElementById("popup").style.display="none";
}



function sendPayment() {

	let params = {
		model:selectedModel,
		price:selectedPrice,
		time:new Date().toLocaleString()
	};


	emailjs.send(
		"hamy_3d_models",
		"hamy_3d_models_tempate",
		params
	)

	.then(function() {

		alert("Bedankt! Ik controleer de betaling en stuur de downloadlink.");

		closeBuy();

	})


	.catch(function(error) {

		alert("Er ging iets fout.");

		console.log(error);

	});

}