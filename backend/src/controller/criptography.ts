import Key from '../utils/crypt';
import { v4 as uuidv4 } from 'uuid';

const key = new Key();
const privateKey = key.privateKey();

class KeyController {
    cryptography(id: number) {
        try {
            let number = generateCode();
            let uuid = uuidv4();
            let date = generateExpirationDate();

            let token = id + '|' + number + '|' + uuid + '|' + date;
            let cryptoToken = {
                token: crypto(token),
                dt_expiracao: date
            };

            return cryptoToken;
        } catch (e) {
            return ('Some error has occurred, try again.')
        }
    }

    decryptofraphy(token: string) {
        try {
            let tokenArray = decrypt(token).split('|');
            return tokenArray[3];
        } catch (e) {
            return ('Some error has occurred, try again.');
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