const grid=document.getElementById("gridContainer");

/**
 * retourne un élément un carré en HTML étant une div avec un background random de taille 60x60 px
 */
function createNewSquare() {
    newSquare=document.createElement("div");

    newSquare.style.height="60px";
    newSquare.style.width="60px";
    newSquare.style.backgroundColor=`rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`;
    newSquare.addEventListener("click", function() {
        /**
         * Si j'avais pas instancié les couleurs directement sur l'objet il aurait été plus pratique (et propre) de le faire via un add class et un remove
         */
        if (this.style.backgroundColor=="black") {
            this.style.backgroundColor=this.style.color;
        }else{
            this.style.color = this.style.backgroundColor;
            this.style.backgroundColor="black";
        }
    });
    return newSquare;
}


/**
 * Ajout de l'eventListener de Clavier sur tout le document
 */
document.addEventListener("keydown",(e)=>{
    const keyName=e.key;
    console.log(keyName);
    if (keyName=="ArrowUp") {
        //flèche du haut a été détecté
        grid.appendChild(createNewSquare());
    }else if (keyName=="ArrowDown") {
        //Flèche du bas été detecté
        grid.removeChild(grid.lastChild);
    }
});