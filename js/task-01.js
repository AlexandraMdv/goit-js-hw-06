const categoriesItems = document.querySelectorAll('.item');
const categoriesNumber = categoriesItems.length;

console.log('Number of categories: ' + categoriesNumber);
console.log('\n');

// const categoryList = document.querySelector('#categories');
// console.log(categoryList.innerHTML);

categoriesItems.forEach((item,index) => {
    // console.log(`Category nr ${index + 1}: ${item.innerHTML}`);

    const categoryTitle = item.querySelector('h2').innerHTML;
    console.log(`Category: ${categoryTitle}`);

    const elementsList = item.querySelectorAll('li');
    const elementsListNumber = elementsList.length;
    console.log(`Elements: ${elementsListNumber}`);
    console.log('\n');
});



