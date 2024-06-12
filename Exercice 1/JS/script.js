const carre = document.getElementsByClassName("carre")[0]; // c'est un tableau
console.log(carre)

function affichageInfoBulle() {
    let classes = carre
}
carre.addEventListener("click", ()=>{
    let classes = carre.classList; //array
    let style = carre.style.height;//
    console.log(style);
    alert(`classe : ${classes}
        display: flex
        height: 200px
        width: 200px
        background-color: olive
        color: white
        font-family: 'Times New Roman', Times, serif
        font-size: 40px
        text-align: center
        justify-content: center
        align-items: center
        margin: 0`);

});
