import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

const MapScreen = () => { 
    return (
        <View>
            <MapView style={styles.map}/>
        </View>
    )
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%'
    }
})

export default MapScreen