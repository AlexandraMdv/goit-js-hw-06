/*
    Contorul este format dintr-un tag span și două butoane care, atunci când sunt apăsate, ar trebui să-și mărească sau scadă valoarea cu unu.

    Declarați o variabilă counterValue ce va stoca valoarea curentă a contorului și asignați-i valoarea 0 pentru început.
    Adăugați click handler pe butoane, în interiorul cărora vei mări sau micșora valoarea contorului.
    Actualizați interfața cu noua valoare a variabilei counterValue.
*/

const spanEl = document.querySelector('#value');
let counterValue = spanEl.innerHTML; //0

const decrementBtn = document.querySelector('#counter button:first-of-type');
const incrementBtn = document.querySelector('#counter button:last-of-type');

function handleClickDecrement() {
    counterValue -= 1;
    spanEl.innerHTML = counterValue;
}

function handleClickIncrement() {
    counterValue += 1;
    spanEl.innerHTML = counterValue;
}

decrementBtn.addEventListener("click", handleClickDecrement);
incrementBtn.addEventListener('click', handleClickIncrement);

