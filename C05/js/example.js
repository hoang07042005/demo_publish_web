var list = document.getElementsByTagName('ul')[0];
var newItemLast = document.createElement('li'); 
var newTextLast = document.createTextNode('cream'); 
newItemLast.appendChild(newTextLast);
list.appendChild(newItemLast);

var newTextFirst = document.createTextNode('kale');
var newItemFirst = document.createElement('li'); 
newItemFirst.appendChild(newTextFirst); 
list.insertBefore(newItemFirst, list.firstChild);

var listTtems = document.querySelectorAll('id');

var i;
for (i = 0; i < listTtems.length; i++) {
    listTtems[i].className = 'cool';
}
var heading = document.querySelector('h2');
var headingText = heading.firstChild.nodeValue;
var totalItems = listTtems.length;
var newHeading = headingText + '<span>' + totalItems + '</span>';
heading.innerHTML = newHeading;