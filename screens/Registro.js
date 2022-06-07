import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Button, ScrollView, TextInput, Image, ActivityIndicator} from 'react-native';
import { ImageBackground } from 'react-native';
import firebase from '../database/firebase';

const Registro = (props) => { 

    const [state, setState] = useState({
        name: '',
        email: '',
        password: '',
        rePassword: '',
    });

    const handleChangeText = (name, value) => {
        setState({...state, [name]:value })
    }


    const guardarUsuario = async () => {
        if (state.name === '' || state.email === '' || 
        state.password === '' || state.rePassword === ''){
            alert('Rellene todos los campos porfavor')
        }else {
            try{
                await firebase.db.collection('users').add({
                    name: state.name,
                    email: state.email,
                    password: state.password,
                    rePassword: state.rePassword,
                })
                props.navigation.navigate('Login')
            } catch (error) {
                console.log(error);
            }    
        }
    }

    return (
        <ImageBackground source={require('../assets/fondoRegistro.jpg')} style={styles.backgroundImage}>    
    
        <ScrollView style={styles.container}>

                <Text style={styles.titleGroup}>Regístrate</Text>    

                <View style={styles.inputGroup}>
                    <Text style={styles.textGroup}>Nombre</Text>
                    <TextInput placeholder="Ingrese su nombre" 
                    onChangeText={(value) => handleChangeText('name', value)} ></TextInput>
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.textGroup}>Email</Text>
                    <TextInput placeholder="Ejemplo@gmail.com" 
                    onChangeText={(value) => handleChangeText('email', value)}></TextInput>
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.textGroup}>Contraseña</Text>
                    <TextInput placeholder="Ingrese su contraseña" secureTextEntry={true}
                    onChangeText={(value) => handleChangeText('password', value)}></TextInput>
                </View>
                <View>
                    <TouchableOpacity style={styles.button} onPress={()=> guardarUsuario() }>
                        <Text style={styles.buttonText}>Registrate</Text>
                    </TouchableOpacity>    
                </View>
                <View>
                    <Text style={styles.textoTerminos}>Al registrarse estás aceptando los Terminos y condiciones del servicio</Text>
                </View>
                <View>
                    <Text style={styles.haveAccount} onPress={()=>props.navigation.navigate('Login')}>¿Ya tienes una cuenta? Ingresa aquí.</Text>
                </View>
        </ScrollView>
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    container: {

        flex: 1,
        padding: 35,
    },
    
    inputGroup: {
        marginBottom: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    },
    textGroup: {
        fontWeight: 'bold',
        color: '#ff6624',
    },
    titleGroup: {
        marginTop: 50,
        textAlign: 'center',
        fontSize: 27,
        paddingBottom: 40,
        marginBottom:20,

    },
    backgroundImage: {
        
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',

    },
    button:{
        backgroundColor: '#72bb53',
        width: 280,
        height: 48,
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 30
    },
    buttonText:{
        color: 'white',
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: 13
    },
    textoTerminos: {
        marginTop: 25,
        textAlign:'center',
        fontStyle: 'italic',    
        fontWeight: 'bold',
        color:'#818181'
    },
    haveAccount: {
        textAlign: 'center',
        marginTop: 40,
        color: '#056908'
    }

})

export default Registro 