const busqueda = document.querySelector(".search-container");

if (busqueda.length === 0) {
    e.preventDefault();
    alert("La búsqueda no puede estar vacía");
} else if (busqueda.length < 3) {
    e.preventDefault();
    alert("La búsqueda debe tener al menos 3 caracteres");
} else {
    console.log("Búsqueda válida");
}

const querystring = location.search;
const querystringobj = new URLSearchParams(querystring);
const buscador = querystringobj.get('q');

console.log(buscador);

fetch(`https://dummyjson.com/products/search?q=${buscador}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (error) {
        console.log('Error: ' + error);
    });

// let productos = data.results;
// console.log(productos);

const resultado = document.querySelector('.category-title');
resultado.innerHTML = 'Resultados de búsqueda para ' + buscador;
