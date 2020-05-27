import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import './styles.css';
import api from '../../services/api';

export default function NovoCaso(){
    const [v,setV] = useState('');
    const [title,setTitle] = useState('');
    const [desc,setDesc] = useState('');

    const data ={
        value:v,
        title,
        description:desc
    }
    async function handleCadastro(){
        try{
            await api.post('casos',data,{headers:{Authorization:localStorage.getItem('ongId')}})
        }catch{
            alert('Erro ao cadastrar');
        }
    }
    return (
    <div className="novo-caso-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Be The Hero"/>
                <h1>Cadastro novo caso</h1>
                <p>Descreva o caso detalhadamento para encontrar um herói para resolve-lo.</p>
                 <Link to="/profile" className="back-link">
                     <FiArrowLeft size={16} color="#E02041"/>
                     Voltar para home
                 </Link>
            </section> 
            <form>
                <input placeholder="Titulo do caso" value={title} onChange={e=>setTitle(e.target.value)}/>
                <textarea placeholder="Descrição" value={desc} onChange={e=>setDesc(e.target.value)}></textarea>
                <input placeholder="Valor em reais" value ={v} onChange={e=>setV(e.target.value)}/>
                <div class="input-group">
                    <button className="button clear" type="submit">
                        Cancelar
                    </button>
                    <button className="button" type="submit" onClick={handleCadastro}>
                        Cadastrar
                    </button>
                </div>
            </form>
        </div>
    </div>
    );
}