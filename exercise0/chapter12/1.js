function printAttr(el, attr) {
    for (let a of attr) {
        console.log(el.getAttribute(a));
    }
}

printAttr(document.getElementById('a'), ['id', 'class', 'style', 'val']);
