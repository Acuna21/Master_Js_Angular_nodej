'use strict';
// Fetch (ajax) y perticiones asincronas
// JSONPlaceholder es una API REST en línea usar cada vez que necesite algunos datos falsos.
var users=[];

var div_usuarios=document.querySelector("#users");
fetch("https://jsonplaceholder.typicode.com/users")
    .then(data=>data.json()  //convierte los datos a json
    .then(data=>{
        users=data;
        console.log(users);
        
        users.map((user,i)=>{
            //Mostrar los datos del usuario en la pagina
            let name=document.createElement("p");

            name.innerHTML=i+". "+user.name+" -->"+user.phone;
            // nickname.innerHTML=i
            div_usuarios.append(name);

            document.querySelector(".loading").style.display=("none");

            // Los uaurios salen del backend

        });
    }));                