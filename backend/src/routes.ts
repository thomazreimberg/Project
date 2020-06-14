import express from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

import EmployeesController from './controller/employeesController';
import OfficeController from './controller/officeController';

const routes = express.Router();
const upload = multer(multerConfig)

const employeesController = new EmployeesController();
const officeController = new OfficeController();


routes.get('/office', officeController.show);

routes.get('/employees', employeesController.index);
routes.get('/search', employeesController.search);

routes.post('/employees', upload.single('image'), employeesController.create);
routes.post('/login', employeesController.login);

routes.put('/employees', employeesController.update);

routes.delete('/employees/:id', employeesController.delete);

export default routes;