import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const PlacesInfo = ({navigation, route}) => { 
    const lugar = route.params;
    console.log(lugar);
    return (
        <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
            <View style={styles.header}></View>
            <Ionicons style={styles.backArrow} name="arrow-back" size={32} color="black" onPress={()=>navigation.goBack()}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingHorizontal:20,
        marginTop:20,
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    backArrow:{
        marginHorizontal:10,
    }
})

export default PlacesInfo;