$(document).ready(function () {
    const dados = document.querySelector('.button');
    
    $("a.link1").click(function () {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#gameOnPress").offset().top
        }, 2000);
    });
    dados.addEventListener('click', () => {
        iniciaModal('modal-login')
        $('#modal-login').show()
    });
    
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
