import axios from 'axios';
import  React,{useEffect} from 'react';




export function addAnnonce(annonces,userToken){
  return axios({
    method:'post',
    url:'http://192.168.43.40:8000/api/annonces' ,
    data:annonces,
     headers:{
       'Content-Type':'application/json',
       'Authorization': 'Bearer '  +  userToken
      },
    });  
  }
  

  

      
    export function getListe(userToken){
      return axios({
        method:'get',
        url:'http://192.168.43.40:8000/api/annonces/',
        headers:{
          'Content-Type':'application/json',
          'Authorization': 'Bearer ' + userToken,
          },
        });
    }
         
export function addUser(users,userToken){
  return axios({
    method:'post',
    url:'http://192.168.43.40:8000/api/users/create',
    data:users,
     headers:{
       'Content-Type':'application/json',
      'Authorization': 'Bearer '  +  userToken
      },
    });  
    
   }
      
    export function addLogin(users){
    
    const config={headers:{
    'Content-type':'application/json',
    },
  } 
  return axios.post('http://192.168.43.40:8000/login', users,config,
    
  ); 
 }
 
    
    


 
 
export function getUser(userToken){
  return axios({
      method:'get',
      url:'http://192.168.43.40:8000/api/users/',
      headers:{
        'Content-Type':'application/json',
        'Authorization': 'Bearer ' + userToken
      },
      
    });
  }
    

  
          
         
     
       
   
 
 
        

    
   
  
    

