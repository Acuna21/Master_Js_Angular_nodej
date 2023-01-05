
var input=document.querySelector("#campo_nombre");

// ---FOCUS
// Cuando entra
input.addEventListener('focus',()=>{
    console.log("[FOCUS] Estas dentro del input");
});

// Otra forma-->
// input.addEventListener('focus',function(){
//     console.log("[FOCUS] Estas dentro del input");
// });

//---BLUR-->Capta el evento cuando salimos 
input.addEventListener('blur',()=>{
    console.log("[BLUR] Fuera del input");
});

//KEYDOWN--->Sucede cuando sea escrito una tecla
input.addEventListener('keydown',(event)=>{
    console.log("KEYDOWN] Pulsando esta tecla", String.fromCharCode(event.keyCode));
});

//KEYPRESS -->Cuando ya he presionado la tecla
input.addEventListener('keypress',(event)=>{
    console.log("KEYPRESS] Tecla presionada", String.fromCharCode(event.keyCode));
});

// KEYUP--->Captura el evento cuando suelto la tecla
input.addEventListener('keyup',(event)=>{
    console.log("KEYUP] Tecla soltada", String.fromCharCode(event.keyCode));
});

// load---->ejecuta todo cuando la pagina este cargada luego hace el js. 

window.addEventListener('load',()=>{
    // TODO EL CODIGO JS
})