import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './style.css';


export default class Home{
    render() {
        return(
            <div className="logon-container">
                <h1>Hello</h1>
                <Link className="back-link" to="/newemployee">
                            <FiArrowLeft size={16} color="#E02041" />
                            Voltar para home
                </Link >
            </div>
        );
    }
}