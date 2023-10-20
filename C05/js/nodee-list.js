var hotTtems = document.querySelectorAll('li.hot');
if (hotTtems.length > 0) {
    for (var i = 0; i < hotTtems.length; i++) {
        hotTtems[i].className = 'cool';
    }
}