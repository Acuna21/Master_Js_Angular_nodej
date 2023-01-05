//  DOM--Brouser Object Model

// Tamñano de la ventana
// Altura
console.log(window.innerHeight);

// Anchura
console.log(window.innerWidth);

// URL ACTUAL
console.log(window.location.href);

// Redireccionar
function redirect(url){
    window.location.href=url;
}

// Abrir nueva pestaña en otra ventana
function abrirPestaña(url){
    window.open(url,"","width=500,heidth=500"); 
}
