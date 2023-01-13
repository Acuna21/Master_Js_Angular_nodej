'user strict'
// JSON ---->JavaScripts Object Notation
window.addEventListener('load', function(){
    var pelicula={ 
        titulo:'Batman vrs Sirena',
        year:2018,
        country:"Colombia"
    };
    
    var peliculas=[
        {
            titulo:"La vida",
            year:2022,
            pais:"Francia"
        }, pelicula
    ]

    var cajaPeliculas=document.querySelector("#cajaPeliculas");

    for (var indice in peliculas){
        let p=document.createElement("p");
        p.append(peliculas[indice].titulo+ " "+ peliculas[indice].year);
        cajaPeliculas.append(p);
    }

})

// Cambios actualizados
