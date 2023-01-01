// Programa que pida dos numeros y que nos diga cual es mayor y si son iguales. Si los numeros no son un numero o menores o iguales a creo pedir de nuevo los datos
var number1=prompt("Ingrese un numero: ",0);
var number2=prompt("Ingrese otro numero: ",0);

// isNaN 
// me devuelve true o false. Si devuelve true no es un numero 

while (((number1 || number2)<=0) || isNaN(number1) || isNaN(number2)){
    alert("INGRES NUMEROS VALIDOS");
    var number1=prompt("Ingrese un numero: ",0);
    var number2=prompt("Ingrese otro numero: ",0);
}
if (number1==number2){
    console.log("Los numeros son iguales");
}
else if (number1>number2){
    console.log("El numero mayor es :"+number1);
    console.log("El numero menor es :"+number2);
}
else if (number2>number1){
    console.log("El numero mayor es :"+number2);
    console.log("El numero menor es :"+number1);
}
-1
