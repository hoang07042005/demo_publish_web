var firstItem = document.getElementsById('one');
if (firstItem.hasAttribute('class')) {
    var attr = firstItem.getAttribute('cclass');
    var el = document.getElementById('scriptResults');
    el.innerHTML = '<p>The first item has a class a class name: ' + attr + '</p>';
}