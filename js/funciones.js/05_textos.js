// Transformacion de textos
var numero=444;
var texto1="Bienvenido al curso";
var texto2="Es un excelente curso";

// Convertir numero a string
var dato=numero.toString();
console.log(dato);

//Convertir texto a mayuscula
dato=texto1.toUpperCase();
console.log(dato);

//Convertir texto a minuscula
dato=texto1.toLocaleLowerCase();
console.log(dato);

// Longitud de un texto
console.log(texto1.length);

// Concatenar Unir texto
// var textoTotal=texto1+" "+texto2;
// console.log(textoTotal);

var textoTotal=texto1.concat(" "+texto2)   // taambien concatena
console.log(textoTotal);

// METODOS DE BUSQUEDA
var busqueda=texto1.indexOf("curso"); //tambien se puede usar search funciona igual
console.log("La palabra se encuentra en:"+busqueda);

// Ultimo encontrado
var busqueda2=textoTotal.lastIndexOf("curso");
console.log("La palabra se encuentra en:"+busqueda2);

// Metodo match
// Devuelve coleccion de resultados que encuentre
var busqueda3=textoTotal.match(/curso/gi);
console.log(busqueda3);

// // Metodo sub--->Traeme la palabra del caracter tal al caracter tal
// var busqueda4=textoTotal.substr(14,18);
// console.log(busqueda4);

//Metodo  charAt
var busqueda5=textoTotal.charAt(12);  //sacar un caracter especifico 
console.log(busqueda5);


var busqueda6=textoTotal.startsWith("Bi");  //true si encuentra la palabra al inicio del strings
console.log(busqueda6);

// Metodo includes
var busqueda7=textoTotal.includes("Bienvenido");   //Busca la palabra tal cual este escrita
console.log(busqueda7);


// FUNCIONES DE REEMPLAZO
var busqueda8=textoTotal.replace("Bienvenido", "Hola bb");   //Remplaza una palabra por otra
console.log(busqueda8);

// Metodo slice, corta la palabra desde el indice que se indica


// Metododo 
var busqueda9=textoTotal.trim();   //Quita los espacios del cominezo y final
console.log(busqueda9);