/*inicio de poo
1.clase (molde del objeto)

propiedades (caracteristicas del objeto)

metodos(funciones o acciones del objeto)
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Decoradores--->adicionar funcionalidades
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("camiseta estampada con el logo de " + logo);
        };
    };
}
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
// clase hija
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    ;
    return Sudadera;
}(Camiseta));
var camiseta = new Camiseta("red", "L", "nike", "Elegante", 5000);
console.log(camiseta);
var sudaderaNike = new Sudadera("amarillo", "m", "nike", "deportiva", 1000);
sudaderaNike.setCapucha(false);
sudaderaNike.setColor("Red");
console.log(sudaderaNike);
// Public--->Puede acceder a las propiedades desde cualquier parte.
// Private--->los miembros de la clase sean visibles solo para esa clase y no sean accesibles fuera de la clase que contiene.
// Protecter--->Se puede acceder a los miembros protegidos utilizando sus clases de derivación. Por ello solo es accesible dentro de la clase y sus subclases.
