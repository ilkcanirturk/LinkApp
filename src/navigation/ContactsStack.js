import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ContactsScreen from '../screens/ContactsScreen';


const ContactsStackNav = createStackNavigator();

//ContactsStack component for Stack Screens which associated with Contact page.
const ContactsStack = () => {
  return (
    <ContactsStackNav.Navigator 
        initialRouteName='ContactsScreen'
    >
        <ContactsStackNav.Screen
            name= 'ContactsScreen'
            component= { ContactsScreen }
            options= {{
                headerShown: false
            }}
        />
    </ContactsStackNav.Navigator>
  )
}

export default ContactsStack