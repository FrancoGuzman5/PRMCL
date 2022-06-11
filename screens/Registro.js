import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Button, ScrollView, TextInput, Image, ActivityIndicator, Alert} from 'react-native';
import { ImageBackground } from 'react-native';
import {auth} from '../database/firebase'

const Registro = (props) => { 

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignUp = () =>{
        if (email === ''){
            Alert.alert('Ingresa un email','Prueba ingresando un correo electrónico cualquiera')
        }else if(!email.match((/(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i))){
            Alert.alert('Ingrese un email válido','Guíese con el ejemplo:\n-ejemplo@gmail.com')
        }else{
        
        
        
            auth
        .createUserWithEmailAndPassword(email,password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log(user.email);
            props.navigation.navigate('Login')
        })
        .catch(error => alert(error.message))
    }
    }


    /*const guardarUsuario = async () => {
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
    }*/

    return (
        <ImageBackground source={require('../assets/fondoRegistro.jpg')} style={styles.backgroundImage}>    
    
        <ScrollView style={styles.container}>

                <Text style={styles.titleGroup}>Regístrate</Text>    

                <View style={styles.inputGroup}>
                    <Text style={styles.textGroup}>Email</Text>
                    <TextInput placeholder="Ejemplo@gmail.com" 
                    value={email}
                    onChangeText={text =>setEmail(text)}
                    ></TextInput>
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.textGroup}>Contraseña</Text>
                    <TextInput placeholder="Ingrese su contraseña" secureTextEntry={true}
                    value={password}
                    onChangeText={text => setPassword(text)}
                    ></TextInput>
                </View>
                <View>
                    <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                        <Text style={styles.buttonText}>Registrate</Text>
                    </TouchableOpacity>    
                </View>
                <View>
                    <Text style={styles.textoTerminos}>Al registrarse estás aceptando los Terminos y condiciones del servicio</Text>
                </View>
                <View>
                    <Text style={styles.haveAccount} onPress={()=>props.navigation.replace('Login')}>¿Ya tienes una cuenta? Ingresa aquí.</Text>
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