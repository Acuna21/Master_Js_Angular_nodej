/*EJERCICIO
1. Pida 6 numeros y los meta en un array
2. Mostrar el array entero en el cuerpo y en la consola
3.Ordenar el array y mostrarlo
4.Invertir el orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por el usuario. Y que nos diga si esta en el array y su posicion*/

var numeros=[];
// 1. Se llena el arreglo con 6 numeros
for (var i=0;i<=5;i++){
    numeros.push(parseInt(prompt("Ingrese un numero: ")));
}
// 2.Mostrar el arreglo
document.write("Los numeros ingresados son: " +numeros+"</br>");
console.log(numeros); 

// Busqueda de un valor
valor=parseInt(prompt("Ingrese el numero a buscar: "));
var busquedaValor=numeros.includes(valor);
if (busquedaValor==true){
    var indice=numeros.indexOf(valor);
    document.write("El numero "+ valor +" se encontro en la posicion "+indice+"</br>");    
}
else{
    document.write("El número"+valor+" no se encuentra. "+"</br>");
}

// 3.Ordenar el aray
var orden=numeros.sort(function(a, b){
    return a - b;
});

document.write("Los numeros ingresados ordenados son: "+ orden +"</br>");

// 4.Invertir el array|
var invertido=numeros.reverse();
document.write("Los numeros en orden invertido son: "+ invertido +"</br>");

//5. Elemento del array
document.write("El array tiene un total de: "+ numeros.length +" elementos"+"</br>");


