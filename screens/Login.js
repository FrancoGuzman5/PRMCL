import { color } from '@rneui/base';
import React, {useContext, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Button, ScrollView, TextInput, Image, ActivityIndicator} from 'react-native';
import { ImageBackground } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import firebase, { auth } from '../database/firebase';

const Login = (props) => { 

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    useEffect(()=>{
        const noRegistrado =
        auth.onAuthStateChanged(user =>{
            if (!user){
                props.navigation.navigate('Login')
            }else{
                props.navigation.replace('Inicio')
            }
        })

        return noRegistrado
    }, [])

    const handleLogin = () => {
        auth
        .signInWithEmailAndPassword(email,password)
        .then(userCredentials => {
            props.navigation.replace('Inicio')
            const user = userCredentials.user;
            console.log('Logeado con ', user.email);
        })
        .catch(error => alert(error.message))
    }

    return (
        <ImageBackground source={require('../assets/fondoRegistro.jpg')} style={styles.backgroundImage}>    
    
        <KeyboardAvoidingView style={styles.container}>

                <Text style={styles.titleGroup}>Inicia Sesión</Text>   
                <View style={styles.inputGroup}>
                    <Text style={styles.textGroup}>Email</Text>
                    <TextInput 
                    placeholder="Ejemplo@gmail.com" 
                    value={email}
                    onChangeText={text =>setEmail(text)}
                    />
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.textGroup}>Contraseña</Text>
                    <TextInput 
                    placeholder="Ingrese su contraseña" 
                    secureTextEntry={true}
                    value={password}
                    onChangeText={text => setPassword(text)}
                    />
                </View>
                <View>
                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Continuar</Text>
                    </TouchableOpacity>    
                </View>
                <View>
                    <Text style={styles.forgotPass}>¿Olvidaste tu contraseña?</Text>
                </View>
                <View>
                    <Text style={styles.creaCuenta} onPress={()=> props.navigation.navigate('Registro')}>¿Eres nuevo? Crea una cuenta!</Text>
                </View>

        </KeyboardAvoidingView>
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
        color: '#056908'
    }
})

export default Login 