import { Request, Response, request } from 'express';
import knex from '../database/connection';
const decode = require('../utils/decode');
const crypto = require('../utils/crypto');
class PointController {
    async show(request: Request, response:Response) {
        const offices =  await knex('tb_office')
            .select('ds_office');
        console.log(decode('t', 2));
        console.log(crypto('r', 2));
        return response.json(offices);
    }
}

export default PointController;