const menu = document.querySelector('#mobile_menu');
const menu_link = document.querySelector('.navbar_menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is_active');
    menu_link.classList.toggle('active');
});