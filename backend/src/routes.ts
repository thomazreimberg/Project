import express from 'express';

import EmployeesController from './controller/employeesController';
import OfficeController from './controller/officeController';

const routes = express.Router();
const employeesController = new EmployeesController();
const officeController = new OfficeController();


routes.get('/office', officeController.show);

routes.get('/employees', employeesController.index);
routes.get('/search', employeesController.search);

routes.post('/employees', employeesController.create);
routes.post('/login/:nm_username/:pw_password', employeesController.login);

routes.put('/employees', employeesController.update);

routes.delete('/employees/:id', employeesController.delete);

export default routes;