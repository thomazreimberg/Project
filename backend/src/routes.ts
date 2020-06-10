import express from 'express';

import EmployeesController from './controller/employeesController';
import OfficeController from './controller/officeController';

const routes = express.Router();
const employeesController = new EmployeesController();
const officeController = new OfficeController();

routes.get('/office', officeController.show);

routes.post('/employees', employeesController.create);

export default routes;