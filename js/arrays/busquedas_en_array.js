var lenguajes=new Array("PHP","JS","Python","Angular", "CSS");

// BUSCAR ALGO EN EL ARRAY
var busqueda=lenguajes.find(lengu=>lengu=="CSS");
document.write(busqueda);

// BUSCAR EL INDICE
var busqueda=lenguajes.findIndex(lengu=>lengu=="CSS");
document.write(busqueda);

var edades=[10, 34, 12, 45, 67, 12, 17, 19];
var busquedaEdad=edades.some(edad=>edad>=20);  //Buscar elementos que cumplan una condicion concreya
console.log(busquedaEdad);