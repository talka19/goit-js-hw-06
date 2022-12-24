const counter = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
     }
}

const decrementBtn = document.querySelector('button[data-action = "decrement"]');
const incrementBtn = document.querySelector('button[data-action = "increment"]');
const valueEl = document.querySelector('#value');

decrementBtn.addEventListener("click", function() {
    console.log('Кликнули на декремент');
    counter.decrement();
    valueEl.textContent = counter.value;
});

incrementBtn.addEventListener("click", function() {
    console.log('Кликнули на инкремент');
    counter.increment();
    valueEl.textContent = counter.value;    
});
