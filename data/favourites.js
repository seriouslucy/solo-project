const favQuotes = [

];

let addBtn = document.querySelector('.js-new-btn');
addBtn.addEventListener('click', handleAddNewText);

let submitBtn = document.querySelector('.js-submit-btn');
submitBtn.addEventListener('click', submitHandler);

let formBtn = document.querySelector('.newtext');


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
    favQuotes.push(textValue);
    console.log(favQuotes);

};

