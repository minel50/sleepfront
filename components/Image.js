import React from 'react';
import { View, Text, ScrollView, Button ,Image,StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
       backgroundColor:'#fff',
       flex:1,
       alignItems:'center',
       justifyContent:'center',
    },
    logo:{
    fontSize:100,
    textAlign:'center',
    marginTop:20,

    },
    text: {
        color:'#fff',
        fontSize: 23,
        fontWeight: "bold",
        textAlign:'center',
        marginTop:50,
        backgroundColor:'#000'
      },
      titre:{
          fontSize:40,
          fontWeight:'bold',
          textAlign:'center',
      },
      
   

})
function ShowImage(){
    const logo="#";
    const titre="SLEEP AT HOME";
    const text=" COVID 19\n\nLes soignants sont mobilisés , 7 jours sur 7, 24 heures sur 24...\nEt parfois, ils habitent loin de leur lieu de travail.\nPour leur faciliter la vie, la solidarité s'organise.\nDe nombreux propriétaires mettent à disposition gratuitement des logements à proximité des hôpitaux.";
    
    return(
     <ScrollView> 

        
        <View> 
        <Text style={styles.logo}>{logo}</Text> 
        </View>
        <View>
        <Text style={styles.titre}>{titre}</Text> 
                   
        <Text style={styles.text}>{text}</Text>
        </View>
        </ScrollView>
    )
}

export default ShowImage