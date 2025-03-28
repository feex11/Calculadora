const display = document.getElementById("display");

function enviarAoDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calcular() {
  display.value = eval(display.value);
}
