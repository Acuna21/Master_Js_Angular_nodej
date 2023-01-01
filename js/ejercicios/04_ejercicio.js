/*Mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario*/


var number1=prompt("Ingrese un numero: ",0);
var number2=prompt("Ingrese otro numero: ",0);

for (var i=number1;(i<=number2); i++){
    if(i%2!=0){
        console.log("El numero "+i +" es impar");
    }
}