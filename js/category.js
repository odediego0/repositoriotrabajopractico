fetch(`https://dummyjson.com/products/categories`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (error) {
        console.log('Error: ' + error);
    });

let productos = data.results;
console.log(productos);

container = document.querySelectorALL('.productose');

for (let i = 0; i < productos.length; i++) {
    container.innerHTML += `<article>`;
}
