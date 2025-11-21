document.addEventListener('DOMContentLoaded', function () {
    let emailUsuario = localStorage.getItem('usuarioEmail');
    let userActions = document.querySelector('.user-actions');
    
    if (emailUsuario && userActions) {
        userActions.innerHTML = 
            `<li class="saludo">Bienvenido: ${emailUsuario}</li>
            <li><button class="logoutBtn" type="button">LOGOUT</button></li>`;   
        }
    });

