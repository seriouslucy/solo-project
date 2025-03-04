let newTextContainer = document.querySelector('.newtext');
const content = document.querySelector(".js-favcontent");
let data = JSON.parse(localStorage.getItem('affirmations'));
displayFavs(data);


// displays favourite quotes
export function displayFavs(data) {
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


// adds delete buttons to quotes
function deleteHandler(b) {
    let id = b.dataset.dataId
    const filteredArr = data.filter((d) => d.id !== id)
    localStorage.setItem('affirmations', JSON.stringify(filteredArr))
    data = JSON.parse(localStorage.getItem('affirmations'))
    displayFavs(data)
}


// handles user input text
export function submitHandler() {
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
        
        userInput.value = '';
    };
    
// displays textbox for new quotes button
    let x = 0;
    export function handleAddNewText() {
        if (x === 0) {
            newTextContainer.removeAttribute("hidden");
        x = 1;
    } else {
        newTextContainer.setAttribute("hidden", true);
        x = 0;
    }}
    
//clears the whole page
    export function clearPage() {
      console.log('deleted') 
      localStorage.clear();
     if(localStorage.length === 0)
      document.querySelector('.favcontent').innerHTML = ' ';
     };

