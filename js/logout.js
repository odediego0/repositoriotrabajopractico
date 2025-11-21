document.addEventListener('DOMContentLoaded', function () {
    const logoutBtn = document.querySelector('.logoutBtn');
    const userActions = document.querySelector('.user-actions');

    if (logoutBtn && userActions) {
        logoutBtn.addEventListener('click', function () {
            localStorage.removeItem('usuarioEmail');
            userActions.innerHTML =
               `<li> <a href="./login.html"><button type="button">LOG IN</button></a> </li>
                <li ><a href="./register.html"> <button type="button">REGISTER</button></a> </li>`;
        });
    }
});