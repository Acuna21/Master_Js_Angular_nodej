'use strict';
// Fetch (ajax) y perticiones asincronas
// JSONPlaceholder es una API REST en línea usar cada vez que necesite algunos datos falsos.


var div_usuarios=document.querySelector("#users");
var div_janet=document.querySelector("#janet");
var div_profesor=document.querySelector("#profesor");
getUsers()
    .then(data=>data.json())  //convierte los datos a json
    .then(users=>{
        // console.log('data in then', data);
        listUsers(users.data);

        return getInfo();
    })
    .then(data =>{
        div_profesor.innerHTML=data;

        return getJanet();
    })
    .then(data=>data.json())
    .then(janet=>{
        mostrarJanet(janet.data);
        console.log(janet.data);
    })
    .catch(eror=>{
        console.log("ERROR ALERTA "+ console.error());
    })


// Funcion para sacar la lista de los usuarios
function getUsers(){
    return fetch("https://reqres.in/api/users?page=2");
}

// funcion para sacar un usurio en especifico
function getJanet(){
    return fetch("https://reqres.in/api/users/2");
}
function listUsers(users){
    users.map((user,i)=>{
        //Mostrar los datos del usuario en la pagina
        let name=document.createElement("p");

        name.innerHTML=i+". "+user.first_name+" -->"+user.email;
       
        div_usuarios.append(name);

        document.querySelector(".loading").style.display=("none");


        // Nota extra-->Los uaurios salen del backend

    });
}

function getInfo(){
    var profesor={
        nombre:"Daniel",
        apellidos:"Robles Arteta",
        url:"https://es.wikipedia.org/wiki/Blog"
    };

    return new Promise((resolve, reject)=>{
        var profesorString="";

        setTimeout(function(){
            profesorString=JSON.stringify(profesor) // convertir a json string
            if (typeof profesorString!="string" || profesorString=="")return reject("eror 1" );
            return resolve(profesorString);

        }, 3000);


    });
      
}

function mostrarJanet(user){
    //Mostrar los datos del usuario en la pagina
    let nameJanet=document.createElement("p");
    let avatar=document.createElement("img");

    nameJanet.innerHTML=user.first_name+" -->"+user.email;

    avatar.src=user.avatar;
    avatar.width="100";
    avatar.height="100";
    console.log(avatar);

    div_janet.appendChild(nameJanet);
    div_janet.appendChild(avatar);
    

    document.querySelector("#janet .loading").style.display=("none");
}

// Las promesas se suelen usar para leer archivos, enviar por metodps de POST