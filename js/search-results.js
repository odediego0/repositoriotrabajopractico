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
        alert('Por favor este campo no debe estar vacio');
       
    } else if (busqueda.value.length < 3 ) {
        alert('Por favor ingrese al menos 3 caracteres');
    } else {
        this.submit();
    }
})

const querystring = location.search;
const querystringobj = new URLSearchParams(querystring);
const buscador = querystringobj.get('q');

console.log(buscador);

const resultado = document.querySelector('.category-title');
resultado.innerHTML = 'Resultados de búsqueda para ' + buscador;

