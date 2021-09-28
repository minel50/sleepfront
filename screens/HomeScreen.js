import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ShowImage from '../components/Image.js';
import { MonoText } from '../components/StyledText';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../screens/SignInScreen.js';
import SignUpScreen from '../screens/SignUpScreen.js';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';






export default function HomeScreen({navigation}) {

  return (
    <Animatable.View 
          
          animation="fadeInUpBig"
          > 
    <ScrollView>
    <View >
      <ShowImage/> 
    
   </View>
     
           
         
     
    </ScrollView>
    </Animatable.View>    
  );
}







const styles = StyleSheet.create({
  
  container:{
    marginTop:20,
    alignItems:'center',
    justifyContent:'center',
    flex:1,
    
},
  button:{
    width:250,
    height:40,
    backgroundColor:'black', 
    borderRadius:30,
    marginBottom:10,
    marginTop:15,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    

    
    
    
},
  
});
  
      

 

  
