import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import Dropzone from '../../components/dropzone';
import 'react-toastify/dist/ReactToastify.css';

import './style.css';
import api from '../../services/api';

import BackGround from '../../assets/geek-store-background.png';

export default function NewEmployee(props){
    
        const [fs_employee, setFs_employee] = useState();
        const [sn_employee, setSn_employee] = useState();
        const [nm_username, setNm_username] = useState();
        const [pw_password, setPw_password] = useState();
        const [vl_salary, setVl_salary] = useState();
        const [ds_email, setDs_email] = useState();
        const [dt_birth, setDt_birth] = useState();
        const [dt_admission, setDt_admission] = useState();
        const [ds_genre, setDs_genre] = useState();
        const [ds_active, setDs_active] = useState();
        const [ds_office, setDs_office] = useState();
        const [ selectedFile, setSelectedFile ] = useState(); 
        const [ offices, setOffices ] = useState([]);

        const history = useHistory();

        const notify = function(response) { toast.success(response) };
        const notifyUnsuccess = function(response) { toast.error(response) };
        const notifyToken = function(response) { toast(response) };


        useEffect(() => {
            loadOffices()
                .then(r => {setOffices(r.data); console.log(r.data);})
        }, []);

        const loadOffices = async () => {
            return await api.get('office');
        }

        const handleNewEmployee = async (e) => {
            e.preventDefault();

            const data = {
                fs_employee,
                sn_employee,
                nm_username,
                pw_password,
                vl_salary,
                ds_email,
                dt_birth,
                dt_admission,
                aw_image: selectedFile,
                ds_genre,
                ds_active,
                ds_office
            };

            try{
                const menu = () => { history.push('/') };

                let dtExpiracao = [...Cookies.get('dt_expiracao')];

                if(new Date() > dtExpiracao) {
                    notifyToken('Token expirado, faça login novamente.');

                    setTimeout(menu, 5000);
                }
                await api.post('employees', data);

                notify('Funcionário cadastrado com sucesso.');
            }catch(err){
                notifyUnsuccess('Erro ao efeturar o cadastro, tente novamente');
            }
        }


        
        return(
            <div className="new-employee-container">
                <header>
                        <img src={BackGround} alt="Geek Store"/>

                        <Link className="back-link" to="/home">
                            <FiArrowLeft size={16} color="#E02041" />
                            Voltar para home
                        </Link >
                    </header>

                <div className="content">
                    <form onSubmit={handleNewEmployee}>
                        <br/>
                        <br/>
                        <h1>Cadastrar novo funcionário</h1>
                        <p>Preencha todos os campos para cadastrar.</p>
                        <br/>
                        <Dropzone onFileUploaded={setSelectedFile} />

                        <input 
                        placeholder="Nome do funcionário"
                        type="text"
                        value={fs_employee}
                        onChange={e => setFs_employee(e.target.value)}
                        />

                        <input 
                        placeholder="Sobrenome do funcionário"
                        type="text"
                        value={sn_employee}
                        onChange={e => setSn_employee(e.target.value)}
                        />

                        <input 
                        placeholder="Nome do usuário"
                        type="text"
                        value={nm_username}
                        onChange={e => setNm_username(e.target.value)}
                        />

                        <input 
                        placeholder="Senha"
                        type="password"
                        maxLength={16}
                        value={pw_password}
                        onChange={e => setPw_password(e.target.value)}
                        />

                        <input 
                        placeholder="Salário"
                        type="number"
                        value={vl_salary}
                        onChange={e => setVl_salary(e.target.value)}
                        />

                        <input 
                        type="email" 
                        placeholder="E-mail"
                        value={ds_email}
                        onChange={e => setDs_email(e.target.value)}
                        />

                        <div className="date">
                            <p>Data de nascimento</p>
                            <input 
                            type="date" 
                            value={dt_birth}
                            onChange={e => setDt_birth(e.target.value)}
                            />
                            <p>Data de admissão</p>
                            <input 
                            type="date" 
                            value={dt_admission}
                            onChange={e => setDt_admission(e.target.value)}
                            />
                        </div>
                        
                        <div className="radio">
                            <input 
                            type="radio"
                            className="gender"
                            value={ds_genre}
                            onChange={e => setDs_genre(e.target.value)}
                            /> M
                            <input 
                            type="radio"
                            className="gender"
                            /> F
                        </div>
                        <div className="active">
                            <input 
                            type="checkbox"
                            placeholder="Ativo"
                            value={ds_active}
                            onChange={e => setDs_active(e.target.value)}
                            />Ativo    
                        </div>
                        <select
                        onChange={e => setDs_office(e.target.value)}
                        name="office"
                        id="office"
                        value={ds_office}
                        >
                                {offices.map(o => (
                                    <option key={o.ds_office} value={o.ds_office}>{o.ds_office}</option>
                                ))}
                        </select>

                        <button className="button" type="submit">Cadastrar</button>
                    </form>
                </div>
            </div>
        );
    
}