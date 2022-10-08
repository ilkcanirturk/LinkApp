import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import BottomTabNav from "./BottomTabNav";
import ChatScreen from '../screens/ChatScreen'
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthStack from "./AuthStack";

const Stack = createStackNavigator();

//Main Stack Navigator is checks for connections between users authentications and screens.
const MainStackNav = () => {
  const { userInfo } = useSelector((state) => state.user);
  const [localData, setLocalData] = useState();

  //Local data with Async Storage.
  const getLocal = async () => {
    const response = await AsyncStorage.getItem("userKey");
    const local = response ? JSON.parse(response) : null;
    setLocalData(local);
  };

  useEffect(() => {
    getLocal();
  }, [userInfo]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* User check for pages. */}
      {localData ? (
        <>
          <Stack.Screen name="BottomTabNav" component={BottomTabNav} />
          <Stack.Screen name="ChatScreen" component= {ChatScreen}/>
        </>
      ) : (
        <>
          <Stack.Screen
            name="AuthStack"
            component={AuthStack}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default MainStackNav;
