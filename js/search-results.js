const busqueda = document.querySelector(".search-container input");

if (busqueda == '') {
    alert("La búsqueda no puede estar vacía");
} else if (busqueda < 3) {
    alert("La búsqueda debe tener al menos 3 caracteres");
}

const querystring = location.search;
const querystringobj = new URLSearchParams(querystring);
const buscador = querystringobj.get('q');

console.log(buscador);


const resultado = document.querySelector('.category-title');
resultado.innerHTML = 'Resultados de búsqueda para ' + buscador;

