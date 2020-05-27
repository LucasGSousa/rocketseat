import React, { useState, useEffect } from 'react';
import {View,FlatList,Image,Text,TouchableOpacity} from 'react-native';
import {Feather} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native';

import logoImg from '../../assets/logo.png';
import styles from './styles';
import api from '../../services/api';

export default function Casos () {
    const nav = useNavigation();
    const [casos,setCasos] = useState([]);
    const [casosNb,setCasosNb] = useState('');
    function navToDetail(caso){
        nav.navigate('Detalhe',{caso});
    }
    async function loadCasos(){
        const response = await api.get('casos/all');
        setCasos(response.data);
        setCasosNb(response.headers['total']);
    }
    useEffect(()=>{
        loadCasos();
    },[]);
    return (
        <View style={styles.container}>
            <View style={styles.header}> 
                <Image source={logoImg}/>
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{casosNb} Casos</Text>
                </Text>
            </View>
            <Text style={styles.title}>Bem-Vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia</Text>
            <FlatList style={styles.casosList}
            data={casos} 
            keyExtractor={c => String(c.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({item:c})=>(
                <View style={styles.caso}>
                    <Text style={styles.casoProp}>Ong:</Text>
                    <Text style={styles.casoValue}>{c.name}</Text>

                    <Text style={styles.casoProp}>Caso:</Text>
                    <Text style={styles.casoValue}>{c.title}</Text>

                    <Text style={styles.casoProp}>Valor:</Text>
                    <Text style={styles.casoValue}>{Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(c.value)}</Text>
                    <TouchableOpacity style={styles.detailButton} onPress={()=>navToDetail(c)}>
                        <Text style={styles.detailButtonText}>Ver mais detalhes</Text>
                        <Feather name="arrow-right" size={16} color="#E02041"/>
                    </TouchableOpacity>
                </View>)
            }/>
        </View>

    );
}