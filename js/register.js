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

let input_emailr = document.querySelector(".emailr");
let input_passwordr = document.querySelector(".passwordr");
let input_passwordr2 = document.querySelector(".passwordrr");
let chek_terminos = document.querySelector("#chekbox");

form.addEventListener('submit', function (t){
    t.preventDefault();
    if (input_passwordr.value() == '') {
        alert('El campo contraseña no debe estar vacío');
    } else if (input_passwordr.value.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres');
    }   
    })