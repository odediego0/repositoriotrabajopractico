document.addEventListener('DOMContentLoaded', function () {
    let UsuarioLogueado = localStorage.getItem('email_local');
    let login = document.querySelector('.logi');
    let registro = document.querySelector('.regi');
    let header = document.querySelector('header');



    if (UsuarioLogueado === "True") {
        let contenido  = ` 
            <div style="margin-right: 20px;">
                Bienvenido ${nombreUsuario}
            </div>
            <span id="logout" style="cursor: pointer; font-weight: bold; color: white; text-decoration: underline;">
                LOGOUT
            </span>`;

        contenedor.innerHTML=contenido;
        const logoutlabel = document.querySelector('#logout');
        if (logoutlabel) {
            logoutlabel.addEventListener('click', logout);
        }
        cartellogin.style.display = 'none';
        
        cartelregistro.style.display = 'none';
    }

});