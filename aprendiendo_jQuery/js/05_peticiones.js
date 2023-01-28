$(document).ready(function(){
   
    // Metodo load-->Me pesrmite llamar por medio de GET  y meter el resultado en un elemento de la pagina
    // let date= $("#date");
    // date.load("https://reqres.in/");

    // GET Y POST


    $.get("https://reqres.in/api/users", {page:2}, function(responde){
        responde.data.forEach((element,index) => {
            $("#date").append("<p>"+element.id+". "+ element.first_name+"<p>");
        });
    });

    let user={
        name:"Sara Acuña",
        age:"20",
        country:"Colombia"
    }
    $.post("https://reqres.in/api/users", user, function(responde){
        console.log(responde);
    });








});