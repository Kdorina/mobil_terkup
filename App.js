import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

export default function App() {
  const[radius, setRadius] = useState('');
  const[height, setHeight] = useState(''); 
  const[volume, setVolume] = useState(''); 

  function calcVolume(){
    // console.log('Működik');
    let result = 1/3*Math.pow(radius, 2)*Math.PI*height;
    // console.log(result);
    setVolume(result);
  }
  return (
    <View style={styles.container}>
    <Text  style={styles.aboutTitle}>Kovács Dorina, Szoft II/N , 2023-02-27</Text>
      <Text style={styles.titles}>0301 Feladat</Text>
      <Text style={styles.titles}>Számítsa ki egy kör alapú kúp térfogatát!</Text>

      <Text>Sugár</Text>
      <TextInput  style={styles.inputField} onChangeText={ (data) => setRadius(data) }></TextInput>

      <Text>Magasság</Text>
      <TextInput style={styles.inputField} onChangeText={ (data) => setHeight(data) }></TextInput>

      <TouchableHighlight style={styles.calcBtn} onPress={calcVolume}>
      <Text style={styles.titleBtn}>Számít</Text>
      </TouchableHighlight>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BEF1FF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  aboutTitle: {
    backgroundColor: '#D7F8FF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20
  },

  titles: {
 
  },

  inputField:{
    margin: 10,
    padding: 5,
    borderRadius:10,
    width: '90%',
    height: 30,
    backgroundColor: 'white',
    
  },

  calcBtn:{
    margin: 5,
    backgroundColor:"#D7FF46",
    borderRadius: 120,
    padding: 10,
    width: '30%',
    textAlign: "center",
  },

  titleBtn:{
    fontWeight: 500
  }
});
