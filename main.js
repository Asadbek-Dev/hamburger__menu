const menu = document.querySelector('.menu');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');



openMenu.addEventListener('click', showHumburger);
closeMenu.addEventListener('click', closeHumburger);

function showHumburger() {
    menu.style.display = 'flex';
    menu.style.top = '0';
}
function closeHumburger() {
    menu.style.top = '-1000px'
}