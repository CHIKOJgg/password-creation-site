'use strict';
const digitsArray = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '!',
  '"',
  '%',
  '?',
  '*',
  '#',
  '/',
];
let previousPasswords = [];
const copyButton = document.getElementById('copy-button');
let toCopy = document.getElementById('password-place-text');
const mainActionButton = document.getElementById('main-action-button');
const previousPasswordElements = [
  document.getElementById('previous-password1'),
  document.getElementById('previous-password2'),
  document.getElementById('previous-password3'),
];
const passwordQueue = [];

function paswordCreation() {
  let password = '';
  for (let i = 0; i < 18; i++) {
    let paswNumIndex = Math.round(Math.random() * (digitsArray.length - 1));
    let paswordDigit = digitsArray[paswNumIndex];
    password = `${password}${paswordDigit}`;
  }
  console.log(password);
  return password;
}

mainActionButton.addEventListener('click', function () {
  const newPassword = paswordCreation();

  toCopy.textContent = newPassword;
  showPreviousPasswords();
  addPasswordToQueue(newPassword);
});

copyButton.addEventListener('click', () => {
  const range = document.createRange();
  range.selectNode(toCopy);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);

  try {
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert(`${toCopy.textContent} скопировано в буфер обмена`);
  } catch (error) {
    console.error('Не удалось скопировать содержимое: ', error);
  }
});
function showPreviousPasswords() {
  passwordQueue.forEach((password, index) => {
    previousPasswordElements[index].textContent = ` ${password}`;
  });
}
function addPasswordToQueue(password) {
  passwordQueue.push(password);
  if (passwordQueue.length > 3) {
    passwordQueue.shift();
  }
}
