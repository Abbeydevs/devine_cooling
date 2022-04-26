

window.addEventListener('scroll', function () {
    let header = document.querySelector('nav');
    let windowPosition = window.scrollY > 0 
    header.classList.toggle('scrolling-active', windowPosition);
})



const openFirstSlideModal = document.getElementById("first-slide-modal");
const closeFirstSlideModal = document.getElementById("first-slide-modal");

function openFirstModal() {
    openFirstSlideModal.style.display = "block";
}

function closeFirstModal() {
    closeFirstSlideModal.style.display = "none";
}
