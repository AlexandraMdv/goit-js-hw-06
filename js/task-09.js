/*
  Scrieți un script care schimbă culorile de fundal al elementului <body>, prin stiluri inline, atunci când se face click pe button.change-color și afișați valoarea culorii în span.color.

  Pentru a genera o culoare aleatorie, folosiți getRandomHexColor.
*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonEl = document.querySelector('.change-color');

buttonEl.addEventListener('click', handleClick);

function handleClick() {
  const bodyEl = document.querySelector('body');
  const spanEl = document.querySelector('.color');
  let randomColor = getRandomHexColor();
  spanEl.textContent = randomColor;
  bodyEl.style.backgroundColor = randomColor;
}