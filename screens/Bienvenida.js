import { color } from '@rneui/base';
import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Button, ScrollView, TextInput, Image, ActivityIndicator} from 'react-native';
import { ImageBackground } from 'react-native';
import firebase from '../database/firebase';

const Bienvenida = (props) => { 
    return (
        <View>
            <TouchableOpacity style={styles.toLogin} onPress={()=> props.navigation.navigate('Login')}>
                <Text >Bienvenida</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    toLogin: {
        alignItems: 'center',
        alignContent: 'center',
        marginTop: 300
    }
})

export default Bienvenida

