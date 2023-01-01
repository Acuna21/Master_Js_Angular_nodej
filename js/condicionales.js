// Condicionales

/* OPERADORES RELACIONALES
Mayor que >
Menor que <
Mayor o igual >=
Menor que <=
Igual ==
Diferente !=
*/

var edad_ingresada=80;
var nombre="Sara";

if (edad_ingresada>=18){
    console.log(nombre+" Es mayor de edad");
    if (edad_ingresada <= 33){
        console.log("Aun eres un mmilenial");
    }
    else if(edad_ingresada>=70){
        console.log("Eres anciano");
    }
    else{
        console.log("Ya no eres milenial");
    }
}
else{
    console.log(nombre+" No es mayor de edad");
}


/*OPERADORES LOGICOS
AND(&&) -->Ambas se deben cummplir*
OR (||) -->se cumple por lo menos 1 condicion
NEGACION-->!
*/


var year=2019;
// NEGACION
if (year!=2016){
    console.log("El año no es 2016, en realidad es " + year);
}
else{
    console.log("El año es 2016");
}

//AND
if (year>=2000 && year<=2020 && year!=2018){
    console.log("Era actual");
}
else{
    console.log("Era posmoderna");
}

// O
if (year==2008 || year==2018){
    console.log("El año termina en 8");
}
else{
    console.log("El año no acaba en 8");
}


