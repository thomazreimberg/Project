const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let letterPosition = new Array <number>();
let indiceLetter = new Array <number | string>();
let wordConverted = new Array <string>();
let specialLetters = new Array<string>();
let phraseComplete = '';
let specialLettersPosition = new Array<number>();

function alphaIndex(phrase: string, numberOfJumps : number) {
    let arrayLetters = convertPhrase(phrase);
    separateLetters(numberOfJumps, arrayLetters);

    cryptoPhrase();
    verifyLenght(arrayLetters);

    joinLetters();

    return phraseComplete;
};

function verifyLenght(arrayLetters: Array<string>) {
    let arrayLettersVerify = arrayLetters;
    if(phraseComplete.length > arrayLettersVerify.length) {
        let removeCount = phraseComplete.length - arrayLettersVerify.length;
        phraseComplete = phraseComplete.substring(0, removeCount);
    }
}

function convertPhrase(phrase: string) {
    return phrase.toUpperCase().split('');
}

function separateLetters(numberOfJumps : number, arrayLetters: Array<string>) {
    let n = 0;

    arrayLetters.forEach(letter => {
        let postion = Number(alpha.indexOf(letter)); 
        if (postion == -1) {
            specialLetters.push(letter);
            specialLettersPosition.push(n);
            indiceLetter.push(letter);
            return letterPosition.push(-1);
        } else {
            let indexVerification = Number(alpha.indexOf(letter) - numberOfJumps);
            indexLetter(indexVerification, letterPosition, indiceLetter, letter);
        }
        n++
    });
}

function indexLetter(indexVerification: number, letterPosition: Array<number>, indiceLetter: Array<string | number>, letter: string) {
    let alphaIndex = indexVerification <= -1 ? Math.abs(indexVerification) : indexVerification;

    if(indexVerification <= -1){
        let index = alpha.length - alphaIndex;
        indiceLetter.push(index);

        return letterPosition.push(index);
    } else if (letter != ' ' || alphaIndex >= 0) {
        indiceLetter.push(alphaIndex);

        return letterPosition.push(alphaIndex);
    } else {
        indiceLetter.push(letter);

        return letterPosition.push(alphaIndex);
    }
}

function cryptoPhrase() {
    letterPosition.forEach(index => {
        if (index < 0) {
            let position = String(specialLetters.shift());

            return wordConverted.push(position);
        } else {
            let letter = alpha[index];

            return wordConverted.push(letter);
        }
    });
}

function joinLetters() {
    phraseComplete = wordConverted.join('').replace(',', '').toLowerCase();
}

module.exports = alphaIndex;