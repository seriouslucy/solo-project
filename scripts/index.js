import { quotes } from "../data/quotes.js";
let data = JSON.parse(localStorage.getItem('affirmations'))
let favs = [];

data? favs = data : favs = []

displayRandomQuote(quotes);


// displays quotes on home page
function displayRandomQuote(quoteList) {
  let randomNumber = Math.floor(Math.random() * quoteList.length);
  let randomQuote = quotes[randomNumber];
  let quoteHTML = `<p ">${randomQuote.quote}</p>
  <div class="thebuttons">
  <button class="click-me-btn css-click-me-btn">Click Me</button>
  <button data-quote-id="${randomQuote.id}" data-quote-text="${randomQuote.quote}" class="favbtn js-fav-btn"
  ><img src='styles/images/star.png' style=width:35%;></button> 
  </div> `;
  let p = document.querySelector(".js-para");
  p.innerHTML = quoteHTML;
  console.log(randomQuote);
}

// for adding quotes to favourites page
function favHandler(favs) {
  let favBtn = document.querySelector(".js-fav-btn")
  console.log("Added to favourites!")
  
  
  let id = favBtn.dataset.quoteId
  let quote = favBtn.dataset.quoteText
  
  const alreadyFav = favs.some((f) => f.id === id);
  
  if (!alreadyFav) {
    favs.push({id, quote});
  } else {
    console.log("Already in favourites!");
  }
  
  localStorage.setItem("affirmations", JSON.stringify(favs))
  
  displayRandomQuote(quotes)
}


//the buttons
document.addEventListener("click", function(event) {
    if (event.target.classList.contains('click-me-btn')) {
      displayRandomQuote(quotes);
    } 
    
  });

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains('js-fav-btn')) {
    favHandler(favs)
      }
  })
