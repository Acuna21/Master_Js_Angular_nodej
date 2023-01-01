// Todos los numeros divisores introduccidos por el usuario
var number1=prompt("Ingrese un numero: ",1);

for (var i=1;(i<=number1); i++){
    if(number1%i==0){
        console.log("Divisor", i);
    }
}