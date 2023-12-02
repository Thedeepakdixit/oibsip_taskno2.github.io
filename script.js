let currentInput = '';
let display = document.getElementById('display');

function appendValue(value) {
    currentInput += value;
    display.innerText = currentInput;
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        display.innerText = currentInput;
    } catch (error) {
        display.innerText = 'Error';
    }
}

function clearDisplay() {
    currentInput = '';
    display.innerText = '0';
}
