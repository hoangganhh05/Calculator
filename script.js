let currentInput = ''

function press(value){
    currentInput += value;
    document.getElementById('display').value = currentInput;
}


function calculate() {
    try {
        display.value = eval(display.value);
        display.classList.add('flash');
        setTimeout(() => display.classList.remove('flash'), 300);
    } catch {
        display.value = 'Error';
    }
}


function clearDisplay(){
    currentInput = '';
    document.getElementById('display').value = '';
}

function backspace(){
    currentInput = currentInput.slice(0,-1);
    document.getElementById('display').value = currentInput;
}