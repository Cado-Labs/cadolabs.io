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

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then(() => navigator.serviceWorker.ready.then((worker) => {
            worker.sync.register('syncdata');
        }))
        .catch((err) => console.log(err));
}
