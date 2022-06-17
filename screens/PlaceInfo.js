import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, Alert,ActivityIndicator} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import lugarInfo from '../lugarInfo';
import { useState } from 'react';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { List } from 'react-native-paper';
import { Icon } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import lugar from '../lugarInfo';


const lugaresData = "https://raw.githubusercontent.com/FrancoGuzman5/PRMCL/master/lugarInfo.json?token=GHSAT0AAAAAABUGF2WZFYBZFRQWQHNJVIECYVKW7LQ";

const PlacesInfo = ({route, navigation}) => { 
    const {lugares} = route.params;
    const placeName = JSON.stringify(lugares);

    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    return (
        <ScrollView style={styles.container}>           
                <View style={styles.header}>
                    <Ionicons style={styles.backArrow} name="arrow-back" size={32} color="black" onPress={()=>navigation.goBack()}/>
                </View>
                {lugarInfo.map(({nombre,id,descripcion,horarios,tarifas,senderos,servicios,accesos,fase,img})=>{
                    return(
                        <View>
                            {nombre === lugares &&
                            <View>
                                <Image key={img} source={{uri:img}} style={styles.fotoContainer}/>
                                <View>
                                    <View style={styles.nombreContainer}>
                                        <Text key={nombre} style={styles.nombreLugar}>{nombre}</Text>
                                        
                                    </View>
                                    <Text key={descripcion} style={styles.descLugar}>{descripcion}</Text>
                                    <List.Section title="Información del parque">
                                        <List.Accordion
                                            title="Horarios"
                                            left={props => <List.Icon {...props} icon="clock-time-three-outline" />}>
                                            <Text key={horarios}>{horarios}</Text>
                                        </List.Accordion>
                                        <List.Accordion
                                            title="Tarifas"
                                            left={props => <List.Icon {...props} icon="cash" />}>
                                            <Text key={tarifas}>{tarifas}</Text>
                                        </List.Accordion>
                                        <List.Accordion
                                            title="Senderos"
                                            left={props => <List.Icon {...props} icon="pine-tree" />}>
                                            <Text key={senderos}>{senderos}</Text>
                                        </List.Accordion>
                                        <List.Accordion
                                            title="Servicios"
                                            left={props => <List.Icon {...props} icon="account" />}>
                                            <Text key={servicios}>{servicios}</Text>
                                        </List.Accordion>
                                        <List.Accordion
                                            title="Accesos"
                                            left={props => <List.Icon {...props} icon="road" />}>
                                            <Text key={accesos}>►{accesos}</Text>
                                        </List.Accordion>
                                        <List.Accordion
                                            title="Fase"
                                            left={props => <List.Icon {...props} icon="alert" />}>
                                            <Text key={fase}>{fase}</Text>
                                        </List.Accordion>
                                    </List.Section>

                                </View>
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
        position: 'relative'
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
        paddingHorizontal:10,
        marginTop: 10,
        marginBottom:10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    nombreLugar:{
        color: '#355723',
        fontSize: 22,

    },
    fotoContainer:{
        width:'100%', 
        height:250
    },
    descLugar:{
        paddingHorizontal:10,
        marginBottom:20,
    }
})

export default PlacesInfo;

/*                        <FlatList 
                            numColumns={1} 
                            data={lugarInfo} 
                            renderItem={({item})=> <Foto park={item}/>} 
                        />  
*/