$(document).ready(function(){
   

    // MouseOver y MouseOut
    let caja=$("#caja");

    /*
    caja.mouseover(function(){
        $(this).css("background","red");
    });

    caja.mouseout(function(){
        $(this).css("background","green");
    })
    */

    // Hover-->Manera mas secillas
    function cambiaRojo(){
        $(this).css("background","red");
    };

    function cambiaVerde(){
        $(this).css("background","green");
    };

    caja.hover(cambiaRojo, cambiaVerde);

    



});
    

