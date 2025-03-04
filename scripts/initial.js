import {handleAddNewText, submitHandler, clearPage} from './favourites.js'


function setupEventListeners() {
    // for opening text box on favourites
    let addBtn = document.querySelector('.js-new-btn');
    addBtn.addEventListener("click", () => handleAddNewText());
    
    // submitting new text to favourites
    let formBtn = document.querySelector('.submit-btn');
    formBtn.addEventListener("click", submitHandler);

    // clear the favourites page
    let clearBtn = document.querySelector('.js-clear-btn');
    clearBtn.addEventListener('click', clearPage);

}

setupEventListeners()
