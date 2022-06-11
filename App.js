//Comienzo de app
import { Logs } from 'expo';
import { StatusBar } from "expo-status-bar";
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Button, ScrollView, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialCommunityIcons } from '@expo/vector-icons';


//Pantallas de la app por orden
import Bienvenida from './screens/Bienvenida.js'
import Registro from './screens/Registro.js'
import Login from './screens/Login.js'
import Inicio from './screens/Inicio.js'
import PlaceInfo from './screens/PlaceInfo.js'
import MapScreen from './screens/MapScreen.js'
import FavoritePlaces from './screens/FavoritePlaces.js'

Logs.disableExpoCliLogging(); //solucion a un error de despliegue en Android Studio


const Stack = createStackNavigator();

//Pantallas ordenadas por orden de muestra, es decir, visualización
function MyStack(){
  return (
    <Stack.Navigator>
      <Stack.Screen 
      name="Bienvenida" 
      component={Bienvenida} 
      options={{headerShown:false}}
      />
      <Stack.Screen 
      name="Login" 
      component={Login} 
      options={{headerShown:false}}
      />
      <Stack.Screen 
      name="Registro" 
      component={Registro} 
      options={{headerShown:false}}
      />
      <Stack.Screen 
      name="Inicio" 
      component={MyTabs} 
      options={{}}
      />
      <Stack.Screen 
      name="PlaceInfo" 
      component={PlaceInfo} 
      />
    </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return(
        <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#72bb53',
        }}
        >
            <Tab.Screen 
            
            name = 'Inicio' 
            component={Inicio} 
            options={{
              headerShown:false,
              tabBarIcon: ({color,size}) => {
                return <MaterialCommunityIcons name="home" size={24} color={color} />
              }
            }}
            />
            <Tab.Screen 
            name = 'MapScreen' 
            component={MapScreen} 
            options={{
              headerShown:false,
              tabBarIcon: ({color,size}) => {
                return <MaterialCommunityIcons name="map" size={24} color={color} />
              }
            }}
            />
            <Tab.Screen 
            name = 'Favoritos' 
            component={FavoritePlaces} 
            options={{
              headerShown:false,
              tabBarIcon: ({color,size}) => {
                return <MaterialCommunityIcons name="cards-heart" size={24} color={color} />
              }
            }}
            />
        </Tab.Navigator>
    )
}
export {MyTabs}

export default function App(){

  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);

  useEffect(()=>{
    AsyncStorage.getItem('alreadyLaunched').then(value =>{
      if(value == null){
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    })
  }, []);

if (isFirstLaunch === null) {
  return null;
} else if ( isFirstLaunch === true) {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
} else {
  <Inicio/>
}

  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}


 