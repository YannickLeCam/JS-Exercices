const container = document.getElementById("quoteContainer");


console.log(quotes);

/**
 * Cette fonction permet de créer les éléments de la quoteBox
 * @param {quote} quote 
 */
function createHTMLQuote(quote) {
    let quoteBox = document.createElement("div");
    quoteBox.classList.add("quoteBox");

    let quoteContent = document.createElement("p");
    quoteContent.innerHTML=`"${quote.content}"`;
    quoteContent.classList.add("quoteContent");

    let author = document.createElement("p");
    author.innerHTML=`de ${quote.author}`;
    author.classList.add("quoteAuthor");

    let icon = document.createElement("i");
    icon.classList.add("fa-regular");
    icon.classList.add("fa-heart");
    icon.classList.add("coeur");
    //Change le coeur vide en coeur plein en cliquant dessus
    icon.addEventListener("click",function(){
        this.classList.toggle("fa-regular");
        this.classList.toggle("fa-solid");
    });
    quoteBox.appendChild(quoteContent);
    quoteBox.appendChild(author);
    quoteBox.appendChild(icon);
    return quoteBox;
}

quotes.forEach(quote => {
    container.appendChild(createHTMLQuote(quote));
});

