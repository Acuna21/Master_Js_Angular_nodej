/*Utilizando un bucle mostrar la suma y la media de los numeros introducidos hasta que se ingrese un numero negativo (mostrar resultado)*/

var number=prompt("Ingrese un numero");
var addition=0;
var cont=0;
do{
    var number=prompt("Ingrese un numero. Hasta ingresar uno negativo");

    if (isNaN(number)){
        number=0;
    }
    else if (number>0){
        addition=number+addition;
        cont++

    }
}
while(number>=0){
}

alert("La suma de todos los numeros es: "+ addition);
alert("La media de todos los numeros es: "+ (addition/cont));