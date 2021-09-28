// import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import  React, {useEffect,useState}from 'react';
import { StyleSheet, Text, View ,TextInput,AsyncStorage,TouchableOpacity} from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';




export default function LinksScreen() {
  
const titre ='ESPACE PERSONNEL';
      
    return(
    <View>
    <Text style={styles.titre}>{titre}</Text>   
</View>
)
               

                }
const styles = StyleSheet.create({
    titre:{
        marginTop:50,
        marginBottom:30,
        textAlign:'center',
        textTransform:'uppercase',
        fontWeight:'bold',
        fontSize:25,
      },
      textinput:{
        borderColor:'#000',
        height: 40,
        borderWidth:1,
        fontWeight:'bold',
        marginBottom:10,
        width:250,
        paddingLeft:5,
        fontSize:18,
        borderRadius:25
    },
    container:{
      marginTop:30,
      alignItems:'center',
      flexDirection:'column',
    },
    button:{
      width:250,
      height:40,
      backgroundColor:'black', 
      color:'white',
      borderRadius:30,
      marginBottom:10,
      justifyContent:'center',
      marginTop:15,
      textTransform:'uppercase',
  },   
}); 









                   

    