'use strict'

window.addEventListener('load',function(){

    // Captura el formulario
    var form=document.querySelector("#firstForm");
    var result=document.querySelector(".result");

    form.addEventListener('submit', function(){

        var nameEntered=document.getElementById('name').value;
        var lastName=document.getElementById('lastNameClien').value;
        var age=document.getElementById('age').value;

        // validacion
        if (nameEntered.trim()===null || nameEntered.trim().length===0){
            document.querySelector("#errorName").innerHTML="Nombre no válido";
            return false;
        }
        else{
            document.querySelector("#errorName").style.display="none";
        }
        if (lastName.trim()===null || lastName.trim().length===0){
            document.querySelector("#errorLastname").innerHTML="Apellido no válido";
            return false;
        }
        else{
            document.querySelector("#errorLastname").style.display="none";
        }
        if (age===null || age<=0){
            document.querySelector("#errorAge").innerHTML="Edad no válida";
            return false;
        }
        else{
            document.querySelector("#errorAge").style.display="none";
        }

        result.style.display="block";
        console.log(nameEntered,lastName,age);

        var nameI=document.querySelector('#nameI span');
        var lastNameI=document.querySelector('#lastNameI span');
        var ageI=document.querySelector('#ageI span');

        nameI.innerHTML=nameEntered;
        lastNameI.innerHTML=lastName;
        ageI.innerHTML=age;
    }); 

    
})