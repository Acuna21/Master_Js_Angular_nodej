// DOM- DOCUMENT OBJETC MODEL
// var caja=document.getElementById("container");  //Saca el texto del html

// Otra forma conseguir con id concreto
caja=document.querySelector("#container");

// Cambiando color
function cambiandoColor(color){
    caja.style.background=color;
}

// // Cmbiar texto HTML
caja.innerHTML="TEXTO EN LA CAJA DESDE JS";
caja.style.background="red";
caja.style.padding="15px";
// caja.className("caja");
console.log(caja);

//Otra forma elemento por etiqueta
var todosLosDiv=document.getElementsByTagName("div");
console.log(todosLosDiv);

// Accediendo a un elemento de los div
var contenido=todosLosDiv[2];
contenido.innerHTML="Cambie de texto";
console.log(contenido);

// Recorres todo los divs
// var valor; 
// for (valor in todosLosDiv){
//     var parrafo=document.createElement("p");
//     var texto=document.createElement(valor);
//     parrafo.appendChild(texto);
// };

//Conseguir elemento por clase
var elementoPorClase=document.getElementsByClassName("user");


// elementoPorClase[0].style.background="yellow";
// elementoPorClase[1].style.background="yellow";
var tamaño=elementoPorClase.length;
for (var i=0; i<tamaño;i++){
    elementoPorClase[i].style.background="yellow";
}
console.log(elementoPorClase);

//Seleccionar las clases con query selector
var clasesSeleccionadas=document.querySelector("#sara");  //Recomendable para id no para clases
console.log(clasesSeleccionadas);

