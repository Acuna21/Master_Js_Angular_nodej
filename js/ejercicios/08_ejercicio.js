/*Calculadora:
1. Pida dos numeros por pantalla
2.Si metemos mal un numero que nos lo vuelva a pedir
3. En el cuerpo de la pagina, en una alerta y por la consola elresultado de sumar, restar, multiplicar y divivir esas dos cifras
*/ 
number1=parseInt(prompt("Ingrese el número 1: "));
number2=parseInt(prompt("Ingrese el número 2: "));

while (((number1)<0) || ((number2) <=0) || isNaN(number1) || isNaN(number2)){
    number1=parseInt(prompt("Ingrese el número 1: "));
    if (number2==0){
        number2=parseInt(prompt("Ingrese un numero valido. Recuerde que la division por cero no se puede"));
    }
    else{
        number2=parseInt(prompt("Ingrese el número 2: "));
    }
}
var adittion=number1 + number2; //Suma
var subtraction=number1-number2;  //Resta
var multiplication=number1*number2;  //Multiplicacion
var division=number1/number2; //Division

alert("La suma= "+ adittion + ".\n" +"La resta= "+subtraction+".\n"+"La division= "+division+".\n"+"La mutiplicacion= "+multiplication+".\n");