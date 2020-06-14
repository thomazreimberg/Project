import Key from '../utils/crypt';
const key = new Key();
import { v4 as uuidv4 } from 'uuid';
const privateKey = key.privateKey();
const publicKey = key.publicKey();

import { Request, Response } from 'express';

class KeyController {
    login(request: Request, response: Response) {
        try {
            const { id } = request.params;

            let number = generateCode();
            let uuid = uuidv4();
            let date = generateExpirationDate();

            let token = id + '|' + number + '|' + uuid + '|' + date;
            console.log('Token: ' + token);
            console.log('Token Convertido: ' + crypto(token));
            return response.json('Ok');
        } catch (e) {
            return ('Ocorreu um erro, tente novamente.')
        }
    }
}

function crypto(token: string) {
    let cryptedToken = privateKey.encrypt(token, 'base64');
    return cryptedToken;
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