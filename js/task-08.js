/*
    1.Gestionarea trimiterii formularului form.login-form trebuie să fie în cadrul evenimentului submit.
    
    2.La trimiterea formularului, pagina nu trebuie să se reîncarce.

    3.Dacă formularul are câmpuri goale, afișați un alert care avertizează că toate câmpurile trebuie completate.

    4.Dacă utilizatorul a completat toate câmpurile și a trimis formularul, colectați valorile câmpului într-un obiect în care numele câmpului va fi numele proprietății, iar valoarea câmpului va fi valoarea proprietății. Pentru a accesa elementele formularului, folosiți proprietatea elements.

    5.Afișați obiectul cu datele introduse în consolă și ștergeți valorile câmpurilor din formular, folosind metoda reset.
*/

const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', handleSubmit);




function handleSubmit(event) {
    event.preventDefault();
    //alert code

    const formDetails = document.querySelector('.login-form').elements;
    const formEmail = formDetails[0], formPass = formDetails[1];
    const email = formEmail.name, pass = formPass.name;

    if(formEmail.value === '' || formPass.value === '') {
        alert('Toate campurile trebuie completate!');
    } else {
        const formObject = {
            [email]: formEmail.value,
            [pass]: formPass.value
        }
        console.log(formObject);
    }

    formEl.reset();
}