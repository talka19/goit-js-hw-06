const inputEl = document.querySelector("#validation-input")


inputEl.addEventListener('blur', onValidationInput);

function onValidationInput(event) {
    const option = inputEl.getAttribute("data-length");
    if (inputEl.value.length === Number(option)) {
        inputEl.classList.remove("invalid");
        inputEl.classList.add("valid");
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
    console.log(inputEl.value.length);      
}