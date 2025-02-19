// ermmmmmm scratching my head and rubbing my chin 

import {quotes} from '../data/quotes.js';

function setupEventListeners() {

let newQuoteBtn = document.querySelector('.quotebtn');
let p = document.querySelector('.js-para');
newQuoteBtn.addEventListener('click', quoteHandler);

let favBtn = document.querySelector('.js-fav-btn');
favBtn.addEventListener('click', favHandler);
};




let favText = document.querySelector('.favouriteList');


function quoteHandler() {

    let p = document.querySelector('.js-para')
    let randomIndex = Math.floor(Math.random() * quotes.length)
    console.log(quotes[randomIndex].quote);
    p.innerHTML = quotes[randomIndex].quote;
    // grab delete button 
    // quotes.splice(randomIndex, 1)
    // ^^^ to the eventlistener on btn
    
};

function newText() {
    let randomText = Math.floor(Math.random() * quotes.length);
    document.querySelector('.js-para').innerHTML = quotes[randomText].quote;
};

 function favHandler() {
    let randomIndex = Math.floor(Math.random() * quotes.length)
 localStorage.setItem('affirmationContent', quotes[randomIndex].quote )
 console.log('Added to favourites!')
 
};

window.onload = newText;

setupEventListeners();

