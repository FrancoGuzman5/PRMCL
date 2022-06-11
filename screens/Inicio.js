import React, {useRef}from 'react';
import {SafeAreaView, StyleSheet, View, Text, ScrollView, TouchableOpacity} from 'react-native';
import data from '../data';


const Inicio = () => { 

    const [currentIndex, setCurrentIndex] = React.useState(null);

    return (
        <ScrollView
        >
            <View style={styles.container}>
                {data.map(({bg, color, category, places}, index)=>{
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
                                {category}
                            </Text>
                            {index === currentIndex && <View style={styles.lugaresContainer}>
                                {places.map((places) => (
                                    <TouchableOpacity 
                                    key={places} 
                                    style={styles.lugar}
                                    >
                                        <Text 
                                        style={styles.nombreLugar}>
                                            ►{places}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </View>}
                        </View>
                    </TouchableOpacity>
                    );
                })}
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
    },
    cardContainer:{
        flexGrow:1,
        marginTop:2,
        marginBottom: 2,
    },
    card:{
        flex: 1,
    },
    region: {
        fontSize: 28,
        fontWeight: '900',
        letterSpacing: -2.5,
        marginHorizontal: 5,
    },
    nombreLugar:{
        color:'#5B4D4D',
        marginHorizontal: 5,
        letterSpacing: 1,
        marginVertical: 5,
        fontWeight:'bold',
    },
    lugar:{
        backgroundColor:'#ECECEC',
        padding:8,
        marginVertical: 3,
        borderBottomStartRadius: 20,
        borderBottomEndRadius:20,
    }
});

export default Inicio