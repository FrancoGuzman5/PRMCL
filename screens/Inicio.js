import * as React from 'react';
import {SafeAreaView, StyleSheet, View, Text, ScrollView, TouchableOpacity, Alert} from 'react-native';
import data from '../data';
import lugar from '../lugarInfo';

const Inicio = ({navigation}) => { 

    const [currentIndex, setCurrentIndex] = React.useState(null);



    return (
        <ScrollView
        >
                <View style={styles.container}>
                    
                    {data.map(({bg, color, category,places,id}, index)=>{
                        return (
                        <TouchableOpacity 
                        key={category} 
                        onPress={()=>{
                            //ref.current.animateNextTransition();
                            setCurrentIndex(index === currentIndex ? null : index)
                        }} 
                        style={styles.cardContainer}
                        activeOpacity={0.5}
                        >
                            <View style={[styles.card,{backgroundColor: bg}]}>
                                <Text 
                                    style={[styles.region,{color}]}> 
                                ►{category}
                                </Text>
                                {index === currentIndex &&  
                                    <View style={styles.lugaresContainer}>
                                        {places.map((places)=>(
                                            <TouchableOpacity 
                                                key={places}                            
                                                style={styles.lugar}
                                                onPress={()=>{                                        
                                                    navigation.navigate("PlaceInfo",
                                                    {lugares: places});                                                  
                                                }}
                                            >
                                                <Text 
                                                key={places}
                                                style={styles.nombreLugar}
                                                >
                                                    ► {places}
                                                </Text>
                                            </TouchableOpacity>
                                            ))}
                                    </View>
                                }
                            </View>
                        </TouchableOpacity>
                        );
                        
                    })}
                </View> 
        </ScrollView>
    )
}

const Lugares = ({item}) => {
    return <View style={styles.lugares}>

    </View>
}

const styles = StyleSheet.create({
    container:{
        flexGrow:1,
        justifyContent: 'center',
    },
    cardContainer:{
        flexGrow:1,
        
        marginTop:2,
        marginBottom: 2,
    },
    card:{
        flex: 1,
        paddingVertical:4,
    },
    region: {
        fontSize: 28,
        fontWeight: '900',
        letterSpacing: -2.0,
        paddingVertical: 5,
        marginHorizontal: 5,
    },
    nombreLugar:{
        color:'#5B4D4D',
        marginHorizontal: 5,
        letterSpacing: 1,
        paddingLeft:5,
        marginVertical: 5,
        fontWeight:'bold',
    },
    lugar:{
        backgroundColor:'#ECECEC',
        padding:8,
        marginVertical: 2,
        borderBottomStartRadius: 40,
        borderBottomEndRadius:20,
    },
    lugares:{

    }
});

export default Inicio