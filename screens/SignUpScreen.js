import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import React,{useState ,useEffect} from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Picker,AsyncStorage } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { addUser  } from '../Actions/TestActions.js';
import { AuthContext } from '../components/context';
import { getUser } from '../Actions/TestActions.js';
import{deviceStorage} from'../Actions/deviceStorage';




export default function SignUpScreen({navigation}) {


    const[firstname,setFirstname]=useState('');
    const[lastname,setLastname]=useState('');
    const[address,setAddress]=useState('');
    const[city,setCity]=useState('');
    const[cp,setCp]=useState('');
    const [role, setRole] = useState([]);
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState('');
    const[repassword,setRepassword]=useState('');
    const[users,setUsers]=useState([]);
    
    const titre="Votre compte";
    
    

    async function newSignUp(data){
    const  userToken = await deviceStorage.loadJWT('jwtToken')
        //console.log('galère:',userToken);
        data={
            firstname:firstname,
            lastname:lastname,
            address:address,
            city:city,
            cp:cp,
            role:role,
            phone:phone,
            email:email,
            password:password,    
        }
        

       
            

        
        if(firstname==="" && lastname===""&& address===""&& city==="" && cp===""  && phone==="" && email==="" &&
        password==="" && repassword===""){
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
            else if(password===""){
                alert("Mot de passe obligatoire")
            }
            else if(password!==repassword){
                alert(' Mot de passe incorrect ')
            }
              
                      
                                       
            else{
        let registrer = await addUser(data,userToken);
        alert('Votre compte est crée');
        console.log(registrer);
        
            setFirstname('');
           setLastname('');
           setAddress('');
           setCity('');
           setCp('');
           setPhone('');
           setEmail('');
           setPassword('');
           setRepassword('');
          
        } 
           
           
        
        
           
        
        
    }
        
        
         function Validate() {
             if(email===email){
                 alert('email déja existant');
                 console.log('email:',email)
             }
             else{
                 return true;
                }
            } 
            
            
                
        
    
            
             useEffect(() => { 
             //Renvoie systématiquement une promesse
             async function LoadUser() {
                 //Pour récupérer le token
                const userToken = await deviceStorage.loadJWT('jwtToken')
                 //Permet d'attendre la résolution de la promesse et de retourner sa valeur
                
                let usersAjax= await getUser(userToken);
                 console.log(usersAjax);
                
                 setUsers(usersAjax.data["hydra:member"]);
               }  
             LoadUser();
             }, [])
            


                
            
          
         
        
       
            
             
        
            
       
return(
        <ScrollView>
            <View style={styles.header}>
                <Text style={styles.titre}>{titre}</Text>
             </View> 
            
            <View style={styles.container}>
             
         
            <View>
                    <TextInput
                    
                style={styles.textinput}
                placeholder={'Nom'}
                onChangeText={(firstname) =>{ setFirstname(firstname);
                    
                }}
                value={firstname}
                />
            </View>
            <View>
                    <TextInput
                style={styles.textinput}
                placeholder={'Prénom'}
                onChangeText={(text) => setLastname(text)}
                value={lastname}
                />
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
               <View style={styles.picker}>
                 <Picker style={styles.picker}
                selectedValue={role}
                style={{ height: 50, width: 200}}
                onValueChange={(itemValue, itemIndex) => setRole(itemValue)}
                >
                    <Picker.Item label="soignant" value="ROLE_USER" />
                 <Picker.Item label="propriétaire" value="ROLE_ADMIN"/> 
                </Picker>
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
                        keyboardType={'email-address'}
                        style={styles.textinput}
                        placeholder={'Email'}
                        onChangeText={(email) => setEmail(email)}
                        value={email}/>
            </View>
            <View>
                    <TextInput
                   style={styles.textinput}
                   placeholder={'Mot de passe'}
                   onChangeText={(password) => setPassword(password)}
                   value={password}
                   secureTextEntry={true}/>
                   
               
            </View>
            <View>
                    <TextInput
                   style={styles.textinput}
                   placeholder={'Retaper votre mot de passe'}
                   onChangeText={(repassword) => setRepassword(repassword)}
                   value={repassword}
                   secureTextEntry={true}/>
            </View>
            
            <View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() =>{
                        newSignUp();
                        Validate(); 
                        
                        }}>
                        <Text style={{color:'white',textAlign:'center',fontSize:20}}>S'inscrire</Text>
                 </TouchableOpacity>
            </View>
                       
                        
            <View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() =>{
                    navigation.goBack();
                     }}>
                        <Text style={{color:'white',textAlign:'center',fontSize:20}}>Se connecter</Text>
                 </TouchableOpacity>
            </View>
            
                    
                    

                    
        </View>
        
        </ScrollView>
    );
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
    titre:{
        
        color:'#fff',
        marginTop:30,
        textAlign:'center',
        textTransform:'uppercase',
        fontWeight:'bold',
        fontSize:22,
      },
      header:{
          backgroundColor:'#000',
          height:70,
          
          
        
      },
      picker:{
        borderColor:'#000',
        borderWidth:1,
        marginBottom:10,
        width:250,
        borderRadius:30,
     },
     
});

