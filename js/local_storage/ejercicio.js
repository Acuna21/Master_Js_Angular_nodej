'user strict'
window.addEventListener('load', function(){
   
    var formu=document.querySelector("#ListMovies");
    var ul=document.querySelector("#listResult");
    
    formu.addEventListener("submit", function(){
        var tittleMovies=document.querySelector("#addMovies").value;
        if (tittleMovies.length>=1){
            localStorage.setItem(tittleMovies, tittleMovies);
        }

    });

    for (var i in localStorage){
        var li=document.createElement("li");
        if(typeof localStorage[i]=="string"){
            li.append(localStorage[i]);
            ul.append(li);
        }
    }

    // Eliminar un elemento de la lista
    var formuDelete=document.querySelector("#removeMovies");
    formuDelete.addEventListener("submit", function(){
        var removeMovies=document.querySelector("#deleteMovies").value;
        if (removeMovies.length>=1){
            localStorage.removeItem(removeMovies);
        }

    });

})