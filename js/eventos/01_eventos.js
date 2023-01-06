// EVENTOS
// Funcion que se ejecuta cuando sucede algo

// Evento del raton

// 1. Cuando le damos click a algo

function cambiarColor(){
    console.log("Me has dado clik")
    bg=boton.style.background;
    if(bg=="green"){
        boton.style.background="red";
        boton.style.padding="12px";
        boton.style.border="1px solid";
    }
    else{
        boton.style.background="green";
    }
    return true;
}
var boton=document.querySelector("#boton");

// Evento click-->Captura el clik
boton.addEventListener('click',function(){
    cambiarColor();
})


//Mouse Over 
boton.addEventListener('mouseover',function(){
    this.style.background="#000";
})


// Mouseout
boton.addEventListener('mouseout',function(){
    this.style.background="yellow";
})

