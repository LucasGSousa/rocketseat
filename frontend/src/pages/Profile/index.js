import React,{useEffect, useState} from 'react';
import {FiPower} from 'react-icons/fi';
import {FiTrash2} from 'react-icons/fi';
import {Link, useHistory} from 'react-router-dom';

import './styles.css';


import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

export default function Profile(){
    const name = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');
    const [casos, setCasos] = useState([]);
    const hist = useHistory();
    useEffect(()=> {
        api.get('casos',{
        headers:{
            Authorization: ongId
        }}).then(res=> {
            setCasos(res.data);
        });
    },[ongId]);

    async function handleDelete(id){
        try{
            await api.delete(`casos/${id}`,{headers:{Authorization:ongId}});

            setCasos(casos.filter(c=>c.id!==id));
        }catch{
            alert("erro ao excluir ");
        }
    }

    async function handleLogout(id){
        localStorage.clear();
        hist.push('/');
    }
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span>Bem vinda, {name}</span>
                
                <Link to="/casos/new" className="button">
                        Cadastrar Novo Caso</Link>
                <button type="button" className="button-clean" onClick={handleLogout}>
                        <FiPower size={18} color="#E02041"/>
                </button>

            </header>
            <h1>Titulo caso</h1>
            <ul>
                {casos.map(c=>(
                    <li key={c.id}>
                        <strong>CASO:</strong>
                        <p>{c.title}</p>
                        <strong>Descrição</strong>
                        <p>{c.description}</p>
                        <strong>Valor</strong>
                        <p>{Intl.NumberFormat('pt-br',{style:'currency',currency:'BRL'}).format(c.value)}</p>
                        <button type="button" onClick={()=>handleDelete(c.id)}>
                            <FiTrash2 size={20} color="#a8a8b3"/>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}