var firstItem = document.getElementById('one');
var itemContent = firstItem.innerHTTML;
firstItem.innerHTTML =  '<a href=\"http://example.org\">' + itemContent + '</a>';