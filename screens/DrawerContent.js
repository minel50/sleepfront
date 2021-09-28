import React from "react";
import { View, StyleSheet } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import {
    Avatar,
    Title,
    

    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../components/context';


export function DrawerContent(props) {


// On récupère les valeurs du context signOut
const { signOut } = React.useContext(AuthContext);


 
    return (
        
        <View style={{ flex: 1 }}  >
            <DrawerContentScrollView {...props} >
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection} >
                        <View style={{ flexDirection: 'row', marginTop: 15, }}>
                            <Avatar.Image
                                source={require('../assets/images/hashtag.jpg')}
                                size={40}
                            />
                            
                             <DrawerItem 
                            icon={({ color, size }) => (
                            <Icon
                            name="close"
                            color={"#000"}
                            size={40}
                            style={{marginLeft:130}}
                            />
                            )}
                            label=""
                            onPress={() => {props.navigation.
                                closeDrawer()}}
                                
                        />  
                         
                        </View>
                        
                        <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                            <Title style={styles.title}>SleepAtHome</Title>
                        
                        </View>
                        

                         
                                
                                
                                
                    </View>
                   
                    <Drawer.Section style={styles.drawerSection}  >
                        <DrawerItem 
                            icon={({ color, size }) => (
                                <Icon
                                    name="home"
                                    color={"#000"}
                                    size={22}
                                />
                            )}
                            label="Accueil"
                            labelStyle={{color:"#000",fontWeight:'bold',fontSize:16}}
                            
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                    </Drawer.Section>
                    
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="file-document"
                                    color={"#000"}
                                    size={22}
                                />
                            )}
                            label="Déposer une annonce"
                            labelStyle={{color:"#000",fontWeight:'bold',fontSize:16}}
                            onPress={() => {props.navigation.navigate('Deposer')}}
                        />
                    </Drawer.Section>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="view-list"
                                    color={"#000"}
                                    size={22}
                                />
                            )}
                            label="Liste des offres"
                            labelStyle={{color:"#000",fontWeight:'bold',fontSize:16}}
                            onPress={() => {props.navigation.navigate('Liste')}}
                        />
                    </Drawer.Section>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="account"
                                    color={"#000"}
                                    size={22}
                                />
                            )}
                            label="Mon compte"
                            labelStyle={{color:"#000",fontWeight:'bold',fontSize:16}}
                            onPress={() => {props.navigation.navigate('Links')}}
                        />
                    </Drawer.Section>
                    {/* <Drawer.Section title='Preferences'>
                        <TouchableRipple onPress={() => { toggleTheme() }}>
                            <View style={styles.preference}>
                                <Text>Dark theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDarkTheme} />
                                </View>

                            </View>
                        </TouchableRipple>
                    </Drawer.Section> */}
                   
                </View>
                
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="logout"
                            color={"#000"}
                            size={25}
                        />
                    )}
                    label="Déconnexion"
                    labelStyle={{color:"#000",fontWeight:'bold',fontSize:16}}
                    onPress={() => {signOut()}}>
                </DrawerItem>
            </Drawer.Section>
                    
                    
        </View>
        

    )
}

const styles = StyleSheet.create({
    
    drawerContent: {
        
        flex: 1,
        backgroundColor:'#fff',
    },
        
     


    userInfoSection: {

        paddingLeft: 20,

    },

    title: {

        fontSize: 16,

        marginTop: 3,

        fontWeight: 'bold',

    },

    caption: {

        fontSize: 14,

        lineHeight: 14,

    },

    row: {

        marginTop: 20,

        flexDirection: 'row',

        alignItems: 'center',

    },

    section: {

        flexDirection: 'row',

        alignItems: 'center',

        marginRight: 15,
        
        
        
        

    },

    paragraph: {

        fontWeight: 'bold',

        marginRight: 3,

    },

    drawerSection: {

        marginTop: 15,

    },

    bottomDrawerSection: {

        marginBottom: 15,

        borderTopColor: '#f4f4f4',

        borderTopWidth: 1

    },

    preference: {

        flexDirection: 'row',

        justifyContent: 'space-between',

        paddingVertical: 12,

        paddingHorizontal: 16,

    },
})