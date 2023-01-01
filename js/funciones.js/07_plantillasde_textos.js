// Plantillas de texto
var nameC=prompt("Ingresa tu nombre: ");
var last_name=prompt("Ingresa tu apellido: ");

var texto=`
    <h1>Hola ¿Que tal?</h1> 
    <h2>Mi nombre es: ${nameC} y mi apellido es: ${last_name}</h2>`;
document.write(texto);