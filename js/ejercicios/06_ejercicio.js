/*Numero par o impar
1. Ventana que pida el numero
2.Si no es valido que pida el numero
*/

var number=prompt("Ingrese un numero");

while (number<0 || isNaN(number)){
    var number=prompt("Ingrese un numero");
    
}

if(number%2==0){
    console.log("El numero "+number +" es par");
}
else{
    console.log("El numero "+number +" es impar");
}
