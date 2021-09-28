import React,{useState,useEffect} from 'react';
import {  StyleSheet, Text, TouchableOpacity, View ,Modal,TouchableHighlight,Alert, AsyncStorage} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { getListe  } from '../Actions/TestActions.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Card } from 'react-native-elements';


export default function DetailsScreen({navigation,route}) {
  const[annonces,setAnnonces]=useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [list,setList]=useState([item]);
  
  //On récupère les paramètres
  const {item}=route.params;

  async function save() {
    let email;
    let phone;
    await AsyncStorage.setItem('email',email);
    await AsyncStorage.setItem('phone',phone);
  }  
  async function load(){
  const email=  await AsyncStorage.getItem('email');
   const phone= await AsyncStorage.getItem('phone');

  }


    return(
      <View >
          
          
        <Card  containerStyle={{backgroundColor:'lightgrey',marginTop:60}}>
            <Text style={styles.textitem}>{item.firstname}</Text>
            <Text style={styles.textitem}>{item.lastname}</Text>
            <Text style={styles.textitem}>{item.address}</Text>
            <Text style={styles.textitem}>{item.cp}</Text>
            <Text style={styles.textitem}>{item.city}</Text>
            <Text style={styles.textitem}>{item.phone}</Text>
            <Text style={styles.textitem}>{item.email}</Text>
            <Text style={styles.textitem}>Description: {item.description}</Text>
        </Card>
        
  


                <View style={styles.container}>
                <TouchableOpacity
                   
                    style={styles.button}
                    onPress={() =>{setModalVisible(true);
                      save();
                     }}>
                    <Text style={{color:'white',textAlign:'center',fontSize:20}}>Choisir</Text>
                 </TouchableOpacity>
                </View>
                <View style={styles.centeredView}>
                  <Modal
                      animationType="fade"
                      transparent={true}
                      visible={modalVisible}
                  >
                      
                    <View style={styles.centeredView}>
                      <View style={styles.modalView}>
                        <Text style={styles.modalText}>Contactez moi par mail: {item.email} ou téléphone: {item.phone}</Text>
                        <TouchableHighlight
                        style={styles.openButton,{backgroundColor:"#000"}}
                          onPress={() => {
                            setModalVisible(!modalVisible);
                            }}
                        >
                          <Text style={styles.textStyle}>OK</Text>
                        </TouchableHighlight>
                      </View>
                    </View>
                  </Modal>
                                
        
</View>                
                     
</View>
)
}

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
      width:200,
      height:40,
      backgroundColor:'black', 
      color:'white',
      borderRadius:30,
      marginTop:30,
      marginBottom:30,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center'
      
    
      
  },
  textitem:{
      fontSize:20,
      
  },
      centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "lightgrey",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      textStyle: {
        fontSize:20,
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize:20,
      }
    });
    




        
        