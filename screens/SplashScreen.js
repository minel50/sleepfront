
import React from 'react';
import { View, Text, Button,Dimensions, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';




const SplashScreen = ({navigation}) => {

    return (

      <View style={styles.container}>
          <View style={styles.header}>
            <Animatable.Image
                duration={1000}
                source={require('../assets/images/hashtag.jpg')}
                style={styles.logo}
            />
            <Text style={styles.titre} >SLEEP AT HOME</Text>
          </View>
            <Animatable.View 
                style={styles.footer}
                animation="fadeInUpBig"
            >
            <View  style={styles.button}>
                <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
                    <View style={styles.myButton}>
                    <Text style={styles.textButton}>Se connecter</Text>
                    </View>
                </TouchableOpacity>
            </View>
          </Animatable.View>
      </View>
                   
                   
              
          
        
              
              

    );

};



export default SplashScreen;



const {height} = Dimensions.get("screen");

const height_logo = height * 0.28;



const styles = StyleSheet.create({

    myButton: {
        marginTop:50,
        padding: 5,
        backgroundColor: '#fff',
        height: 50,
        width: 200,
        textAlign: 'center',
        borderRadius: 25,
      },
      textButton: {
        paddingTop: 7,
        textAlign: 'center',
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
      },


  container: {
    flex: 1, 
    backgroundColor: '#fff'
  },

  header: {

      flex: 3,
      justifyContent: 'center',
      alignItems: 'center'
  },

  footer: {

      flex: 1,
      backgroundColor: '#000',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30

  },

  logo: {

      width: height_logo,
      height: 200
  },

  title: {

      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
  },

  text: {

      color: 'white',
      marginTop:5
  },

  button: {


      alignItems: 'flex-end',
      marginTop: 30
  },

  signIn: {

      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },

  textSign: {

      color: 'white',
      fontWeight: 'bold'
  },
  titre:{
      fontSize:40,
  }

});