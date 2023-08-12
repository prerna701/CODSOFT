// calculate.js

const display = document.getElementById('display');
const buttons = document.querySelectorAll('#button-container button');

let currentInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => handleButtonClick(button.textContent));
});

function handleButtonClick(value) {
  switch (value) {
    case 'AC':
      clearDisplay();
      break;
    case 'DEL':
      deleteLastCharacter();
      break;
    case '=':
      calculateResult();
      break;
    default:
      currentInput += value;
      updateDisplay();
      break;
  }
}

function clearDisplay() {
  currentInput = '';
  updateDisplay();
}
function deleteLastCharacter() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function calculateResult() {
  try {
    const result = eval(currentInput);
    currentInput = result.toString();
    updateDisplay();
  } catch (error) {
    currentInput = 'Error';
    updateDisplay();
  }
}

function updateDisplay() {
  display.value = currentInput;
}
