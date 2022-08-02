const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
expr = expr.split('');

const newExpr =[];
for (let i = 0; i < expr.length; i = i + 10) {
    newExpr.push(expr.slice(i, i + 10))
}

const newMorse = [];
newExpr.forEach(tens => {
    letter = '';
    for (i = 9; i > 0; i = i - 2){
        if (tens[i-1] + tens[i] == '10') {letter = '.' + letter};
        if (tens[i-1] + tens[i] == '11') {letter = '-' + letter};
        if (tens[i-1] + tens[i] == '**') {letter = '' + letter};
    }
    newMorse.push(letter);
})

result = '';
newMorse.forEach(letter => {
    if (!MORSE_TABLE[letter]){result += ' '}
    else result += MORSE_TABLE[letter];
})
return result;
};

module.exports = {
    decode
}