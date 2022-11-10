$(document).ready(function () {
    const login = document.querySelector('.button');
    const cadastro = document.querySelector('.cadastro');
    const recuperar = document.querySelector('.recuperar');
    
    login.addEventListener('click', () => {
        iniciaModal('modal-login')
        $('#modal-login').show()
    });
    cadastro.addEventListener('click', () => {
        iniciaModal('modal-cadastrar')
        $('#modal-login').hide()
    });
    recuperar.addEventListener('click', () => {
        iniciaModal('modal-recuperar')
        $('#modal-login').hide()
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
