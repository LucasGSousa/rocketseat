import React,{useState} from 'react';
import {FiLogIn} from 'react-icons/fi';
import {Link, useHistory} from 'react-router-dom';

import './styles.css';


import api from '../../services/api';
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon(){
    const [id,setId] =useState('');
    const hist = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try{
            const res = await api.post('sessions', {id});
            const {nome} = res.data;
            console.log(nome);
            localStorage.setItem('ongId',id);
            localStorage.setItem('ongName',nome);
            hist.push('/profile');
        }catch{
            alert('Falha ao realizar login')
        }

    }
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>
                <form onSubmit = {handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input placeholder="Sua ID" value={id} onChange = {e=>setId(e.target.value)}/>
                    <button className="button" type ="submit">Entrar</button>
                    <Link to="/registrar" className="back-link">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro</Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}