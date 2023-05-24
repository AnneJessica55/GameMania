/*Menu hambúrguer*/
function menuDinamico(){
    if (menu.style.display == 'none'){
        menu.style.display = 'block';
    } else{
        menu.style.display = 'none'
    }
}

/*Slide*/
let i = 1;
let img = document.querySelector('#anuncio');

function count(){
    if (i == 1){
    img.setAttribute('src', `Pictures/promocao${i + 1}.gif`);
    i++;
} else {
    img.setAttribute('src', `Pictures/promocao${i - 1}.gif`)
    i--;
}
}