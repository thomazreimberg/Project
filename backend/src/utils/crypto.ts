const alpha2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let letterPosition2 = new Array <number>();
let indiceLetter2 = new Array <number | string>();
let wordConverted2 = new Array <string>();
let specialLetters2 = new Array<string>();
let phraseComplete2= '';
let specialLettersPosition2 = new Array<number>();

function alphaIndex2(phrase: string, numberOfJumps : number) {
    let arrayLetters = convertPhrase2(phrase);
    separateLetters2(numberOfJumps, arrayLetters);

    cryptoPhrase2();
    verifyLenght2(arrayLetters);

    joinLetters2();

    return phraseComplete2;
};

function verifyLenght2(arrayLetters: Array<string>) {
    let arrayLettersVerify = arrayLetters;
    if(phraseComplete2.length > arrayLettersVerify.length) {
        let removeCount = phraseComplete2.length - arrayLettersVerify.length;
        phraseComplete2 = phraseComplete2.substring(0, removeCount);
    }
}

function convertPhrase2(phrase: string) {
    return phrase.toUpperCase().split('');
}

function separateLetters2(numberOfJumps : number, arrayLetters: Array<string>) {
    let n = 0;

    arrayLetters.forEach(letter => {
        let postion = Number(alpha2.indexOf(letter)); 
        if (postion == -1) {
            specialLetters2.push(letter);
            specialLettersPosition2.push(n);
            indiceLetter2.push(letter);
            return letterPosition2.push(-1);
        } else {
            let indexVerification = Number(alpha2.indexOf(letter) + numberOfJumps);
            indexLetter2(indexVerification, letterPosition2, indiceLetter2, letter);
        }
        n++
    });
}

function indexLetter2(indexVerification: number, letterPosition: Array<number>, indiceLetter: Array<string | number>, letter: string) {
    let alphaIndex = indexVerification <= -1 ? Math.abs(indexVerification) : indexVerification;

    if(indexVerification <= -1){
        let index = alpha2.length - alphaIndex;
        indiceLetter2.push(index);

        return letterPosition.push(index);
    } else if (letter != ' ' || alphaIndex >= 0) {
        indiceLetter2.push(alphaIndex);

        return letterPosition2.push(alphaIndex);
    } else {
        indiceLetter2.push(letter);

        return letterPosition2.push(alphaIndex);
    }
}

function cryptoPhrase2() {
    letterPosition2.forEach(index => {
        if (index < 0) {
            let position = String(specialLetters2.shift());

            return wordConverted2.push(position);
        } else {
            let letter = alpha2[index];

            return wordConverted2.push(letter);
        }
    });
}

function joinLetters2() {
    phraseComplete2 = wordConverted2.join('').replace(',', '').toLowerCase();
}

module.exports = alphaIndex2;