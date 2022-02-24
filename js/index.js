

window.addEventListener('scroll', function () {
    let header = document.querySelector('nav');
    let windowPosition = window.scrollY > 0 
    header.classList.toggle('scrolling-active', windowPosition);
})

