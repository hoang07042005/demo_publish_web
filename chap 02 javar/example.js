var greeting = 'Howdy';
var name = 'Molly';
var message = ',  please check your order:';
var welcome = greeting + name + message;

var sign = 'Monttague House';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

var el = document.getElementById('greeting');
el.textContent = welcome;
var elSign = document.getElementById('userSign');
elSign.textContent = sgin;
var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;
var elSubtotal = document.getElementById('subtotal');
elSubtotal.textContent = '$' + subTotal;
var elshipping = document.getElementById('shipping');
elshipping.textContent = '$' + shipping;
var elGrandTotal = document.getElementById('grandtotal');
elGrandTotal.textContent = '$' + grandTotal;