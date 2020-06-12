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
                return response.status(401).json({ erro: "Login inválido. Tente novamente."});
            }
            
            return response.json(contains);

        } catch (e) {
            return response.status(401).json({ erro: e});
        }
    }

    async search(request: Request, response: Response) {
        try {
            const {
                fs_employee,
                vl_salary,
                ds_active,
                ds_genre 
            } = request.query;
    
            const employees = await knex('tb_employees')
                .where('fs_employee', 'like', String(fs_employee))
                .where('vl_salary', '=', Number(vl_salary))
                .where('ds_active', '=', Boolean(ds_active))
                .where('ds_genre', '=', String(ds_genre))
                .select('tb_employees.*');

            return response.json(employees);
        } catch (error) {
            return response.status(401).json({ erro: error});
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

            
            const flag = employeesBusiness.create(employee);
            if(flag != ''){
                throw (flag);
            }
            await trx('tb_employees').insert(employee);

            await trx.commit();
    
            return response.json('Funcionário cadastrado com sucesso.');
        } catch (error) {
            return response.status(401).json({ erro: error});
        }
    }

    async update(request: Request, response: Response) {
        const{
            employee_id,
            fs_employee, //Irei colocar outros parâmetros
            sn_employee
        } = request.params;

        await knex('tb_employees')
            .where('id_employee', '=', employee_id)
            .update({
                fs_employee: fs_employee,
                sn_employee: sn_employee,
                thisKeyIsSkipped: undefined
            })

        return response.json('Alterações efetuadas.');
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params;

        await knex('tb_employees')
            .where('id', '=', id)
            .delete();

        return response.json('Funcionário deletado.');
    }
}

export default EmployeesController;