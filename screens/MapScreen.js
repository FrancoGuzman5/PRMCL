import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import * as Location from 'expo-location';
import data from '../data'

const MapScreen = (props) => { 

    const [errorMsg, setErrorMsg] = useState(null);
    const [mapRegion, setMapRegion] = useState(null);


    useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setMapRegion({
            longitude: location.coords.longitude,
            latitude: location.coords.latitude,
            longitudeDelta: 0.0922,
            latitudeDelta: 0.0421
          })
        })();
      }, []);

    return (
        <View>
            <MapView style={styles.map} initialRegion={mapRegion}>
            </MapView>
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