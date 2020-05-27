import React from 'react';
import {View,Image,Text,TouchableOpacity,Linking} from 'react-native';
import {Feather} from '@expo/vector-icons'
import {useNavigation, Link, useRoute} from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer'

import logoImg from '../../assets/logo.png';
import styles from './styles';


export default function Casos () {
    const rot = useRoute();
    const caso = rot.params.caso;
    const nav = useNavigation();
    const msg = `Caro ${caso.name} essa mensagem é referente ao '${caso.title}' cadastrado no app Be The Hero`;
    function navToCasos(){
        nav.goBack();
    }
    function sendMail(){
        MailComposer.composeAsync({
            subject:`Herói do caso:${caso.title}`,
            recipients:[caso.email],
            body:msg
        });
    }
    function sendZap(){
        Linking.openURL(`https://api.whatsapp.com/send?phone=${caso.whatsapp}&text=${msg}`);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}> 
                <Image source={logoImg}/>
                <TouchableOpacity style={styles.detailButton} onPress={navToCasos}>
                    <Text style={styles.detailButtonText}>Voltar a listagem</Text>
                    <Feather name="arrow-left" size={28} color="#E02041"/>
                </TouchableOpacity>
            </View>
            <View style={styles.caso}>
                <Text style={[styles.casoProp,{marginTop:0}]}>Ong:</Text>
                <Text style={styles.casoValue}>{caso.name}</Text>

                <Text style={styles.casoProp}>Caso:</Text>
                <Text style={styles.casoValue}>{caso.title}</Text>

                <Text style={styles.casoProp}>Descrição:</Text>
                <Text style={styles.casoValue}>{caso.description}</Text>

                <Text style={styles.casoProp}>Valor:</Text>
                <Text style={styles.casoValue}>
                    {Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'})
                        .format(caso.value)}
                    </Text>
            </View>
            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>
                <Text style={styles.heroDesc}>Entre em Contato:</Text>
                <View style={styles.actions}>

                <TouchableOpacity style={styles.action} onPress={sendZap}>
                    <Text style={styles.actionText}>Whatsapp</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.action} onPress={sendMail}>
                    <Text style={styles.actionText}>E-mail </Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>

    );
}