import { Request, Response } from 'express';
import knex from '../database/connection';

class EmployeesController {
    async create(request: Request, response: Response) {

        const {
            fs_employee,
            sn_employee,
            nm_username,
            pw_password,
            vl_salary,
            ds_email,
            dt_birth,
            dt_admission,
            //aw_image,
            ds_genre,
            ds_active,
            ds_office
            } = request.body;

        const trx = await knex.transaction();  
        
        const tb_office = await trx('tb_office')
            .where('ds_office', '=', String(ds_office))
            .first();
        const id_office = tb_office.id_office;
        const employee = {
            fs_employee,
            sn_employee,
            nm_username,
            pw_password,
            vl_salary,
            ds_email,
            dt_birth,
            dt_admission,
            aw_image: 'https://www.carlrippon.com/static/64d2dff032f91508ec5326d8e4cdaaab/11d19/React-and-typescript.png',
            ds_genre,
            ds_active,
            id_office
        };
    
        await trx('tb_employees').insert(employee);
    
        await trx.commit();
    
        return response.json('Funcionário cadastrado com sucesso.');
    }
}

export default EmployeesController;