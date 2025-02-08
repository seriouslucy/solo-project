// ermmmmmm scratching my head and rubbing my chin 

let fav = document.querySelector('.js-fav-btn');

fav.addEventListener('click', () => {
    console.log('Added to favourites')
    
})

const newQuoteBtn = document.querySelector('.quotebtn');
const p = document.querySelector('.js-para');

newQuoteBtn.addEventListener("click", () => {
    let randomQuote = Math.floor(Math.random() * quotes.length)
    console.log(quotes[randomQuote]);
    p.textContent = quotes[randomQuote];
});

function newText() {
    let randomText = Math.floor(Math.random() * quotes.length);
    document.querySelector('.js-para').innerHTML = quotes[randomText];
   
};

window.onload = newText;

