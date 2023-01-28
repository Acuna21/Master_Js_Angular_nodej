$(document).ready(function(){
   

    let box=$("#container");
    let show=$("#show");
    let hidden=$("#hidden");

    // Efecto hide--->ocultar
    hidden.click(function () { 
        box.hide();
    });

    // Mostrar
    show.click(function () { 
        box.show();
    });

    // ANimaciones
    animate=$("#animate");

    animate.click(function(){
        box.animate({
            marginLeft:"500px",
            fontSize:"40px",
            height:"110px"

        },"slow")





    })


});