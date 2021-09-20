function add(char) {
    const display = document.getElementById("display");

    display.value = display.value + char;
}

function calculate() {
    const display = document.getElementById('display');
    let result = eval(display.value);
    document.getElementById('result').value = result;
}

function reset() {
    document.getElementById('display').value = "";
    document.getElementById('result').value = "";
}