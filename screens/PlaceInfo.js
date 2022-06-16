import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, Alert,ActivityIndicator} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import lugarInfo from '../lugarInfo';
import { useState } from 'react';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import lugar from '../lugarInfo';

const lugaresData = "https://raw.githubusercontent.com/FrancoGuzman5/PRMCL/master/lugarInfo.json?token=GHSAT0AAAAAABUGF2WZFYBZFRQWQHNJVIECYVKW7LQ";

const PlacesInfo = ({route, navigation}) => { 
    const {lugares} = route.params;
    const [isLoading, setLoading] = useState(true);
    const placeName = JSON.stringify(lugares);

    const Foto = ({park}) => {
        if (park.nombre === placeName){
        return <View style={styles.fotoContainer}>
            <View style={{alignItems: 'flex-end'}}>
                <View>
                    <AntDesign name="heart" size={24} color="black" />
                </View>
            </View>
            <View >
                <Text>{park.nombre}</Text>
                <Text>{park.id}</Text>
                <Text>{park.region}</Text>
                
            </View>
        </View>
        }
    }

    return (
        <ScrollView style={styles.container}>
            
                <View style={styles.header}>
                    <Ionicons style={styles.backArrow} name="arrow-back" size={32} color="black" onPress={()=>navigation.goBack()}/>
                </View>
                
                <View style={styles.nombreContainer}>
                    <Text style={styles.nombreLugar}>{placeName}</Text>  
                </View>
                {lugarInfo.map(({nombre,id,descripcion,horarios,tarifas,senderos,servicios,accesos,fase})=>{
                    return(
                        <View>
                            {nombre === lugares &&
                            <View>
                                <Text key={nombre}>{nombre}</Text>
                                <Text key={id}>{id}</Text>
                                <Text key={descripcion}>{descripcion}</Text>
                                <Text key={horarios}>{horarios}</Text>
                                <Text key={tarifas}>{tarifas}</Text>
                                <Text key={senderos}>{senderos}</Text>
                                <Text key={servicios}>{servicios}</Text>
                                <Text key={accesos}>{accesos}</Text>
                                <Text key={fase}>{fase}</Text>
                            </View>
                            }
                        </View>
                    )
                    
                })}

        </ScrollView>
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
        alignItems: 'center',
        position: 'relative'
    },
    nombreLugar:{
        alignContent: 'center',
        alignItems: 'center',
        color:'white',
        backgroundColor:'black'
    },
    fotoContainer:{
        height:350,
        width:'100%',
        backgroundColor: 'gray',
        marginVertical: 1,
        color:'white'
    }
})

export default PlacesInfo;

/*                        <FlatList 
                            numColumns={1} 
                            data={lugarInfo} 
                            renderItem={({item})=> <Foto park={item}/>} 
                        />  
*/