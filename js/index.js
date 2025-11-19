let lista = document.querySelector('.listaCategoria')
fetch(`https://dummyjson.com/products/categories`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        for (let i = 0; i < data.length; i++) {
            lista.innerHTML += `<li><a href="./category.html">${data[i].name}</a></li>`
        }
    })
    .catch(function (error) {
        console.log('Error: ' + error);
    });

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

fetch(`https://dummyjson.com/products/category/smartphones`) //Link de api para usar en la pagina principal, despues hay que cambiar donde dice smartphone por un id
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        for (let i = 0; i < data.length; i++) {
            
        }
    })
    .catch(function (error) {
        console.log('Error: ' + error);
    });