const menuIcon = document.querySelector('.burger-menu');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('change');
});

// const modalBtn = document.querySelector('.modal-btn');
// const modalBg = document.querySelector('modal-bg');
// const modalClose = document.querySelector('.modal-close');

// modalBtn.addEventListener('click', function(){
//     modalBg.classList.add('bg-active')
// });

// modalClose.addEventListener('click', function(){
//     modalBg.classList.remove('bg-active');
// });