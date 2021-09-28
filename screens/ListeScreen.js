import * as WebBrowser from 'expo-web-browser';

import  React,{useState,useEffect} from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

import { getListe  } from '../Actions/TestActions.js';
import { SearchBar,Card } from 'react-native-elements';
import{deviceStorage} from'../Actions/deviceStorage';





export default function ListeScreen({navigation}) {
  const[annonces,setAnnonces]=useState([]);
  const [list,setList]=useState(annonces);
      const[item,setItem]=useState(annonces);
      const[search,setSearch]=useState(annonces);
      
      useEffect(() => {
          async function loadListe() {
              userToken = await deviceStorage.loadJWT('jwtToken')
              let annonceAjax = await getListe(userToken);
              setAnnonces(annonceAjax.data["hydra:member"]);
              console.log(annonceAjax);
            }
            loadListe();
          }, [])
             
            
     
         
      //console.log(annonces); 

      
      
          
      function filterAnnonces(city){
        let annoncesfiltr = annonces.filter((item)=>item.city.toLowerCase().indexOf(city.toLowerCase())!=-1);
        setAnnonces([...annoncesfiltr]);
      }
     


    //console.log(annonces);
        

    
    

    
  
return(
  <ScrollView>
    

        <View>
        <SearchBar
        onChangeText ={(search)=>{
          setSearch(search);
          filterAnnonces(search);
          
          
        }}
          placeholder='Rechercher...' />
        </View>
        
        
     
            

        
<View>
  {annonces.map((item,i) => {
    return(
        <View key={i}>
          <Card containerStyle={{marginBottom:5,backgroundColor:'lightgrey'}}>
          <TouchableOpacity
          style={styles.annonces}
          //redirection vers la page Détails(on ajoute un paramètre à la route)
           onPress={() =>{navigation.navigate('Détails',{item});
          }}>
            <Image source={{uri:item.image}} style={styles.image} />   
            <View style={{flexDirection:'row'}}>
            <Text style={styles.textAdress}>{item.address}</Text>
            <Text style={styles.text}>{item.cp}</Text>
            <Text style={styles.text}>{item.city}</Text>
            </View>
            </TouchableOpacity>
            </Card>
        </View>
            )
          })}
</View>
          
           
      
            
            
        


</ScrollView>                
 )}
                        
    const styles = StyleSheet.create({
    image:{
      height:180,
    },
    annonces:{
      marginTop:30,
    
    },
    textAdress:{
      fontSize:17,
      paddingRight:3
      
    },
    text:{
      textTransform:'uppercase',
      fontSize:17,
      paddingRight:3,
      fontWeight:'bold',
    
    } 
    });
  
      
          
          
     
      
      
        
    
        
            
            
              
              
            
          

  

      