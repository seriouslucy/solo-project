// ermmmmmm scratching my head and rubbing my chin 

import {quotes} from '../data/quotes.js';
import {favQuotes} from '../data/favourites.js';

function setupEventListeners() {
let addBtn = document.querySelector('.js-new-btn');
addBtn.addEventListener('click', handleAddNewText);

let submitBtn = document.querySelector('.js-submit-btn');
submitBtn.addEventListener('click', submitHandler);

let newQuoteBtn = document.querySelector('.quotebtn');
let p = document.querySelector('.js-para');
newQuoteBtn.addEventListener('click', quoteHandler);

let favBtn = document.querySelector('.js-fav-btn');
favBtn.addEventListener('click', favHandler);
};




let favText = document.querySelector('.favouriteList');
let formBtn = document.querySelector('.newtext');

let deleteBtn = document.querySelector('.js-delete-btn');


let x = 0;


 function handleAddNewText () {
    if (x === 0) {
        formBtn.removeAttribute("hidden");
    x = 1;
} else {
    formBtn.setAttribute("hidden", true);
    x = 0;
}
};


function submitHandler() {
    let textValue = document.querySelector('.newtext-js').value;
    quotes.push(textValue);
    console.log(quotes);
};


function quoteHandler() {
    let randomQuote = Math.floor(Math.random() * quotes.length)
    console.log(quotes[randomQuote]);
    p.textContent = quotes[randomQuote];
    
};

function newText() {
    let randomText = Math.floor(Math.random() * quotes.length);
    document.querySelector('.js-para').innerHTML = quotes[randomText];
};

 function favHandler() {
  const quoteId = favBtn.dataset.quoteId;
  const alreadyFavourite = favQuotes.some((fav) => fav.quoteId === quoteId);
  if (!alreadyFavourite) {
    favQuotes.push({quoteId});
    console.log('Added to favourites!')
  } else {
    console.log('Quote already favourited!');
  }
  console.log(favQuotes)
};





deleteBtn.addEventListener('click', () => {
   console.log('deleted')
} );

window.onload = newText;

setupEventListeners();

