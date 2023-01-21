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

    // Click y doble click
    caja.click(function(){
        $(this).css("background", "blue")
                .css("color", "white");
    });

    caja.dblclick(function(){
        $(this).css("background", "yellow")
                .css("color", "black");
    });

    // evento focus y blur
    let name1=$("#name");
    let date= $("#date");

    name1.focus(function(){
        $(this).css("border","2px solid green");
    });

    name1.blur(function(){
        $(this).css("border","1px solid trasparent");
        date.text($(this).val()).show();  //mostrar elemento

    });

    // Mousedown y mouseup 

    // cuando presiono el mouse
    date.mousedown(function () { 
        $(this).css("border-color","blue");
    });

    // cuando suelto el mouse
    date.mouseup(function () { 
        $(this).css("border-color","red");
        
    });

    // Mousemove-->Seguir al raton
  $(document).mousemove(function (event) { 
    let follow=$("#follow");
    follow.css("left",event.clientX)
                 .css("top",event.clientY);
  });






});
    

