import React, { useState } from 'react';
import Cookies from 'js-cookie';

import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import BackGround from '../../assets/geek-store-background.png';
import BackGround2 from '../../assets/geek-store-background-2.png';

import api from '../../services/api';
import './style.css';

export default class Logon{
    render () {
        const [nm_username, setUsername] = useState('');
        const [pw_password, setPassword] = useState('');
        const history = useHistory();

        const notify = function(response) { toast.success(response) };

        const notifyUnsuccess = function(response) { toast.error(response) };

        const menu = () => { history.push('/home') };
        const inFifteenMinutes = new Date(new Date().getTime() + 100 * 60 * 1000);//Por 

        async function handleLogin(e){
            e.preventDefault();
    
            try{
                const response = await api.post('login', { nm_username, pw_password });

                Cookies.remove('token');
                Cookies.remove('dt_expiracao');

                Cookies.set('token', response.data.token, { expires: inFifteenMinutes });
                Cookies.set('dt_expiracao', response.data.dt_expiracao, {expires: inFifteenMinutes});
                
                notify('Usuário autenticado. Seja bem vindo!');
                setTimeout(menu, 5000);
            }catch(err){
                notifyUnsuccess('Falha no login, tente novamente.');
            }
        }
    
        return(
            <div className="logon-container">
                <section className="form">
                    <img src={BackGround2} alt="Geek Store 2"/>
    
                    <form onSubmit={handleLogin}>
                        <h1>Faça seu Logon</h1>
                        <input placeholder="Username"
                        type="text"
                        value={nm_username}
                        onChange={e => setUsername(e.target.value)}
                        />
                        <input placeholder="Password"
                        type="password"
                        value={pw_password}
                        onChange={e => setPassword(e.target.value)}
                        />
    
                        <button type="submit" className="button" >Entrar</button>
                        <ToastContainer 
                        position="top-center"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        limit={1}
                        />
    
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
}