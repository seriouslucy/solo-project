// ermmmmmm scratching my head and rubbing my chin 
import {quotes} from '../data/quotes.js';

import { favQuotes } from '../data/favourites.js';


let favtext = document.querySelector('.favcontent');
let formBtn = document.querySelector('.newtext');
let addBtn = document.querySelector('.js-new-btn');
let submitBtn = document.querySelector('.js-submit-btn');
let deleteBtn = document.querySelector('.js-delete-btn');
let x = 0;


addBtn.addEventListener('click', () => {
    if (x === 0) {
        formBtn.removeAttribute("hidden");
    x = 1;
} else {
    formBtn.setAttribute("hidden", true);
    x = 0;
}
});




submitBtn.addEventListener('click', () => {
    let textValue = document.querySelector('.newtext-js').value;
    quotes.push(textValue);
    console.log(quotes);
})


let fav = document.querySelector('.js-fav-btn');

fav.addEventListener('click', () => {
    console.log('Added to favourites')
    
})

let newQuoteBtn = document.querySelector('.quotebtn');
let p = document.querySelector('.js-para');



newQuoteBtn.addEventListener("click", () => {
    let randomQuote = Math.floor(Math.random() * quotes.length)
    console.log(quotes[randomQuote]);
    p.textContent = quotes[randomQuote];
});

function newText() {
    let randomText = Math.floor(Math.random() * quotes.length);
    document.querySelector('.js-para').innerHTML = quotes[randomText];
    
};

deleteBtn.addEventListener('click', () => {
   console.log('deleted')
} );

window.onload = newText;

