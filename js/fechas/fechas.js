let fecha=new Date()
let day=fecha.getDate();
let year=fecha.getFullYear();
let mes=fecha.getMonth();
let hora=fecha.getHours();

let textHora= `
    El año es: ${year}
    El mes es: ${mes}
    El día es: ${day}
    La hora es: ${hora}

`;

console.log(textHora);
