const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

list.append(
  ...ingredients.map((ingredient) => {
    let listEl = document.createElement("li");
    listEl.textContent = ingredient;
    listEl.classList.add('item');
    return listEl;
  })
);