import BusinessError from "./businessError";


interface Employees {
    fs_employee: string,
    sn_employee: string,
    nm_username: string,
    pw_password: string,
    vl_salary: number,
    ds_email: string,
    dt_birth: Date,         //falta validar
    dt_admission: Date,    //falta validar
    aw_image: string,
    ds_genre: string,
    ds_active: boolean,
    ds_office: string
}

class EmployeesBusiness {
    create(employee: Employees){
        if(employee.fs_employee == '' || employee.fs_employee.length > 150) {
            throw new BusinessError('Informe o nome do funcionário corretamente.');
        } else if(employee.sn_employee == '' || employee.sn_employee.length > 250) {
            throw new BusinessError('Informe o sobrenome do funcionário.');
        } else if(employee.nm_username == ''|| employee.pw_password.length > 16) {
            throw new BusinessError('Informe o nome do usuário.');
        } else if(employee.pw_password == '' || employee.pw_password.length > 16) {
            throw new BusinessError('Informe uma senha válida.');
        } else if(employee.vl_salary == 0.00) {
            throw new BusinessError('Informe o valor do salário.');
        } else if(employee.ds_email == '' || employee.ds_email.length > 200) {
            throw new BusinessError('Informe um email válido.');
        } else if(employee.ds_genre == '') {
            throw new BusinessError('Informe um gênero.');
        }
    }
}

export default EmployeesBusiness;