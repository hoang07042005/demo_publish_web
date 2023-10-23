var list = document.getElementsByTagName('ul')[0];

var newItemLass = document.createElement('li');
var newTextLass = document.createTextNode('5');
newItemLass.appendChild(newTextLass);
list.appendChild(newItemLass);

var newItemFirst = document.createElement('li');
var newTextFirst = document.createTextNode('1');
newItemFirst.appendChild(newTextFirst);
list.insertBefore(newItemFirst, list.firstChild);

var listItems = document.querySelectorAll('li');
var i;
for (i = 0; i < listItems.length; i++) {
    listItems[i].className = 'cool';
}

var heading = document.querySelector('h1');
var headingText = heading.firstChild.nodeValue;
var totalItems = listItems.length;
var newHeading = headingText + '<span>' +totalItems + '</span>';
heading.innerHTML = newHeading;