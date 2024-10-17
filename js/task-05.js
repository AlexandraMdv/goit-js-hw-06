/*
    Scrieți un script care, atunci când se introduce un text în input#name-input (evenimentul input), înlocuiește valoarea lui span#name-output cu valoarea curentă din input#name-input. Dacă input-ul este gol, în acel span se va afișa "Anonymous".
*/

const inputEl = document.querySelector('#name-input');
const titleEl = document.querySelector('#name-output');

console.log(inputEl.value);

inputEl.addEventListener('input', handleInput);

function handleInput() {
    console.log(inputEl.value);
    titleEl.textContent = inputEl.value;

    if(!inputEl.value.length) titleEl.textContent = 'Anonymous'
}

