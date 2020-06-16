import React from 'react';
import './style.css';

import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import BackGround from '../../assets/geek-store-background.png';
import BackGround2 from '../../assets/geek-store-background-2.png';

export default function Logon(){
    return(
        <div className="logon-container">
            <section className="form">
                <img src={BackGround2} alt="Geek Store 2"/>

                <form>
                    <h1>Faça seu Logon</h1>
                    <input placeholder="Username"
                    value=""
                    />
                    <input placeholder="Password"
                    value=""
                    />

                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/">
                        <FiLogIn size={16} color="#66b3ff" />
                        Não tenho cadastro
                    </Link >
                </form>
            </section>

            <img src={BackGround} alt="Geek Store"/>
        </div>
    );
}