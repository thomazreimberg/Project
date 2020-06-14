import express from 'express';

import EmployeesController from './controller/employeesController';
import OfficeController from './controller/officeController';

const routes = express.Router();
const employeesController = new EmployeesController();
const officeController = new OfficeController();

import Teste from './controller/teste';
const teste = new Teste();

routes.get('/office', officeController.show);

routes.get('/employees', employeesController.index);
routes.get('/search', employeesController.search);

routes.get('/crypto/:id', teste.login);
routes.get('/decrypt/:id', teste.login);

routes.post('/employees', employeesController.create);
routes.post('/login/:nm_username/:pw_password', employeesController.login);

routes.put('/employees', employeesController.update);

routes.delete('/employees/:id', employeesController.delete);

export default routes;