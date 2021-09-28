import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  React,{useEffect} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import DeposerScreen from './screens/DeposerScreen';
import LinksScreen from './screens/LinksScreen';
import ListeScreen from './screens/ListeScreen';
import SplashScreen from './screens/SplashScreen';
import DetailsScreen from './screens/DetailsScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import AsyncStorage from '@react-native-community/async-storage';
import RootStackScreen from './screens/RootStackScreen';
import { DrawerContent } from './screens/DrawerContent';
import Icon from 'react-native-vector-icons/Ionicons';

//import BottomTabNavigator from './navigation/BottomTabNavigator';
//import LinkingConfiguration from './navigation/LinkingConfiguration';
import { AuthContext } from './components/context'

const HomeStack = createStackNavigator();
const LinksStack = createStackNavigator();
const DeposerStack = createStackNavigator();
const ListeStack = createStackNavigator();
const Drawer = createDrawerNavigator();




const HomeStackScreen = ({navigation}) => {
  return (
    
    <HomeStack.Navigator screenOptions={{
      headerStyle:
       {backgroundColor:"#000",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: 'bold'
      }
       }}>
      
    
    <HomeStack.Screen name="home" component={HomeScreen}  options={{
        title: "SleepAtHome",
        headerLeft:()=> (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#000" onPress={() => {navigation.
            openDrawer()}}> </Icon.Button>
        )
      }} />
      
  </HomeStack.Navigator>
);
};
const LinksStackScreen = ({navigation}) => {
  return (
    <LinksStack.Navigator screenOptions={{
      headerStyle:
       {backgroundColor:"#000",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: 'bold'
      }
       }}>
      
    <LinksStack.Screen name="Links" component={LinksScreen}  options={{
      title: "Mon compte",
        headerLeft: () => (
           <Icon.Button name="ios-menu" size={25} backgroundColor="#000" onPress={() => {navigation.
            openDrawer()}}> </Icon.Button>
        )
    }} />
  </LinksStack.Navigator>

  );
};
const DeposerStackScreen = ({navigation}) => {
  return (
    <DeposerStack.Navigator screenOptions={{
      headerStyle:
       {backgroundColor:"#000",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: 'bold'
      }
      
       }}>
      
    <DeposerStack.Screen name="Deposer" component={DeposerScreen}  options={{
      title: "Déposer une annonce",
       headerLeft: () => (
           <Icon.Button name="ios-menu" size={25} backgroundColor="#000" onPress={() => {navigation.
           openDrawer()}}> </Icon.Button>
       )
    }} />
  </DeposerStack.Navigator>

  );
};

 const ListeStackScreen = ({navigation}) => {
   return (
      <ListeStack.Navigator 
        screenOptions={{
            headerStyle:
              {backgroundColor:"#000",
         },
        headerTintColor: "#fff",
        headerTitleStyle: {
        fontWeight: 'bold'
       }
        }}>
          <ListeStack.Screen name="Liste" component={ListeScreen}  options={{
             title: "Liste des offres",
              headerLeft : () => (
              <Icon.Button name="ios-menu" size={25} backgroundColor="#000" onPress={() => {navigation.
              openDrawer()}}> </Icon.Button>
               )
          }} />
           <ListeStack.Screen name="Détails" component={DetailsScreen} /> 
      </ListeStack.Navigator>
  );
 };


export default function App(props) {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        // case 'RESTORE_TOKEN':
        //   return {
        //   ...prevState,
        //     userToken: action.token,
        //     isLoading: false,
        //  };
        case 'SIGN_IN':
          return {
            ...prevState,
            userToken:action.token,
            isLoading:true,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            userToken: null,
            isLoading:false,
          };
            case 'SIGN_UP':
              return {
                ...prevState,
            
               userToken: action.token,
               isLoading:false,
              
           };
        }
      },
  
       {
         isLoading: true,
         userToken: null,
         
       }
      );
        
          
            
        
      
      //Création et mémorisation des contextes connexion et déconnexion  
  const context = React.useMemo(
    () => ({
      signIn: async data => {
      // On stocke l'état d'authentification
      try{
           userToken="";
           await AsyncStorage.setItem('userToken', userToken);
          }catch(e){
            console.log(e);
          }
          // Renvoie à l'action (méthode de useReducer) que l'on souhaite déclencher 
          dispatch({ type: 'SIGN_IN', token: userToken});
      },
      signOut: async data =>{ 
        //On efface l'état d'authentification
       
         try{
           await AsyncStorage.removeItem('userToken')
         }catch(e){
           console.log(e);
         }
        dispatch({ type: 'SIGN_OUT' })},



      signUp: async data => {
       //     In a production app, we need to send user data to server and get a token
      //   // We will also need to handle errors if sign up failed
      //   // After getting token, we need to persist the token using `AsyncStorage`
        
      dispatch({ type: 'SIGN_UP', token: userToken});
       },
    }),
    []
  );
 
  
 
        
     
    
return (
  
  //Accepte les valeurs mémorisées
  <AuthContext.Provider value={context}>
    <NavigationContainer >
      {state.userToken !== null ? (  //Si userToken n'est pas nul on accède à Home et au menu  
        <Drawer.Navigator initialRouteName="Home"
          drawerContent={props => <DrawerContent{...props} />}
     >
            <Drawer.Screen name="Home" component={HomeStackScreen} /> 
           <Drawer.Screen name="Deposer" component={DeposerStackScreen} /> 
          <Drawer.Screen name="Liste" component={ListeStackScreen} />  
          <Drawer.Screen name="Links" component={LinksStackScreen} />
        </Drawer.Navigator>
    ) 
    // Sinon on accède à l'écran Splashscreen et sa navigation
       :<RootStackScreen/>}  
    </NavigationContainer>
  </AuthContext.Provider>
    
    );
        }
    

  

  


  