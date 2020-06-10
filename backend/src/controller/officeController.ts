import { Request, Response } from 'express';
import knex from '../database/connection';

class PointController {
    async show(request: Request, response:Response) {
        const offices =  await knex('tb_office')
            .select('ds_office');

        return response.json(offices);
    }
}

export default PointController;