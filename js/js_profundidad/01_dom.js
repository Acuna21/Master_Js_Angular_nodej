// DOM- DOCUMENT OBJETC MODEL
// var caja=document.getElementById("container");  //Saca el texto del html

// Otra forma
var caja=document.querySelector("#container");

// Cambiando color
function cambiandoColor(color){
    caja.style.background=color;
}
// Cmbiar texto HTML
caja.innerHTML="TEXTO EN LA CAJA DESDE JS";
caja.style.background="red";
caja.style.padding="15px";
// caja.className("caja");

console.log(caja);
