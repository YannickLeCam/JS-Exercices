const carres = document.getElementsByClassName("carre"); // c'est un tableau
const annonceur = document.getElementById("annonceur");
let tour = "O"
let compteurTour = 0;
console.log(carres)

//remet tout les élément vierge prêt pour une nouvelle partie
function resetPartie() {
    tour="O";
    miseAJourAnnonceur();
    compteurTour=0;
    for (let i = 0; i < carres.length; i++) {
        const carre =  carres[i];
        carre.innerHTML="";
        carre.classList.remove("X");
        carre.classList.remove("O");
    }

}
/**
 * permet selon le tour d'indiquer au joueur c'est a qui de jouer en modifiant le fond et le texte adéquat
 */
function miseAJourAnnonceur() {
    if (tour=="O") {
        annonceur.innerHTML="O de jouer";
        annonceur.style.backgroundColor="rgba(127, 127, 250,0.8)";
    }else{
        annonceur.innerHTML="X de jouer";
        annonceur.style.backgroundColor="rgba(148, 75, 75,0.8)";
    }
    compteurTour++;
}

/**
 * Permet d'ajouter les event listener pour préparer la partie de Morpion 
 */
for (let i = 0; i < carres.length; i++) {
    const carre =  carres[i];
    
        carre.addEventListener("click", ()=>{
            console.log(carre.innerHTML);
            if (carre.innerHTML=="") { //S'il n'y a pas de d'attibution de caractère (On pourrait passer par le classe pour un code plus propre) 
                carre.innerHTML=tour;
                carre.classList.add(tour);
                if (tour=="O") {
                    tour="X";
                }else{
                    tour="O";
                }
                miseAJourAnnonceur() //On met a jour l'annonceur car on change de joueur + on ajoute un tour.
            }
            if (compteurTour>9) {
                resetPartie();
            }
            if (compteurTour==9) {
                compteurTour++;
            }
        });
}



