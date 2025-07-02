const menubutton = document.querySelector ('.menu-button');
// const nav = document.querySelector ('.nav');
const mainmenu = document.querySelector ('.menu');

menubutton.addEventListener('click', ()=>{
    menubutton.classList.toggle('menu-open');
    mainmenu.classList.toggle('menu-open');
});