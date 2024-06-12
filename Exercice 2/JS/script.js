const carres = document.getElementsByClassName("carre"); // c'est un tableau
console.log(carres)

function affichageInfoBulle() {
    let classes = carre
}

for (let i = 0; i < carres.length; i++) {
    const carre =  carres[i];
    
        carre.addEventListener("click", ()=>{
            carre.classList.toggle("carreOnClick");
            
        });
}



