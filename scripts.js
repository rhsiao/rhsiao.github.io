function btnColor(btn) {
    var property = document.getElementById(btn);
    if (property.className !== 'buttontoggle') {
        property.className = 'buttontoggle'
        console.log(property.className)
    } else {
        property.className = 'button';
        console.log(property.className)
    }
}

