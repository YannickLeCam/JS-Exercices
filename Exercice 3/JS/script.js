const carres = document.getElementsByClassName("carre"); // c'est un tableau
const annonceur = document.getElementById("annonceur");
let tour = "O"
let compteurTour = 0;
console.log(carres)

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

for (let i = 0; i < carres.length; i++) {
    const carre =  carres[i];
    
        carre.addEventListener("click", ()=>{
            console.log(carre.innerHTML);
            if (carre.innerHTML=="") {
                carre.innerHTML=tour;
                carre.classList.add(tour);
                if (tour=="O") {
                    tour="X";
                }else{
                    tour="O";
                }
                miseAJourAnnonceur()
            }
            if (compteurTour>9) {
                resetPartie();
            }
            if (compteurTour==9) {
                compteurTour++;
            }
        });
}



