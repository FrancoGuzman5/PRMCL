import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import * as Location from 'expo-location';
import data from '../data'

const MapScreen = (props) => { 

    const [origin, setOrigin] = React.useState({
      latitude: -33.471611, 
      longitude: -71.1712597
    })

    const [destination, setDestination] = React.useState({
      latitude:-18.635935893598052, 
      longitude: -69.20549320893618
    })


    React.useEffect(() => {
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
            <MapView 
            style={styles.map} 
            initialRegion={{
              latitude: origin.latitude,
              longitude: origin.longitude,
              latitudeDelta: 0.09,
              longitudeDelta: 0.04
            }}>
              <Marker
                coordinate={origin}
              />
              <Marker
                coordinate={destination}
              />  
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