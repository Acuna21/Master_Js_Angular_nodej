/*inicio de poo
1.clase (molde del objeto)

propiedades (caracteristicas del objeto)

metodos(funciones o acciones del objeto)
*/


// interface
interface CamisetaBase{
    setColor(color);
    getColor();

}


//Decoradores--->adicionar funcionalidades
function estampar(logo:string){
    return function(target:Function) {
        target.prototype.estampacion=function():void{
            console.log("camiseta estampada con el logo de "+ logo);
        }
    }
}

class Camiseta implements CamisetaBase{
    private precio:number;
    private color:string;
    private modelo:string;
    private marca:string;
    private talla:string;

    // metodos (funciones o acciones)
    constructor(color,talla,modelo,marca,precio){
        this.color=color;
        this.talla=talla;
        this.marca=marca;
        this.modelo=modelo;
        this.precio=precio;
    }

    public setColor(color) {
        this.color=color;  
    }

    public getColor(){
        return this.color;
    }

}

// clase hija
class Sudadera extends Camiseta{
    capucha:boolean;

    setCapucha(capucha:boolean){
        this.capucha=capucha;
    }

    getCapucha():boolean{
        return this.capucha;
    };

}

let camiseta=new Camiseta("red","L","nike","Elegante",5000);
console.log(camiseta);

let sudaderaNike=new Sudadera("amarillo","m","nike","deportiva",1000);
sudaderaNike.setCapucha(false);
sudaderaNike.setColor("Red");
console.log(sudaderaNike);










// Public--->Puede acceder a las propiedades desde cualquier parte.

// Private--->los miembros de la clase sean visibles solo para esa clase y no sean accesibles fuera de la clase que contiene.

// Protecter--->Se puede acceder a los miembros protegidos utilizando sus clases de derivación. Por ello solo es accesible dentro de la clase y sus subclases.



