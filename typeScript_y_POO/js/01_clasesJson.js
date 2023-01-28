// crear clase cuando no se utiliza poo
var bicicleta={
    color:"Rojo",
    modelo:"BMX",
    frenos:"de disco",
    velocidad:"60km",
    cambiaColor:function(nuevo_color){
       this.color=nuevo_color;
    }
};
bicicleta.cambiaColor("Azul");

// Otra forma con POO