const calcDisplay = document.getElementById("calculator-display");

const inputBtns = document.querySelectorAll("button");
const resetBtn = document.getElementById("reset-btn");

let firstValue = 0;
let operatorValue = "";
let awaitingNextValue = false;

function sendNumberValue(number) {
  if (awaitingNextValue) {
    calcDisplay.textContent = number;

    awaitingNextValue = false;
  } else {
    // If current display value is 0, replace it, if not add number

    const displayValue = calcDisplay.textContent;
    if (displayValue.length < 10) {
      calcDisplay.textContent =
        displayValue === "0" ? number : displayValue + number;
    }
  }
}

function addDecimal() {
  //If operator pressed, don't add decimal
  if (awaitingNextValue) {
    calcDisplay.textContent = number;
    inputExpression = number;
    awaitingNextValue = false;
  } else {
    const displayValue = calcDisplay.textContent;
  }
  //If no decimal, add one
  if (!calcDisplay.textContent.includes(".")) {
    calcDisplay.textContent = `${calcDisplay.textContent}.`;
  }
}
const calculate = {
  "/": (firstNumber, secondNumber) => firstNumber / secondNumber,

  "*": (firstNumber, secondNumber) => firstNumber * secondNumber,

  "+": (firstNumber, secondNumber) => firstNumber + secondNumber,

  "-": (firstNumber, secondNumber) => firstNumber - secondNumber,

  "=": (firstNumber, secondNumber) => secondNumber,
};

function resetCalculator() {
  firstValue = 0;
  operatorValue = "";
  awaitingNextValue = fasle;
}

function useOperator(operator) {
  const currentValue = Number(calcDisplay.textContent);
  if (operatorValue && awaitingNextValue) {
    operatorValue = operator;
    return;
  }
  if (!firstValue) {
    firstValue = currentValue;
  } else {
    if (operatorValue === "/" && currentValue === 0) {
      // calcDisplay.textContent = "Error";
      resetCalculator();
      return;
    }
    const calculation = calculate[operatorValue](firstValue, currentValue);
    calcDisplay.textContent = calculation;
    firstValue = calculation;
  }
  awaitingNextValue = true;
  operatorValue = operator;
}
function del() {
  let inputValue = calcDisplay.textContent.split("");
  inputValue.pop();
  if (inputValue.length === 0) {
    inputValue.push("0");
  }
  let newInputValue = inputValue.join("");

  calcDisplay.textContent = newInputValue;
}
//Add Event Listeners for numbers, operators, decimal buttons
inputBtns.forEach((inputBtn) => {
  if (inputBtn.classList.length === 0) {
    inputBtn.addEventListener("click", () => sendNumberValue(inputBtn.value));
  } else if (inputBtn.classList.contains("operator")) {
    inputBtn.addEventListener("click", () => useOperator(inputBtn.value));
  } else if (inputBtn.classList.contains("decimal")) {
    inputBtn.addEventListener("click", addDecimal);
  } else if (inputBtn.classList.contains("del-btn")) {
    inputBtn.addEventListener("click", del);
  }
});

// Reset all values, display
function resetAll() {
  firstValue = 0;
  operatorValue = "";
  awaitingNextValue = false;
  calcDisplay.textContent = "0";
}
resetBtn.addEventListener("click", resetAll);