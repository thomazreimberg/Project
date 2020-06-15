import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import NewEmployee from './pages/NewEmployee';
import ShowEmployees from './pages/ShowEmployees';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login}/>
            <Route path="/home" component={Home} />
            <Route path="/newemployee" component={NewEmployee} />
            <Route path="/showemployee" component={ShowEmployees} />
        </BrowserRouter>
    );
}

export default Routes;