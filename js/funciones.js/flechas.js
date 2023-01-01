// Funciones de flecha. Definir funcioines de manera mas clara
function operation(number1, number2,otraFuncion){
    var adittion=(number1+number2);
    console.log(otraFuncion(number1,number2));
    return (adittion);
}

operation(10, 6,(number1,number2)=>number1*number2);