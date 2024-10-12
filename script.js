let memory = 0;

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Lỗi';
    }
}

function calculateSquare() {
    const display = document.getElementById('display');
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
        display.value = value * value;
    }
}

function calculateSqrt() {
    const display = document.getElementById('display');
    const value = parseFloat(display.value);
    if (!isNaN(value) && value >= 0) {
        display.value = Math.sqrt(value);
    } else {
        display.value = 'Lỗi';
    }
}

function memoryAdd() {
    const display = document.getElementById('display');
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
        memory += value;
    }
}

function memorySubtract() {
    const display = document.getElementById('display');
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
        memory -= value;
    }
}

function recallMemory() {
    document.getElementById('display').value = memory;
}