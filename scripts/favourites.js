let addBtn = document.querySelector('.js-new-btn');
let formBtn = document.querySelector('.submit-btn');
let newTextContainer = document.querySelector('.newtext')
let clearBtn = document.querySelector('.js-clear-btn')

let data = JSON.parse(localStorage.getItem('affirmations'))
const content = document.querySelector(".js-favcontent")
addBtn.addEventListener("click", () => handleAddNewText())



displayFavs(data)
formBtn.addEventListener("click", submitHandler)

function displayFavs(data) {
    const favoritesHTML = data.map((d) => `
    <div class="quote-data">
    <li>${d.quote}</li> 
    <button data-data-id="${d.id}" class="danger-btn css-danger-btn">X</button>
    </div>
    `).join('')

    content.innerHTML = favoritesHTML
    let dangerBtns = document.querySelectorAll(".danger-btn")

    dangerBtns.forEach((b) => {
        b.addEventListener("click", () => deleteHandler(b))
    })
}



function deleteHandler(b) {
    let id = b.dataset.dataId
    const filteredArr = data.filter((d) => d.id !== id)
    localStorage.setItem('affirmations', JSON.stringify(filteredArr))
    data = JSON.parse(localStorage.getItem('affirmations'))
    displayFavs(data)
}



function submitHandler() {
    const userInput = document.querySelector('.newtext-js')
    let textValue = userInput.value
    let id = String(Math.floor(Math.random() * 10000000000000))
    do {
        id = String(Math.floor(Math.random() * 10000000000000))
    } while (id === data.id) 
        
        const newItem = {
            id: id,
            quote: textValue
        }
        data.push(newItem);
        console.log(data);
        
        localStorage.setItem('affirmations', JSON.stringify(data))
        data = JSON.parse(localStorage.getItem('affirmations'))
        displayFavs(data)
        

    };
    
    
    
    
    let x = 0;
    function handleAddNewText () {
        console.log('clicked')
        if (x === 0) {
            newTextContainer.removeAttribute("hidden");
        x = 1;
    } else {
        newTextContainer.setAttribute("hidden", true);
        x = 0;
    }}
    
    clearBtn.addEventListener('click', () => {
      console.log('deleted') 
      localStorage.clear();
     if(localStorage.length === 0)
      document.querySelector('.favcontent').innerHTML = ' ';
     });

    
    
    // };
    // document.addEventListener('DOMContentLoaded', () => {
//     let storageItem = localStorage.getItem('affirmationContent')
//     document.querySelector('.favcontent').innerHTML = `${storageItem} <button class="cssRemove">X</button>`;
//     let removeButton = document.createElement('button');
//     removeButton.addEventListener('click', () => {
//         li.remove();
//     })
//     // grab button removeItem()
//     if(localStorage.length === 0)
//         document.querySelector('.favcontent').innerHTML = ''; 
// });


