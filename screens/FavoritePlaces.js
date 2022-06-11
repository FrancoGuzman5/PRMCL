import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {Thumbnail} from 'native-base'

const FavoritePlaces = (props) => { 

    renderEmptyContainer=()=>{
        return <View style={styles.emptyList}>
            <Text>La lista está vacía</Text>
        </View>
    }

    renderRow=({item})=>{
        return <View style={styles.rowStyle}>
            <Thumbnail style={styles.imageThumbnail} source={{uri:item.url}}/>
        </View>
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={props.FavoritePlaces}
                renderItem={this.renderItemRow}
                keyExtractor={(i) => i.id}
                numColumns={2}
                ListEmptyComponent={this.renderEmptyContainer()}
            />
                
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        flex: 1,
    },
    rowStyle:{
        flex:1,
        flexDirection: 'column',
        margin:1
    },
    imageThumbnail:{
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%',
        height:600,
    },
    emptyList:{
        marginTop: 100,
        justifyContent: 'center',
        alignItems:'center'
    }
})

export default FavoritePlaces