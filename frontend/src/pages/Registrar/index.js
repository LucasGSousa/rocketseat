import React,{useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api';
import logoImg from '../../assets/logo.svg';
import './styles.css';

export default function Registrar(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [wpp, setWpp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUF] = useState('');
    const hist = useHistory();
    async function handleRegistrar(e){
        e.preventDefault();
        const datas = {
            name,
            email,
            city,
            uf,
            whatsapp : wpp
        }
        try{
            const {data} = await api.post('ongs',datas);
            alert(`Cadastrado com id ${data.id}`);
            hist.push('/');
        }catch(e){
            alert('Erro ao cadastrar');
        }
    }
    return (
    <div className="register-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Be The Hero"/>
                <h1>Cadastro</h1>
                <p>Faça seu cadastro, entra na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                 <Link to="/" className="back-link">
                     <FiArrowLeft size={16} color="#E02041"/>
                     Voltar para home
                 </Link>
            </section>
            <form>
                <input placeholder="Nome" value={name} onChange={e=>setName(e.target.value)}/>
                <input type="email" placeholder="E-mail"value={email} onChange={e=>setEmail(e.target.value)}/>
                <input placeholder="Whatsapp" value={wpp} onChange={e=>setWpp(e.target.value)}/>
                <div className="input-group">
                    <input placeholder="Cidade"value={city} onChange={e=>setCity(e.target.value)}/>
                    <input placeholder="UF" style={{width:80}}value={uf} onChange={e=>setUF(e.target.value)}/>
                </div>
                <button className="button" type="submit" onClick={handleRegistrar}>
                    Cadastrar
                </button>
            </form>
        </div>
    </div>
    );
}