const btaoMenu = document.getElementsByClassName('btao-menu');

function menuDinamico(){
const nav = document.getElementsByTagName('nav');
nav.classList.toggle('active');
}

btaoMenu.addEventListener('click', menuDinamico)