import {AsyncStorage} from  'react-native';


export const deviceStorage={
  async saveItem(key,value){
      try{
          let key;
          await AsyncStorage.setItem('key',value)
      }
      catch(error){
         console.log(error);
      }
    },  

    async loadJWT(key){
        try{
            const value=await AsyncStorage.getItem('key');
            if(value){
                return value;
            }
            
        }
        catch(error){
            console.log(error);
        }
    },
    

}