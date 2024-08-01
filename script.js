function insert(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteChar() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

function convertToBinary() {
    let display = document.getElementById('display');
    let number = parseInt(display.value);
    if (!isNaN(number)) {
        display.value = number.toString(2);
    } else {
        display.value = 'Error';
    }
}

function convertToHex() {
    let display = document.getElementById('display');
    let number = parseInt(display.value);
    if (!isNaN(number)) {
        display.value = number.toString(16).toUpperCase();
    } else {
        display.value = 'Error';
    }
}

function convertToDec() {
    let display = document.getElementById('display');
    let value = display.value;
    if (value.match(/^[01]+$/)) {
        display.value = parseInt(value, 2).toString(10);
    } else if (value.match(/^[0-9A-Fa-f]+$/)) {
        display.value = parseInt(value, 16).toString(10);
    } else {
        display.value = 'Error';
    }
}
