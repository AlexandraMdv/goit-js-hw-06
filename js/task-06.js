/* 
    Scrieți un script care, atunci când focalizarea este pierdută de pe un input (evenimentul blur), verifică dacă numărul de caractere introduse este corect.

    Numărul de caractere admis trebuie specificat în atributul data-length.

    Dacă este introdus numărul corect de caractere, atunci border-ul devine verde, în caz contrar - roșu.

    Pentru a adăuga stilurile necesare, utilizați clasele CSS valid și invalid pe care le-am adăugat deja la fișierele sursă ale acestui exercițiu.
*/

const inputEl = document.querySelector('#validation-input');
let inputValue = "";
let compareValue = Number(inputEl.dataset.length);


inputEl.addEventListener('blur', onBlur);

function onBlur() {
    inputValue = inputEl.value.trim(); //does not count 'space'
    if(inputValue.length === compareValue){
        // console.log('Numar corect de caractere introduse!');
        inputEl.classList = 'valid';
    } else {
        // console.log('Incercati din nou!');
        inputEl.value = '';
        inputEl.classList = 'invalid';
    }
}