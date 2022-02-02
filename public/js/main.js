const toggleMenu = document.querySelector('.menu-toggler');
const headerMenu = document.querySelector('header nav.menu');

toggleMenu.addEventListener('click', event => {
    headerMenu.classList.toggle('active');
});

document.addEventListener('click', event => {
   if (event.target.closest('nav.menu')) {
       return;
   }
    headerMenu.classList.remove('active');
});
