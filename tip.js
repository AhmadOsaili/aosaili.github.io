/**
 * 
 */
function calcTip() {
	var subtotalElem = document.getElementById('subtotal');
	var tipElem = document.getElementById('tip');
	//var totalElem = document.getElementById('total');
 	var subtotal = parseInt(subtotalElem.value); 
	var tip = parseInt(subtotal*(tipElem.value/100));
	//var total = 100000;
	//totalElem.innerHTML = '$' + subtotal.value;
	total.innerHTML ='$' + (subtotal+tip);
}