function setActive(element) {
    var navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(function(link) {
        link.classList.remove('active');
    });
    element.classList.add('active');
}
