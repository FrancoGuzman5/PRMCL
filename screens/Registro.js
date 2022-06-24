import React, {useContext, useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Button, ScrollView, TextInput, Image, ActivityIndicator, Alert} from 'react-native';
import { ImageBackground } from 'react-native';
import {auth} from '../database/firebase'
import { Ionicons } from '@expo/vector-icons';

const Registro = (props) => { 

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [isSecure, setIsSecure] = useState(true)
    const [isSecureSec, setIsSecureSec] = useState(true)

    

    const handleSignUp = () =>{
        var emailValido = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var passValida = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*.,?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,16}$/;
        if (email.length == 0 || email === null){
            Alert.alert('Ingresa un email','Prueba ingresando un correo electrónico cualquiera')
        }else if(!email.match(emailValido)){ 
            Alert.alert('Ingrese un email válido','Guíese con el ejemplo:\n-ejemplo@gmail.com')
        }else if (password.length == 0 || password === null){
            Alert.alert('Ingrese una contraseña, porfavor')
        }else if(password.length < 8){
            Alert.alert('Contraseña inválida','La contraseña debe tener 8 caracteres como mínimo y 16 como máximo')
        }else if(!password.match(passValida)){
            Alert.alert('Contraseña inválida','Debe contener al menos una letra mayúscula \nuna letra minúscula \nal menos un dígito \nun caracter especial o símbolo \nningún espacio en blanco')
        }else if(password !== rePassword){
            Alert.alert('Las contraseñas no coinciden')
        }else{
            auth
            .createUserWithEmailAndPassword(email,password)
            .then({props},userCredentials => {
                const user = userCredentials.user;
                props.navigation.replace('Login')
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
                    <View style={styles.passCamp}>
                        <TextInput placeholder="Ingrese su contraseña" secureTextEntry={isSecure}
                        value={password}
                        onChangeText={text => setPassword(text)}
                        ></TextInput>
                        <TouchableOpacity onPress={()=>{
                            setIsSecure((prev)=>!prev)
                        }}>
                            <Text style={styles.show}>{isSecure ? 'Mostrar' : 'Ocultar'}</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.textGroup}>Repita su contraseña</Text>
                    <View style={styles.passCamp}>
                        <TextInput placeholder="Reingrese su contraseña" secureTextEntry={isSecureSec}
                        value={rePassword}
                        onChangeText={text => setRePassword(text)}
                        ></TextInput>
                        <TouchableOpacity onPress={()=>{
                            setIsSecureSec((prev)=>!prev)
                        }}>
                            <Text style={styles.show}>{isSecureSec ? 'Mostrar' : 'Ocultar'}</Text>
                        </TouchableOpacity>
                    </View>
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
    show:{
        color: '#808080'
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
    passCamp:{
        flexDirection: 'row',
        justifyContent: 'space-between'
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