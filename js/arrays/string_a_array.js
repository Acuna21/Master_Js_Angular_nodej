// CONVERTIR UN ARRAY A STRING
var peliculas=["After", "Gran Torino","IT","Matilda","Luci"];
var peliculasString=peliculas.join(); //separa lo del array por comas lo convierte en TEXTO
console.log(peliculasString);


//CONVERTIR UN STRING EN ARRAY
var nombreCompleto="Sara Acuna Benavides";
var nombreC=nombreCompleto.split(", ");
// console.log(nombreC);

// ORDENAR ARRAY
// Alfabetico
var alfabetico=peliculas.sort();
console.log(alfabetico);

// REVERSE--->Orden inverso que tenia
var inverso=peliculas.reverse();
console.log(inverso);

// RECORRES ARREGLOS
for (let peli in peliculas){
    document.write("<li>"+peliculas[peli]+"</li>");

}
