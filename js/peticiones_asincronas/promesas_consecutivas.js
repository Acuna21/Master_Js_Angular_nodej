let users=[
    {
    id:1,
    nameC:"Sara"
},
{
    id:2,
    nameC:"Daniel"
},
{
    id:3,
    nameC:"Lauri"
}];

let phone=[
    {
        id:1,
        number:113546759
    },
    {
        id:2,
        number:113546700
    },
    {
        id:3,
        number:113546669
    }
];

// funciones

// Encontrar un usuario y con el mismo id obtener el telefono
const obtenerUsuario = id => {
    return new Promise((resolve, reject)=>{
        if (users.find(user=>user.id===id)){
            resolve (obtenerPhone(id));
        }
        else {
            reject (console.log("Uusario no existe"));
        }

    });
}

const obtenerPhone = id => {
    return new Promise((resolve, reject)=>{
        if (users.find(user=>user.id===id)){
            console.log("El usuario existe");
            resolve (console.log("Telefono del usario encontrado"));
        }
        else {
            reject (console.log("No hay telefono con ese usuario"));
        }

    });
}


// promesas
obtenerUsuario(1)
.then(resultado=>{
    return(resultado);
})
.then(mensaje=>{
    console.log(mensaje);

})
.catch(error=>{
    console.log(error);
})
