import { quotes } from "../data/quotes.js";


document.addEventListener('DOMContentLoaded', () => {
    let storageItem = localStorage.getItem('affirmationContent')
    document.querySelector('.favcontent').innerHTML = `${storageItem}`;
})


// GOAL: create a reusable function that will store data in local storage by taking a key, value as a parameter

// create a function that can be used anywhere in my application
// my function will take a key, value as parameters 
// use the passed parameters to store the data





const favQuotes = [

];

let addBtn = document.querySelector('.js-new-btn');
addBtn.addEventListener('click', handleAddNewText);

let submitBtn = document.querySelector('.js-submit-btn');
submitBtn.addEventListener('click', submitHandler);

let formBtn = document.querySelector('.newtext');

let deleteBtn = document.querySelector('.js-delete-btn')


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
    let favListed = document.querySelector('.js-favcontent');
    let textValue = document.querySelector('.newtext-js').value;
    let li = document.createElement('li');
    favQuotes.push(textValue);
    console.log(favQuotes);
    li.appendChild(document.createTextNode(textValue));
    favListed.appendChild(li);

};

    deleteBtn.addEventListener('click', () => {
      let randomIndex = Math.floor(Math.random() * quotes.length)
      let deleteBtn = document.querySelector('.js-delete-btn');
      console.log('deleted') 
      
  })
  
  