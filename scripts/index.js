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
    
};

function newText() {
    let randomText = Math.floor(Math.random() * quotes.length);
    document.querySelector('.js-para').innerHTML = quotes[randomText].quote;
};

 function favHandler() {
    let p = document.querySelector('.js-para')
    localStorage.setItem('affirmationContent', p.innerHTML)
    console.log('Added to favourites!')
    
 
};

window.onload = newText;

setupEventListeners();

