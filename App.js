//Comienzo de app
import { Logs } from 'expo';
import { StatusBar } from "expo-status-bar";
import React from 'react';
import {StyleSheet, Text, View, Button, ScrollView, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



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
      name="Inicio" 
      component={MyTabs} 
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
      name="PlaceInfo" 
      component={PlaceInfo} 
      options={{headerShown:false}}
      />
    </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return(
        <Tab.Navigator
        >
            <Tab.Screen 
            name = 'Inicio' 
            component={Inicio} 
            options={{headerShown:false}}
            />
            <Tab.Screen 
            name = 'MapScreen' 
            component={MapScreen} 
            options={{headerShown:false}}
            />
            <Tab.Screen 
            name = 'Favoritos' 
            component={FavoritePlaces} 
            options={{headerShown:false}}
            />
        </Tab.Navigator>
    )
}
export {MyTabs}

export default function App(){
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}


 