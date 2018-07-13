function mostrar(juegos){
    iniciar();
    console.log("CAMBIANDO")
    var videosjuegos= document.querySelectorAll("." + juegos);
    for(let i=0;i<videosjuegos.length;i++){
        videosjuegos[i].style.opacity="1";
    }
    
    
}
function iniciar(){
    var imagenes = document.querySelectorAll(".game");
    for (let i=0;i<imagenes.length;i++){
        imagenes[i].style.opacity="0.5";
    }
}