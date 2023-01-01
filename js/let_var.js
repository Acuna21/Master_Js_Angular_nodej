
 /*
 Pruebas Variable let y var
 Var--->Alcance global
 Let--->Alcance por bloque 
 */

//  Prueba con var
 var numero=100;
 console.log(numero);  //Valor 100

 if(true){
    numero=59;
    console.log(numero); //valor 59
 }

 console.log(numero); //valor 59
 

//  Prueba con let
var name_person="Sara";
console.log(name_person);

if(true){
    let name_person="Valentina";
    console.log(name_person);
}

console.log(name_person);