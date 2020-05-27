import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex :1,
        paddingHorizontal:24,
        paddingTop:Constants.statusBarHeight+20,
    },
    header:{
        flexDirection:'row',
        justifyContent :'space-between',
        alignItems:'center'
    },
    title : {
        fontSize:30,
        marginBottom:16,
        marginTop:48,
        color:'#13131a',
        fontWeight:'bold'
    },
    description: {
        fontSize:16,
        lineHeight:24,
        color:'#737380'
    },
    headerText:{
        fontSize:15,
        color:'#737380'
    },
    headerTextBold:{
        fontWeight:'bold'
    },
    caso :{
        padding:24,
        borderRadius:8,
        backgroundColor:'#fff',
        marginBottom:16
    },
    casoProp: {
        marginTop:14,
        fontSize:14,
        color:'#41414d',
        fontWeight:'bold'
    },
    casoValue:{
        marginTop: 2,
        fontSize:15,
        color:'#737380'
    },
    detailButton:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    detailButtonText:{
        color:'#e02041',
        fontSize:15,
        fontWeight:'bold'
    },
    contactBox :{
        padding:24,
        borderRadius:8,
        backgroundColor:'#fff',
        marginBottom:16
    },
    heroTitle:{
        fontWeight:'bold',
        fontSize:20,
        color:'#13131a',
        lineHeight:30
    },
    heroDesc:{
        fontSize:15,
        color:'#737380',
        marginTop:16
    },
    actions:{
        marginTop:16,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    action:{
        backgroundColor:'#e02041',
        borderRadius:8,
        height:50,
        width:'48%',
        justifyContent:'center',
        alignItems:'center'
    },
    actionText:{
        color:'#fff',
        fontSize:15,
        fontWeight:'bold'
    }
});