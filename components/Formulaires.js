import React,{useState,useEffect} from 'react';
import {TouchableOpacity, View, Text, TextInput ,Image,StyleSheet, Alert} from 'react-native';
import {  addAnnonce } from '../Actions/TestActions.js';
import { ScrollView} from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import { AuthContext } from '../components/context';
import AsyncStorage from '@react-native-community/async-storage';
import{deviceStorage} from'../Actions/deviceStorage';




function ShowForm(){
    const[firstname,setFirstname]= useState('');
    const[lastname,setLastname]=useState('');
    const[address,setAddress]=useState('');
    const[city,setCity]=useState('');
    const[cp,setCp]=useState('');
    const[phone,setPhone]=useState('');
    const[email,setEmail]=useState('');
    const[description,setDescription]=useState('');
    const[image,setImage]=useState('');
    const[annonces,setAnnonces]=useState('');
    const [role, setRole] = useState("propriétaire");
    
    //const titre="déposer votre annonce";
    
useEffect (()=>{
        async function getPermissionAsync() {
            if (Constants.platform.android) {
                const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
                if (status !== 'granted') {
                    alert('Désolé une autorisation est nécessaire!');
                }
            }
        };
    })
    async function pickImage(){
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
        });
        if (!result.cancelled) {
            setImage({image: result.uri });
            console.log(result.uri);
        }       
    };
            
        
            
    
    async function newAnnonce(data){
    //Pour Récupérer le token
    userToken = await deviceStorage.loadJWT('jwtToken')
    console.log(userToken);
        data={
            firstname:firstname,
            lastname:lastname,
            address:address,
            city:city,
            cp:cp,
            phone:phone,
            email:email,
            description:description,
            image: image.image,
        }
        
             
             
        
        if(firstname==="" && lastname===""&& address===""&& city==="" && cp===""  && phone==="" && email==="" &&
        description==="" && image===""){
            alert('Champs obligatoires')}
            else if(firstname===""){
                alert("Nom obligatoire")
            }
            else if(lastname===""){
                alert("Prénom obligatoire")
            }
            else if(address===""){
                alert("Adresse obligatoire")
            }
            else if(city===""){
                alert("Ville obligatoire")
            }
            else if(cp===""){
                alert("Code postal obligatoire")
            }
            else if(phone===""){
                alert("Téléphone obligatoire")
            }
            else if(email===""){
                alert("Email obligatoire")
            }
            else if(description===""){
                alert("Description obligatoire")
            }
            else{
                
                let annonces = await addAnnonce(data,userToken);
                alert('votre annonce a bien été créee');
                console.log(annonces);
                } ;
                
                
                // console.log('ras le bol:',userToken)
             
                 
                
                
                setFirstname('');
                setLastname('');
                setAddress('');
                setCity('');
                setCp('');
                setPhone('');
                setEmail('');
                setDescription('');
                setImage('');
            }
            
           
               
      
           
        
       
 return(
           <ScrollView>
             <View style={styles.container}>
                {/* <View style={styles.titre}>
                    <Text style={styles.titre}>{titre}</Text>
                </View> */}
                    <View >
                    <TextInput
                    style={styles.textinput}
                    placeholder={'Nom'}
                    onChangeText={(firstname) => setFirstname(firstname)}
                    value={firstname}/>
                    </View>
                    
        
                
                <View>
                <TextInput
                style={styles.textinput}
                placeholder={'Prénom'}
                onChangeText={(lastname) => setLastname(lastname)}
                value={lastname}/>
                </View>

                <View>
                <TextInput
                style={styles.textinput}
                placeholder={'Rue'}
                onChangeText={(address) => setAddress(address)}
                value={address}/>
                </View>
                <View>
                <TextInput
                style={styles.textinput}
                placeholder={'Ville'}
                onChangeText={(city) => setCity(city)}
                value={city}/>
                </View>

                <View>
                    <TextInput
                keyboardType={'number-pad'}
                style={styles.textinput}
                placeholder={'Code postal'}
                onChangeText={(cp) => setCp(cp)}
                value={cp}/>
                </View>
    
                
                <View>
                <TextInput
                keyboardType={'email-address'}
                style={styles.textinput}
                placeholder={'Email'}
                onChangeText={(email) => setEmail(email)}
                value={email}/>
                </View>
                <View>
                <TextInput
                keyboardType={'phone-pad'}
                style={styles.textinput}
                placeholder={'Téléphone'}
                onChangeText={(phone) => setPhone(phone)}
                value={phone}/>
                </View>

                <View>
                <TextInput
                multiline={true}
                numberOfLines={10}
                style={styles.textinput}
                placeholder={'Description'}
                onChangeText={(description) => setDescription(description)}
                value={description}/>
                </View>

                <View> 
                {<Image source={{uri:image.image}} style={{ width:200 , height:100}}/>} 
                <TouchableOpacity
                style={styles.button}
                onPress={() =>pickImage()}>
                <Text style={{color:'white',textAlign:'center',fontSize:20}}>Choisir photo</Text>
                </TouchableOpacity>
                </View> 
                
                <View>
                    
                <TouchableOpacity
                    style={styles.button}
                    onPress={() =>{newAnnonce();
                    
                         }}>
                        <Text style={{color:'white',textAlign:'center',fontSize:20}}>Ajouter</Text>
                    </TouchableOpacity>
                </View>
                
                </View>
</ScrollView>
    )
}
const styles = StyleSheet.create({
    container:{
        marginTop:30,
        alignItems:'center',
        flexDirection:'column',
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
    titre:{
        marginTop:10,
        marginBottom:10,
        textAlign:'center',
        textTransform:'uppercase',
        fontWeight:'bold',
        fontSize:19,
      },
    button:{
        width:200,
        height:40,
        backgroundColor:'black', 
        color:'white',
        borderRadius:30,
        marginBottom:10,
        justifyContent:'center'
    }
})
export default ShowForm

        
                
                    

    


                

                    

    




                    


                
                    
            
                
                
                    
                    


                    

                
                

                

                

        
    
