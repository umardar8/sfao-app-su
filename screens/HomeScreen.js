import * as React from 'react';
import { View, Image, Pressable, Text, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  // First Screen of SFAO App
  return (
  <View style={{flex: 1, flexDirection:'vertical'}}>
    <Image source={require('../assets/sfao-logo.png')} alignSelf='center' resizeMode='cover' style={styles.image}/>
    <Text style={styles.text}>Little Lemon, Your Local Mediterranean Bistro</Text>
    <Pressable onPress={()=>{navigation.navigate('Become Subscriber')}} style={styles.button} >
      <Text style={{color:'white', fontSize:20, textAlign:'center'}}>Newsletter</Text>
    </Pressable>
  </View>
  );

  const styles=StyleSheet.create({
    button:{
      paddingHorizontal:20,
      paddingVertical:10,
      backgroundColor:'#333333',
      marginTop:15
    },
    text:{
      fontSize:20,
      color:'black',
      textAlign:'center',
      marginTop:5
    },
    image:{
      height:200, 
      width:200, 
      marginTop:20
    }
  }
  )
};

export default HomeScreen;