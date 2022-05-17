import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Login = () => { 
    return (
        <ScrollView >
            <View /*style={styles.inputGroup}*/>
                <TextInput placeholder="Ingrese su correo electrónico"></TextInput>
            </View>
            <View /*style={styles.inputGroup}*/>
                <TextInput placeholder="Ingrese su contraseña"></TextInput>
            </View>
            <View>
                <Button title="Iniciar Sesión"/>
            </View>
        </ScrollView>
    )
}

export default Login 