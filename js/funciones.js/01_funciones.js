// FUNCIONES
// Es una agrupacion reutilizable de un conjunto de instrucciones


// Definir la funcion

function porConsola(number1,number2){
    console.log("Suma: "+(number1+number2));
        console.log("Resta: "+(number1-number2));
        console.log("Multiplicación: "+(number1*number2));
        console.log("Division: "+(number1/number2));
        console.log(mostrar);
        console.log("______________________");
}
function porPantalla(number1,number2){
    document.write("Suma: "+(number1+number2)+"</br>");
        document.write("Resta: "+(number1-number2)+"</br>");
        document.write("Multiplicación: "+(number1*number2)+"</br>");
        document.write("Division: "+(number1/number2)+"</br>");
        console.log("______________________");
}

function calculadora(number1,number2,mostrar=false){ // Parametros
    if (mostrar=false){
        porConsola(number1,number2);
    }
    else{
        porPantalla(number1,number2);
    }
    return true;
    
}

// Llamar a la funcion y mandarle datos
calculadora(2,4,true);  // OBLIGATORIO PASAR LOS PARAMETROS
calculadora(8,4); 

// for(var i=0; i<=5; i++){
//     console.log(i);
//     calculadora(i, 2);
// }


// PARAMETROS OPCIONALES
