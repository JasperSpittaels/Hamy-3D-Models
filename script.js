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