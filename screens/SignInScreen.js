import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Alert, AsyncStorage } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { addLogin } from '../Actions/TestActions';
import { getUser } from '../Actions/TestActions.js';
import{deviceStorage} from'../Actions/deviceStorage';
import { AuthContext } from '../components/context';
import * as Animatable from 'react-native-animatable';

export default function SignInScreen({navigation}) {

    const titre="Connectez vous";
    const titre2="Inscrivez vous";
    const paragraphe="Si vous n'avez pas encore de compte d'utilisateur, utilisez cette option pour accéder au formulaire d'inscription."
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState();
    const[users,setUsers]=useState([password]);
    const[item,setItem]=useState(users);
    

    
    
    
  
     
    
  
    const { signIn } = React.useContext(AuthContext);
    
    
    
    
    
    async function newLogin(){
    let login= await addLogin(
      data=
      
      {    
        email:email,
        password:password,
        
      });
      
      setEmail('');
      setPassword('');
      signIn();
      console.log(login);
      console.log(userToken);
      
      
        
        if(login.data.token){
          //stockage du token 
          deviceStorage.saveItem('jwtToken', login.data.token);
          //Récupération du token 
          const userToken = await deviceStorage.loadJWT('jwtToken');
          console.log(userToken);
          
          
        }
          
      };
          
          
          
          
                
 
              
              
               useEffect(() => {
                 async function LoadUser() {
                  userToken = await deviceStorage.loadJWT('jwtToken')
                 
                   let usersAjax = await getUser(userToken);
                   console.log(usersAjax);
                  
                  setUsers(usersAjax.data["hydra:member"]);
                  
                 }
                 LoadUser();
                 
               }, [])
                 
                  
              function Validate() {
      
              if(password!=item.password){
               alert('mot de passe incorrect');
               console.log('password:',password);
               console.log('itempassword:',users.password);
              }
                 else{
                   return true} ;
         }

                  
                  
                 
              
                
                
                
             
              
           
                  
       
            
        
return (
   <Animatable.View animation="fadeInUpBig">
          
      <View style={styles.container}>
        <View>
           <Text style={styles.titre}>{titre}</Text>
         </View> 
          <View>
         <TextInput
                   keyboardType={'email-address'}
                   style={styles.textinput}
                   placeholder={'Email'}
                   onChangeText={(text) => setEmail(text)}
                   
                   value={email}
                  />
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
                <TouchableOpacity
                    style={styles.button}
                    onPress={() =>{
                    newLogin();
                    Validate();
                    
                
     
  }}>
                        <Text style={{color:'white',textAlign:'center',fontSize:20}}>Se connecter</Text>
                 </TouchableOpacity>
         </View>
         <View>
           <Text style={styles.titre}>{titre2}</Text>
         </View> 
        <View>
        <Text style={styles.paragraphe}>{paragraphe}</Text>
        </View>
        <View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() =>{navigation.navigate('SignUpScreen');
                    }}>
                        <Text style={{color:'white',textAlign:'center',fontSize:20}}>Créer un compte</Text>
                </TouchableOpacity>
        </View>

         

   
   
     </View>  
  </Animatable.View>    
     );
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
paragraphe:{
    fontSize:20,
    textAlign:'center',
    marginBottom:10,
}

  
  }); 

