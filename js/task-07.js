const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputEl.addEventListener('input', onChangeElement);

function onChangeElement(event) {
spanEl.style.fontSize = inputEl.value + "px";
};