import BusinessError from "./businessError";


interface Employees {
    fs_employee: string
    sn_employee: string,
    nm_username: string,
    pw_password: string,
    vl_salary: number,
    ds_email: string,
    dt_birth: Date,         //falta validar
    dt_admission: Date,    //falta validar
    aw_image: string,
    ds_genre: string,
    ds_active: boolean
}

class EmployeesBusiness {
    create(employee: Employees){
        if(employee.fs_employee == '' || employee.fs_employee.length > 150) {
            return ('Informe um nome de funcionário válido.');
        } else if(employee.sn_employee == '' || employee.sn_employee.length > 250) {
            return ('Informe o sobrenome do funcionário.');
        } else if(employee.nm_username == ''|| employee.pw_password.length > 16) {
            return ('Informe o nome do usuário.');
        } else if(employee.pw_password == '' || employee.pw_password.length > 16) {
            return('Informe uma senha válida.');
        } else if(employee.vl_salary == 0.00) {
            return ('Informe o valor do salário.');
        } else if(employee.ds_email == '' || employee.ds_email.length > 200) {
            return ('Informe um email válido.');
        } else if(employee.ds_genre == '') {
            return ('Informe um gênero.');
        } else {
            return '';
        }
    }
}

export default EmployeesBusiness;