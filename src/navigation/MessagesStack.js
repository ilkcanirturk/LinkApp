import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import MessagesScreen from '../screens/MessagesScreen';



const MessagesStackNav = createStackNavigator();

const MessagesStack = () => {
    //MessagesStack component for Stack Screens which associated with Message page.
    //Only 1 screen available for now but it can be update in future.
  return (
    <MessagesStackNav.Navigator 
        initialRouteName='MessageScreen'
    >
        <MessagesStackNav.Screen
            name= 'MessagesScreen'
            component= { MessagesScreen }
            options= {{
                headerShown: false
            }}
        />
    </MessagesStackNav.Navigator>
  )
}

export default MessagesStack