import Key from '../utils/crypt';
const key = new Key();
import { v4 as uuidv4 } from 'uuid';
const privateKey = key.privateKey();

import { Request, Response } from 'express';

class KeyController {
    cryptography(id: number) {
        try {
            let number = generateCode();
            let uuid = uuidv4();
            let date = generateExpirationDate();

            let token = id + '|' + number + '|' + uuid + '|' + date;
            let cryptoToken = crypto(token);

            return cryptoToken;
        } catch (e) {
            return ('Ocorreu um erro, tente novamente.')
        }
    }
}

function crypto(token: string) {
    let cryptedToken = privateKey.encrypt(token, 'base64');
    return cryptedToken;
}

function decrypt(token: string) {
    let decryptedToken = privateKey.decrypt(token, 'utf8');
    return decryptedToken;
}

function generateExpirationDate() {
    let date = new Date();
    date.setMinutes(date.getMinutes() + 1);

    return date;
}

function generateCode() {
    return Math.floor((Math.random() * 65536) - 32768) * 2;
}

export default KeyController;