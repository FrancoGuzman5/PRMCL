import React, {useState} from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert, Image } from "react-native";
import * as ImagePicker from 'expo-image-picker'
import * as Sharing from 'expo-sharing'

const App = () => {

  const [selectedImage, setSelectedImage] = useState(null)
  
  let openImagePickerAsync = async () => {
    let resultadoPermiso = await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (resultadoPermiso.granted == false){
      alert('Permiso para acceder a la cámara es requerido');
      return;
    }
    const pickerResult = await ImagePicker.launchImageLibraryAsync()
    if (pickerResult.cancelled === true){
      return;
    }

    setSelectedImage({localUri: pickerResult.uri});

  }

  const openShareDialog = async() => {
    if (!(await Sharing.isAvailableAsync())) {
      alert('Compartir, no esta disponible en tu plataforma')
    return;
    }
    await Sharing.shareAsync(selectedImage.localUri);
  }


  

  return (
    <View style={styles.container}>
      <Text> Despliegue presentación avance.....</Text>
      <TouchableOpacity
      onPress={openImagePickerAsync}>
      <Image 
        source={{
          uri:
            selectedImage !== null
            ? selectedImage.localUri
            : 'https://picsum.photos/200/200'
          }}
        style={styles.image}  
      /> 
      </TouchableOpacity> 
      {
        selectedImage ?
        <TouchableOpacity onPress={openShareDialog}
      style={styles.button}
      >
         <Text style={styles.buttonText}>
           Compartir!</Text>
      </TouchableOpacity>
      :
      <View/>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
      flex: 1,
      justifyContent: "center", 
      alignItems: "center",
      backgroundColor: 'lightgray',  
    },
  image: {
    height: 200, 
    width: 200,
    borderRadius: 100,
    resizeMode: 'contain'
  },
  button: {
    backgroundColor: 'lightgreen',
    padding: 7,
    marginTop: 10
  },
  buttonText: {
    color: 'darkgreen'
    

  }

});
export default App;
