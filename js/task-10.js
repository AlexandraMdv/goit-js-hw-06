function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const inputEl = document.querySelector('input');
// console.log(inputEl);

inputEl.addEventListener('input', handleInput);
let value;

function handleInput() {
  const createBtn = document.querySelector('button');
  const destroyBtn = document.querySelector('button:last-of-type');
  createBtn.addEventListener('click', () => {
    value = inputEl.value;
    createBoxes(value);
  });

  destroyBtn.addEventListener('click', destroyBoxes);
}

let divEl, allDives = [];

function createBoxes(amount) {
  let size = 30;
  for(let i=0; i<amount; i++){
    divEl = document.createElement('div');
    divEl.style.width = String(size) + 'px';
    divEl.style.height = String(size) + 'px';
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.marginBottom = '10px';
    body.append(divEl);
    allDives.push(divEl);

    size += 10;
  }
}



function destroyBoxes() {
  allDives.forEach(div => div.remove());
}