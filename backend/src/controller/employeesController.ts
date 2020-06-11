import { Request, Response } from 'express';
import knex from '../database/connection';
import EmployeesBusiness from './Business/employeesBusiness';

const employeesBusiness = new EmployeesBusiness();

class EmployeesController {
    async index(request: Request, response: Response) {
        const employees = await knex('tb_employees').select('*');

        return response.json(employees);
    }

    async login(request: Request, response:Response) {
        try {
            const {
                nm_username,
                pw_password
            } = request.params;

            const contains = await knex('tb_employees')
                .where('nm_username', '=', nm_username)
                .andWhere('pw_password', '=', pw_password)
                .first();

            if(contains == null){
                return response.status(401).json({ erro: "Login inválido"});
            }
            
            return response.json(contains);

        } catch (e) {
            return response.status(401).json({ erro: e});
        }
    }

    async create(request: Request, response: Response) {
        try {
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

            //employeesBusiness.create(employee);
            
            await trx('tb_employees').insert(employee);

            await trx.commit();
    
            return response.json('Funcionário cadastrado com sucesso.');
        } catch (e) {
            return response.status(401).json({ erro: e});
        }
    }
}

export default EmployeesController;