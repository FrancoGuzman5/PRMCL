import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, Alert} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import lugarInfo from '../lugarInfo';

import { color } from '@rneui/base';

const PlacesInfo = ({route, navigation}) => { 
    const {lugares} = route.params;
    //const places = route.params;
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Ionicons style={styles.backArrow} name="arrow-back" size={32} color="black" onPress={()=>navigation.goBack()}/>
            </View>
            <View style={styles.nombreContainer}>
                <Text style={styles.nombreLugar}>{JSON.stringify(lugares)}</Text>  
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor:'white'
    },
    header: {
        paddingHorizontal:20,
        marginTop:20,
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    backArrow:{
        marginHorizontal:5,
        marginVertical:10,
    },
    imageContainer:{
        flex: 0.45,
        marginTop: 20,
        justifyContent: 'center',
        alignItems:'center'
    },
    imagen:{
        resizeMode: "contain",
        flex:1,
        width:'80%',
        height: '35%'
    },
    nombreContainer:{
        alignContent: 'center',
        alignItems: 'center'
    },
    nombreLugar:{
        alignContent: 'center',
        alignItems: 'center',
        color:'white',
        backgroundColor:'black'
    }
})

export default PlacesInfo;