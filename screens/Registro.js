import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { Button, ScrollView, TextInput } from 'react-native-web';

const Registro = () => { 

    const [state, setState] = useState({
        name: '',
        email: '',
        password: '',
        rePassword: '',
    });

    const handleChangeText = (name, value) => {
        setState({...state, [name]:value })
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Ingrese su nombre" 
                onChangeText={(value) => handleChangeText('name', value)} ></TextInput>
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Ingrese su correo electrónico" 
                onChangeText={(value) => handleChangeText('email', value)}></TextInput>
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Ingrese su contraseña"
                onChangeText={(value) => handleChangeText('password', value)}></TextInput>
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Reingrese su contraseña"
                onChangeText={(value) => handleChangeText('rePassword', value)}></TextInput>
            </View>
            <View>
                <Button title=" Registrarse" onPress={()=> console.log(state)} />
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
    },
    
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    }
})

export default Registro 