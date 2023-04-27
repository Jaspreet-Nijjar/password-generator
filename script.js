const characters = [
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
  '~',
  '`',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '-',
  '+',
  '=',
  '{',
  '[',
  '}',
  ']',
  ',',
  '|',
  ':',
  ';',
  '<',
  '>',
  '.',
  '?',
  '/',
];

const button = document.querySelector('button');
const passwordLength = document.querySelector('#length');
const output = document.querySelector('#output');

button.addEventListener('click', generatePassword);

function generatePassword() {
  output.textContent = '';

  let passLength = +passwordLength.value;

  for (let i = 0; i < passLength; i++) {
    if (passLength > 15) {
      output.textContent = 'Password must be 15 characters or less';
    } else {
      let random = Math.floor(Math.random() * characters.length);
      output.textContent += characters[random];
    }
  }

  if (passLength <= 3) {
    output.textContent = 'Password must be more than 3 characters';
  }

  output.style.display = 'block';
}
