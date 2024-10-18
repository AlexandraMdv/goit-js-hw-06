/*
    Scrieți un script care răspunde la modificarea valorii din input#font-size-control (evenimentul input) și modifică stilurile inline al span#text prin actualizarea proprietății font-size. Ca rezultat, atunci când glisați scrollbar-ul, dimensiunea textului se va schimba.
*/

const inputEl = document.querySelector('#font-size-control');

inputEl.addEventListener('input', handleInput);

function handleInput() {
    const title = document.querySelector('#text');
    title.style.fontSize = String(inputEl.value) + 'px';
}