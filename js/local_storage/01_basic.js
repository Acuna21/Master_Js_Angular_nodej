'use strict'
// LOCAL STORAGE
// Es una memoria que hay en el navegador



window.addEventListener('load', function(){
    
    // CONPROBR COMPATIBILIDAD CON EL NAVEGADOR
    if(typeof(Storage)!=='undefined'){
        console.log("Local Atorage disponible");
    }
    else{
        console.log("NO COMPARIBLE");
    }

    //GUARDAR DATOS
    localStorage.setItem("titulo", "Curso puro");


    //Recuperar elemento
    document.querySelector("#cajaPeliculas").innerHTML=localStorage.getItem("titulo"); 

    // Guardar un objeto debe ser STRING
    var contacto={
        nombre:"Sara",
        apellido:"Acuna",
        edad:20
    }

    localStorage.setItem("contacto", JSON.stringify(contacto));  //convertir el objeto en json string


    //Recuperar objeto
    var contactos =JSON.parse(localStorage.getItem("contacto"));  
    console.log(contactos);
    document.querySelector("#cajaPeliculas").append(" Hola "+ contactos.nombre);


    //BORAR
    localStorage.removeItem("contacto");

})
    