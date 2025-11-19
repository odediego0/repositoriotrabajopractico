const form = document.querySelector(".search-container");
const busqueda = document.querySelector(".buscar");

form.addEventListener('submit', function (event){
    event.preventDefault();
    if (busqueda.value == '' ) {
        alert('Este campo no debe estar vacio');
    } else if (busqueda.value.length < 3 ) {
        alert('Por favor ingrese al menos 3 caracteres');
    } else {
        this.submit();
    }
})



const email = document.querySelector(".login_form");
const input_email = document.querySelector(".email");

form.addEventListener('submit', function (e){
    e.preventDefault();
    if (input_email.value == '' ) {
        alert('Este campo no debe estar vacio');
    } else {
        this.submit();
    }
})

const input_contra = document.querySelector(".password");

form.addEventListener('submit', function (p){
    p.preventDefault();
    if (input_contra.value == '' ) {
        alert('Este campo no debe estar vacio');
    } else if (input_contra.value.length < 6 ) {
        alert('La contraseña debe tener al menos 6 caracteres');
    } else {
        this.submit();
    }
})

localStorage.setItem("email", input_email.value);
