function mostrarMenu(){
    var x = document.getElementById("navegacion-principal");
    if(x.className == "navegacion"){
        x.className += " responsive";
    } else {
        x.className = "navegacion";
    }
}
