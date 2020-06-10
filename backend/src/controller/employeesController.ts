import { Request, Response } from 'express';
import knex from '../database/connection';

class employeesController {
    async create(request: Request, response: Response) {
        const {
            id_employee,
            fs_employee,
            sn_employee,
            nm_username,
            pw_password,
            vl_salary,
            ds_email,
            dt_birth,
            dt_admission,
            aw_image,
            ds_genre,
            ds_active,
            id_office
        } = request.body;
        
    }
}