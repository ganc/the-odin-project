//
// TODO: 
// 2 + 2 2
// the extra 2 is appended but should be an implied clear

const OPERATIONS = Object.freeze({
  "+":add,
  "-":subtract,
  "*":multiply,
  "/":divide,
  " ":noop,
});

let storedNum = null;
let pendingNum = null;
let pendingOp = " ";

setEventListeners();

function setEventListeners(){
  buttons = document.querySelectorAll("button");
  for (button of buttons){
    buttonText = button.innerText;
    console.log(`button ${buttonText}`);
    if (/[0-9]/.test(buttonText)) {
      console.log("button num");
      button.addEventListener("click", function (e) {
        appendToPendingNum(e.target.innerText);
      });
    }
    if (/[*\-+/]/.test(buttonText)) {
      button.addEventListener("click", function(e) {
        setPendingOp(e.target.innerText);
      });
    }
    if (buttonText == "=") {
      button.addEventListener("click", equals);
    }
    if (buttonText == "AC") {
      button.addEventListener("click", allClear);
    }
  }
}



function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function noop(a, b) {
  return null;
}

function equals() {
  if (pendingNum == null || storedNum == null){
    setStoredNum();
    setDisplay(storedNum);
  } else {
    operate(pendingOp, storedNum, pendingNum);
  }
}

function operate(opStr, a, b){
  if (!(opStr in OPERATIONS)) {
    throw new Error(`Unsupported Operator: ${opStr}`);
  }
  let result = OPERATIONS[opStr](a, b);
  setPendingNum(result);
}

function isDigit(str) {
  return str != null && str.length == 1 && /[0-9]/.test(str);
}

function appendToPendingNum(digit) {
  if (!isDigit(digit)) {
    throw new Error(`Input is not a digit: ${digit}`);
  }
  let num = Number(digit);
  console.log(`pending ${pendingNum} digit: ${num}`);
  if (pendingNum == null) {
    setPendingNum(num);
  } else {
    let newNum = pendingNum * 10 + num;
    setPendingNum(newNum);
  }
}

function setStoredNum() {
  if (pendingNum != 0) {
    storedNum = pendingNum;
    pendingNum = null;
  }
}

function setPendingNum(num) {
  pendingNum = num;
  setDisplay(pendingNum);
}

function setPendingOp(opStr) {
  if (!(opStr in OPERATIONS)) {
    throw new Error(`Unsupported Operator: ${opStr}`);
  }
  if (pendingNum != null && storedNum != null){
    operate(opStr, storedNum, pendingNum);
  } 
    pendingOp = opStr;
    console.log(`stored Op ${pendingOp}`);
    setStoredNum();
}

function allClear() {
  pendingNum = null;
  storedNum = null;
  pendingOp = " ";
  setDisplay("0");
}

function setDisplay(str) {
  resultPanel = document.querySelector(".display");
  resultPanel.innerText = str;
}