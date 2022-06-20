const menu = document.querySelector('#mobile-menu');
const leftnav = document.querySelector('.left-nav');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    leftnav.classList.toggle('active');
})