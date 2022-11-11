letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
symbols = ["!", "#", "$", "%", "&", "(", ")", "*", "+"];

let generatePwdBtn = document.getElementById("btn-generate");
let clearPwdBtn = document.getElementById("btn-clear");
let displayPwd1El = document.getElementById("pwd-display-1");
let displayPwd2El = document.getElementById("pwd-display-2");
let rangeNumbersEl = document.getElementById("range_numbers");
let rangeLettersEl = document.getElementById("range_letters");
let rangeSymbolsEl = document.getElementById("range_symbols");
let valueNumbersEl = document.getElementById("slide-value-num");
let valueLettersEl = document.getElementById("slide-value-letters");
let valueSymbolsEl = document.getElementById("slide-value-symbols");
let copyIconEl1 = document.getElementById("icon-copy-pwd1");
let copyIconEl2 = document.getElementById("icon-copy-pwd2");
let displayYear = document.getElementById("year");
let randomLettersArr = [];
let randomNumbersArr = [];
let randomSymbolsArr = [];
let randomLettersStr = "";
let randomNumbersStr = "";
let randomSymbolsStr = "";
let numLetters;
let numSymbols;
let numNumbers;

valueLettersEl.innerHTML = rangeLettersEl.value;
valueNumbersEl.innerHTML = rangeNumbersEl.value;
valueSymbolsEl.innerHTML = rangeSymbolsEl.value;

rangeLettersEl.oninput = function () {
  numLetters = this.value;
  valueLettersEl.innerHTML = numLetters;
};

rangeNumbersEl.oninput = function () {
  numNumbers = this.value;
  valueNumbersEl.innerHTML = numNumbers;
};

rangeSymbolsEl.oninput = function () {
  numSymbols = this.value;
  valueSymbolsEl.innerHTML = numSymbols;
};

function generateRandomLetters() {
  for (let i = 0; i < numLetters; i++) {
    let r_letter = letters[Math.floor(Math.random() * letters.length)];
    randomLettersArr.push(r_letter);
    randomLettersStr += randomLettersArr[i];
  }

  return randomLettersStr;
}

function generateRandomNumbers() {
  for (let i = 0; i < numNumbers; i++) {
    let r_number = numbers[Math.floor(Math.random() * numbers.length)];
    randomNumbersArr.push(r_number);
    randomNumbersStr += randomNumbersArr[i];
  }

  return randomNumbersStr;
}

function generateRandomSymbols() {
  for (let i = 0; i < numSymbols; i++) {
    let r_symbol = symbols[Math.floor(Math.random() * symbols.length)];
    randomSymbolsArr.push(r_symbol);
    randomSymbolsStr += randomSymbolsArr[i];
  }

  return randomSymbolsStr;
}

function shufflePwdCharacters(password) {
  let passwordArr = password.split(""); // The password is a String and is converted to an array

  passwordArr.sort(function () {
    return 0.5 - Math.random(); // return a random value each time the function is called
  });
  password = passwordArr.join(""); // Convert the array into a string

  return password;
}

function reset() {
  randomLettersArr = [];
  randomNumbersArr = [];
  randomSymbolsArr = [];
  randomLettersStr = "";
  randomNumbersStr = "";
  randomSymbolsStr = "";
}

function generatePwd() {
  let password1 =
    generateRandomLetters() + generateRandomNumbers() + generateRandomSymbols();
  reset();
  let password2 =
    generateRandomLetters() + generateRandomNumbers() + generateRandomSymbols();
  reset();

  let s_password1 = shufflePwdCharacters(password1);
  let s_password2 = shufflePwdCharacters(password2);

  displayPwd1El.textContent = s_password1;
  reset();
  displayPwd2El.textContent = s_password2;
  reset();
}

function clearDisplayedPwd() {
  displayPwd1El.textContent = "";
  displayPwd2El.textContent = "";
  numLetters = 0;
  numNumbers = 0;
  numSymbols = 0;
  rangeLettersEl.value = 0;
  rangeNumbersEl.value = 0;
  rangeSymbolsEl.value = 0;
  valueLettersEl.innerHTML = rangeLettersEl.value;
  valueNumbersEl.innerHTML = rangeNumbersEl.value;
  valueSymbolsEl.innerHTML = rangeSymbolsEl.value;
  reset();
}

function copyPwd1() {
  navigator.clipboard.writeText(displayPwd1El.textContent);
}

function copyPwd2() {
  navigator.clipboard.writeText(displayPwd2El.textContent);
}

function updateYear() {
  year.innerHTML = new Date().getFullYear();
}

generatePwdBtn.addEventListener("click", generatePwd);
clearPwdBtn.addEventListener("click", clearDisplayedPwd);
copyIconEl1.addEventListener("click", copyPwd1);
copyIconEl2.addEventListener("click", copyPwd2);

updateYear();
