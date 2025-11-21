let lista = document.querySelector('.listaCategoria')
fetch(`https://dummyjson.com/products/categories`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        for (let i = 0; i < data.length; i++) {
            lista.innerHTML += `<li><a href="./category.html?id=${data[i].slug}">${data[i].name}</a></li>`
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

let productsBeauty = document.querySelector(".beauty");
fetch(`https://dummyjson.com/products/category/beauty`)

    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        for (let i = 0; i < data.products.length; i++) {
            let producto = data.products[i]
            productsBeauty.innerHTML +=
            `
        <article class="producto">
        <img src="${producto.thumbnail}" alt="${producto.title}">
        <h3>${producto.title}</h3>
        <p>${producto.description}</p>
        <p>Precio: $${producto.price}</p>
        <a href= "./product.html?id=${producto.id}">Ver detalles</a>
        </article>
        `
        }
    })
    .catch(function (error) {
        console.log('Error: ' + error);
    });

  let productsFragrances = document.querySelector(".fragrances");
fetch(`https://dummyjson.com/products/category/fragrances`)

    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        console.log(data);
        for (let i = 0; i < data.products.length; i++) {
            let producto = data.products[i]
            productsFragrances.innerHTML +=
            `
        <article class="producto">
        <img src="${producto.thumbnail}" alt="${producto.title}">
        <h3>${producto.title}</h3>
        <p>${producto.description}</p>
        <p>Precio: $${producto.price}</p>
        <a href="./product.html?id=${producto.id}">Ver detalles</a>
        </article>
        `
        }
    })

    .catch(function (error) {
        console.log('Error: ' + error);
    });


   
