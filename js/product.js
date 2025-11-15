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

let detalle = document.querySelector('.producto')
fetch(`https://dummyjson.com/products/1`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        detalle.innerHTML += `<h2>${data.title}</h2>
        <p>${data.brand}</p>
        <p>${data.description}</p>
        <p>${data.price}$</p>
        <img src="${data.images[0]}"/>
        <a href="./category.html">${data.category}</a>
        <p>Stock: ${data.stock} </p>
        <ul>Tags:
            <li>${data.tags[0]}</li>
            <li>${data.tags[1]}</li>
        <ul>`
    })
    .catch(function (error) {
        console.log('Error: ' + error);
    });
   