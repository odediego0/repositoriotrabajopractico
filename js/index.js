let container = 

fetch('https://dummyjson.com/products')
.then(function(res){
    return res.json();
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log('Error:', error);
})

let resultado = data.results
console.log(resultado);

for (let i = 0; i < resultado.length; i++) {


