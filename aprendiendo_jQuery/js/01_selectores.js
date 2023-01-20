// Libreria de JS
// Reducir codigo de js puro, se utiliza mucho en proyectos monoliticos. 

$(document).ready(function(){
    console.log("Estamos listos");

    // Seleccionar por ID
    $("#1").css("background", "red")
                    .css("color", "white");

    $("#2").css("background", "green")
                    .css("color", "white");

    $("#3").css("background", "yellow")
                    .css("color", "red");
    
    // Seleccionar por Clase
    let claseJuntos=$(".juntos");

    $(".solo").click(function(){
        $(this).addClass("juntos");
    })

    // Sleccionar etiquetas
    let parrafos=$("p");

    parrafos.click(function(){
        let that=$(this);
        
        if (!that.hasClass("grande")){
            that.addClass("grande");
        }
        else{
            that.removeClass("grande");
        }
    })


    // Selecctores de atributos
    $("[title='Google']").css("color", "red");
    $("[title='Facebook']").css("color", "red");
    $("[title='Youtube']").css("color", "red");
    

});

