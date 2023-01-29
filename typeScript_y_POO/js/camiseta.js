/*inicio de poo
1.clase (molde del objeto)

propiedades (caracteristicas del objeto)

metodos(funciones o acciones del objeto)
*/
var Camiseta = /** @class */ (function () {
    // metodos (funciones o acciones)
    function Camiseta(color, talla, modelo, marca, precio) {
        this.color = color;
        this.talla = talla;
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
var camiseta = new Camiseta("rojo", "xs", "kariby", "elegante", 344);
console.log(camiseta);
// Public--->Puede acceder a las propiedades desde cualquier parte.
// Private--->los miembros de la clase sean visibles solo para esa clase y no sean accesibles fuera de la clase que contiene.
// Protecter--->Se puede acceder a los miembros protegidos utilizando sus clases de derivación. Por ello solo es accesible dentro de la clase y sus subclases.
