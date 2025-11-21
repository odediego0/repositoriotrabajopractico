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

let form_register = document.querySelector(".register_form");
let input_emailr = document.querySelector(".emailr");
let input_passwordr = document.querySelector(".passwordr");
let input_passwordr2 = document.querySelector(".passwordrr");


form_register.addEventListener('submit', function (t){
    t.preventDefault();
    if (input_passwordr.value == '') {
        alert('El campo contraseña no debe estar vacío');
    } else if (input_passwordr.value.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres');
    } else if (input_passwordr != input_passwordr2){
        alert("Las contraseñas no coinciden");
    } else {
        this.submit();
    }
    })