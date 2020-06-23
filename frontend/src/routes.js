import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import NewEmployee from './pages/NewEmployee';
import ShowEmployees from './pages/ShowEmployees';

const login = new Login();
const home = new Home();
const showEmployees = new ShowEmployees();

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={login.render}/>
            <Route path="/home" component={home.render} />
            <Route path="/newemployee" component={NewEmployee} />
            <Route path="/showemployee" component={showEmployees.render} />
        </BrowserRouter>
    );
}

export default Routes;