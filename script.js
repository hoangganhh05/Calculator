let currentInput = ''

function press(value){
    currentInput += value;
    document.getElementById('display').value = currentInput;
}


function calculate(value){
    try{
        currentInput = eval(currentInput).toString();
        document.getElementById('display').value = currentInput;
    }catch(e){
        document.getElementById('display').value = "Lỗi";
    }
}


function clearDisplay(){
    currentInput = '';
    document.getElementById('display').value = '';
}