const carres = document.getElementsByClassName("carre"); // c'est un tableau qui a tout les élément avec la classe "carre"

/**
 * Permet d'ajouter un event listener a tout les element de la classe carré
 */
for (let i = 0; i < carres.length; i++) {
    let carre = carres[i];
    carre.addEventListener("click", ()=>{
        carre.classList.toggle("carreOnClick"); //array
    });
}



