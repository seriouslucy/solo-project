// ermmmmmm scratching my head and rubbing my chin 

import {quotes} from '../data/quotes.js';

function setupEventListeners() {

let newQuoteBtn = document.querySelector('.quotebtn');
let p = document.querySelector('.js-para');
newQuoteBtn.addEventListener('click', quoteHandler);

let favBtn = document.querySelector('.js-fav-btn');
favBtn.addEventListener('click', favHandler);

let deleteBtn = document.querySelector('.js-delete-btn');
deleteBtn.addEventListener('click', deleteHandler)
};




let favText = document.querySelector('.favouriteList');


function quoteHandler() {
    let p = document.querySelector('.js-para')
    let randomQuote = Math.floor(Math.random() * quotes.length)
    console.log(quotes[randomQuote].quote);
    p.textContent = quotes[randomQuote].quote;
    
    
};

function newText() {
    let randomText = Math.floor(Math.random() * quotes.length);
    document.querySelector('.js-para').innerHTML = quotes[randomText].quote;
};

 function favHandler() {
 console.log('Added to favourites!')
 
};

function deleteHandler() {
    console.log('deleted!')
}

window.onload = newText;

setupEventListeners();

