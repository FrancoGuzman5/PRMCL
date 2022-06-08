import { color } from '@rneui/base';
import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Button, ScrollView, TextInput, Image, ActivityIndicator} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';


const Skip = ({... props}) => (
    <TouchableOpacity {... props}>
        <Text style={styles.skip}>Saltar</Text>
    </TouchableOpacity>
)

const Next = ({... props}) => (
    <TouchableOpacity {... props}>
        <Text style={styles.next}>Siguiente</Text>
    </TouchableOpacity>
)

const Done = ({... props}) => (
    <TouchableOpacity {... props}>
        <Text style={styles.done}>Listo</Text>
    </TouchableOpacity>
)

const Bienvenida = ({navigation}) => { 
    return (
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        onSkip={() => navigation.replace('Login')}
        onDone={() => navigation.replace('Login')}
        pages={[
            {
                backgroundColor: '#81D1A1',
                image: <Image source={require('../assets/icono1.png')} />,
                title: '¡Visita lugares únicos!',
                subtitle: 'Conoce parques, reservas y monumentos nacionales',
            },
            {
                backgroundColor: '#68ADDA',
                image: <Image source={require('../assets/icono2.png')} />,
                title: 'Organiza un viaje seguro',
                subtitle: 'Revisa toda la información disponible de cada lugar antes de partir',
            },
            {
                backgroundColor: '#D18189',
                image: <Image source={require('../assets/icono3.png')} />,
                title: 'Busca tu próximo destino',
                subtitle: 'Infórmate acerca del lugar que visitarás, también puedes ver su ubicación :)',
            },
            {
                backgroundColor: '#8189D1',
                image: <Image source={require('../assets/icono4.png')} />,
                title: 'Respeta la naturaleza',
                subtitle: 'No invadas espacios naturales ni te salgas del sendero demarcado',
            },
            {
                backgroundColor: '#A181D1',
                image: <Image source={require('../assets/icono5.png')} />,
                title: 'La basura NO vuelve sola',
                subtitle: 'Llevala siempre contigo hasta que encuentres un lugar designado',
            },
        ]}
        />
    )
}


const styles = StyleSheet.create({
    toLogin: {
        alignItems: 'center',
        alignContent: 'center',
        marginTop: 300
    },
    skip: {
        marginHorizontal: 20,
        color: 'white'
    },
    next: {
        marginHorizontal: 20,
        color: 'white'
    },
    done: {
        marginHorizontal: 20,
        color: 'white'
    }
})

export default Bienvenida

