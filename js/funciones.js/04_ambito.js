var text="HOLA SOY VARIABLE GLOBAL";

function holaMundo(text){
    var hola1="Dentro de funcion";  //ambito del bloque

    console.log(text);
    console.log(hola1);
}

holaMundo(text);
console.log(hola1);