function appendValue(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let currentDisplay = document.getElementById("display").value;
    document.getElementById("display").value = currentDisplay.slice(0, -1);
}

function calculate() {
    let result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
}

function calculateSquareRoot() {
    let currentDisplay = document.getElementById("display").value;
    if (currentDisplay) {
        let result = Math.sqrt(parseFloat(currentDisplay)); // Calculate square root
        document.getElementById("display").value = result;
    }
}