'use strict'

window.addEventListener('load', function(){

// Timers
function intervalo(){
    var tiempoMnesaje=setInterval(function(){

        console.log("Set Interval ejecutado");
    
        let encabezado=document.querySelector("h1");
        
        if (encabezado.style.fontSize=="50px"){
            encabezado.style.fontSize="20px";
        }
        else{
            encabezado.style.fontSize="50px";
        }
    },3000);
    return tiempoMnesaje;
}
var tiempo=intervalo();
//setTimeout----> Solo se ejecuta una vez 
var tiempoUnico=setTimeout(() => {
    console.log("setTimepout ejecutado");
    let sub=document.querySelector("h3");
    sub.style.color="red";
}, 4000);

// parar
var botonDetener=document.querySelector("#stop");
    
botonDetener.addEventListener("click",function(){
    alert("Has tenenido el intervalo");
    clearInterval(tiempo);
});

// Iniciar
var empezar=document.querySelector("#star");
empezar.addEventListener("click", function(){
    alert("Iniciando");
    intervalo();

});










});








