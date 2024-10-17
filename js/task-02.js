const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');
console.log(listEl);

ingredients.forEach(ing => {
  const li = document.createElement('li');
  li.innerText = ing;
  li.classList.add('item');
  listEl.append(li);
})


