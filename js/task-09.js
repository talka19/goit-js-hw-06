function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector('button');
const spanEl = document.querySelector('span');
const body = document.querySelector('body');

buttonEl.addEventListener('click', onChangeColor);

function onChangeColor(event){
  body.style.background = getRandomHexColor();
  span.textContent = body.style.background;

  console.log(span.textContent)
}
