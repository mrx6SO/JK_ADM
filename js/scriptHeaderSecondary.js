$(document).ready(function () {    
    const dados = document.querySelector('.button');
    dados.addEventListener('click', () => {
      iniciaModal('modal-login')
      $('#modal-login').show()
    });
  
    loadStorageSave()
  //MODAL
  function iniciaModal(modalID) {
      const modal = document.getElementById(modalID);
                  
      if (modal) {
          modal.classList.add('mostrar');
          modal.addEventListener('click', (e) => {
              if (e.target.id == modalID || e.target.className == 'fechar') {
                  modal.classList.remove('mostrar');
                  $('#modal-login').hide()
              }
          });
      }
  }    
})
function loadStorageSave () {

    let divHouses = document.querySelector("div.houses");
    let divCard = document.createElement("DIV");
   
    jogos = JSON.parse(localStorage.getItem("jogos"))

    if(jogos) {
        $('#buttonRemove').show()
        $('.msg2').hide()
        $('.msg1').show()
        for (let o = 1; o <= 12; o++) {
          
        const element = jogos[jogos.length - o];
        let divHouses = document.querySelector("div.houses");
             let divCard = document.createElement("DIV");
             divCard.classList.add("card-result");
           
               element.name.forEach(obj=>{
                 var span = document.createElement("SPAN");
                 divCard.appendChild(span);
                 divHouses.appendChild(divCard);               
                 span.innerHTML = obj;
               })
        
      }
    } else {
        $('.msg1').hide()
        $('.msg2').show()
    }      
  }
removeItemStorage = () => {
    if (localStorage.hasOwnProperty("jogos")) {
       window.localStorage.removeItem("jogos");
       alert('Jogos exluídos com sucesso!')
       window.location.href = "inicio.html"
    }
    //localStorage.clear();
  }

  
