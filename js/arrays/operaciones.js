// Operaciones con Array
var categorias=["Acción", "Terror", "Comedias"]
var peliculas=["After", "Gran Torino","IT","Matilda","Luci"]
var cine=[categorias,peliculas];

// Añadir elemento al array
peliculas.push("Lluvia de hamburguesa");
console.log(peliculas);

// Eliminar el ultimo elemento
// peliculas.pop();
// console.log(peliculas);

//Eliminar un elemento en especifico
indice=peliculas.indexOf("Matilda");
if (indice>-1){
    peliculas.splice(indice,1);
    console.log(peliculas);
}
else{
    console.log("Elemento no encontrado");
}

// CONVERTIR UN ARRAY A STRING
var peliculasString=peliculas.join(); //separa lo del array por comas lo convierte en TEXTO
console.log(peliculasString);   