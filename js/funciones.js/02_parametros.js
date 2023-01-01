// PARAMETROS REST Y SPREAD

// REST
function listadoFrutas(fruta1, fruta2, ...restodeFrutas){
    console.log(fruta1);
    console.log(fruta2);
    console.log(restodeFrutas);
}

listadoFrutas("Mango", "Perra", "Piña", "Sandía", "Fresa");

// SPREAD DE PARAMETROS
var frutas=["Naranja", "Manzana"];
listadoFrutas(...frutas);