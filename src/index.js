const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

const morseDictionary = {
    10: '.',
    11: '-',
};


function decode(expr) {

    const symbolsAmount = expr.length / 10;

    const arr = [];

    for (let i = 1; i <= symbolsAmount; i++) {
        arr.push(expr.substring(i * 10 - 10, i * 10));
    }

    return arr.map(incodedSymbol => {
        if (incodedSymbol === '**********') {
            return " "
        }

        const morseKey = [`${incodedSymbol[0]}${incodedSymbol[1]}`,
            `${incodedSymbol[2]}${incodedSymbol[3]}`,
            `${incodedSymbol[4]}${incodedSymbol[5]}`,
            `${incodedSymbol[6]}${incodedSymbol[7]}`,
            `${incodedSymbol[8]}${incodedSymbol[9]}`].map((key => morseDictionary[key] ? morseDictionary[key] : '')).join('')

        return  MORSE_TABLE[morseKey]

    }).join('')

}

module.exports = {
    decode
}