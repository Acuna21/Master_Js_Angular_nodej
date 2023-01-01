//ARRAYS-ARREGLOS-VECTORES--->Coleccion de valores
var nombres=["Sara", "Maria", "Laura", "Raul", "Saira"];
console.log(nombres);
console.log(nombres[2]);

// Cantidad elementos de un array
console.log(nombres.length);

// Ver elemento de un array
/*
var elemento=parseInt(prompt("Que elemento del array quieres? ", 0));
if (elemento>=nombres.length){
    alert("Introduce un numero correcto. Recuerda debe ser menor que: "+nombres.length);
}
else{
    alert("El usuario seleccionado es: "+nombres[elemento]);
}
*/

// Mostrar todos los elementos de un array por pantalla
var lenguajes=new Array("PHP","JS","Python","Angular", "CSS");
var elemento=lenguajes.length;
document.write("<h2>Los lenguajes de programación son: </h2>");
document.write("<ul>");
for (var i=0; (i<lenguajes.length); i++){
    document.write("<li>"+lenguajes[i]+"</li>");
}
document.write("</ul>");

// metodo for Each
// Funciona como el for anterios
lenguajes.forEach((elemento, indice)=>{
    document.write("<li>"+indice+"-"+elemento+"</li>");
});
