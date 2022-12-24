const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

console.log(outputEl);

inputEl.addEventListener("input", onInputHandler);

function onInputHandler(event) {
  const option = event.currentTarget.value;

  if (!option) {
    outputEl.textContent = "Anonymous";
  } else {
    outputEl.textContent = option;
  }
  console.log(option);
}


