import React from "react";
import { Text, View, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Despliegue presentación avance.....</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
      flex: 1,
      justifyContent: "center", 
      alignItems: "center" 
    },

  title: { 
      fontsize: 30 
    },
});
export default App;
