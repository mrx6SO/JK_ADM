'use strict';
function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 200 * i)

  });
}

window.onload = function() {

    const dadosAdm = document.querySelector('.buttonAdm');
    $(dadosAdm).click(() => {
     location.href = "./src/admin/index.php"
    })

    const titulo = document.querySelector('.titulo-principal');
typeWrite(titulo);
};
