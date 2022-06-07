import { color } from '@rneui/base';
import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Button, ScrollView, TextInput, Image, ActivityIndicator} from 'react-native';
import { ImageBackground } from 'react-native';
import firebase from '../database/firebase';

const Login = (props) => { 

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
                props.navigation.navigate('Registro')
            } catch (error) {
                console.log(error);
            }    
        }
    }

    return (
        <ImageBackground source={require('../assets/fondoRegistro.jpg')} style={styles.backgroundImage}>    
    
        <ScrollView style={styles.container}>

                <Text style={styles.titleGroup}>Inicia Sesión</Text>   
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
                    <TouchableOpacity style={styles.button} onPress={()=> props.navigation.navigate('Inicio') }>
                        <Text style={styles.buttonText}>Continuar</Text>
                    </TouchableOpacity>    
                </View>
                <View>
                    <Text style={styles.forgotPass}>¿Olvidaste tu contraseña?</Text>
                </View>
                <View>
                    <Text style={styles.creaCuenta} onPress={()=> props.navigation.navigate('Registro')}>¿Eres nuevo? Crea una cuenta!</Text>
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
        borderBottomColor: '#cccccc',
        marginTop: 10
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
    forgotPass: {
        marginTop: 50,
        textAlign:'center',
        fontStyle: 'italic',    
        fontWeight: 'bold',
        color:'#818181',
        marginBottom: 40
    },
    creaCuenta: {
        textAlign: 'center',
        color: '#0D8211'
    }
})

export default Login 