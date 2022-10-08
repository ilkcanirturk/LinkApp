import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styles from "./BottomTabNav.style";
import React from "react";
import ProfileStack from "./ProfileStack";
import { useSelector } from "react-redux";
import Icons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import ContactsStack from "./ContactsStack";
import MessagesStack from "./MessagesStack";
import { Text, TouchableOpacity } from "react-native";


//BottomTabNavigation and Screens. All configurations about bottom tab are here.
const BottomNav = createBottomTabNavigator();

const BottomTabNav = () => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <BottomNav.Navigator
      initialRouteName="Contacts"
      screenOptions={{
        // Config of the Bottom Tab Navigation
        tabBarStyle: [
          styles.tabBarContainer,
          { borderTopColor: theme.tabBarOnlineColor },
          { backgroundColor: theme.tabBarBgColor },
        ],
      }}
    >
      <BottomNav.Screen
        name="Contacts"
        component={ContactsStack}
        options={{
          tabBarLabelStyle: styles.tabBarLabel,
          headerShown: true,
          headerTitle: "Contacts",
          headerBackVisible: false,
          headerStyle: {
            backgroundColor: theme.headerBgColor,
            shadowColor: theme.tabBarOnlineColor,
          },
          headerTitleStyle: [
            styles.headerTitleStyle,
            { color: theme.textColor },
          ],
          headerTitleAlign: "center",
          headerLeft: () => {
            return (
              <TouchableOpacity>
                <Text style={styles.headerLeftStyle}>
                  Sort
                </Text>
              </TouchableOpacity>
            );
          },
          headerRight: () => {
            return (
              <TouchableOpacity>
                <Entypo
                  name="plus"
                  size={30}
                  style={styles.headerRightStyle}
                />
              </TouchableOpacity>
            );
          },
          //Tab Bar configurations.
          tabBarIcon: (tabInfo) => {
            return (
              <Icons
                name={tabInfo.focused ? "list" : "list-outline"}
                size={30}
                color={
                  tabInfo.focused
                    ? theme.tabBarOnlineColor
                    : theme.tabBarOfflineColor
                }
              />
            );
          },
          tabBarActiveTintColor: theme.tabBarOnlineColor,
        }}
      />
      <BottomNav.Screen
        name="Messages"
        component={MessagesStack}
        options={{
          tabBarLabelStyle: styles.tabBarLabel,
          headerShown: true,
          headerTitle: "Messages",
          headerBackVisible: false,
          headerStyle: {
            backgroundColor: theme.headerBgColor,
            shadowColor: theme.tabBarOnlineColor,
          },
          headerTitleStyle: [
            styles.headerTitleStyle,
            { color: theme.textColor },
          ],
          headerTitleAlign: "center",
          headerLeft: () => {
            return (
              <TouchableOpacity>
                <Text style={styles.headerLeftStyle}>
                  Edit
                </Text>
              </TouchableOpacity>
            );
          },
          headerRight: () => {
            return (
              <TouchableOpacity>
                <Entypo
                  name="new-message"
                  size={24}
                  style={styles.headerRightStyle}
                />
              </TouchableOpacity>
            );
          },
          tabBarIcon: (tabInfo) => {
            return (
              <Icons
                name={
                  tabInfo.focused ? "md-chatbubbles" : "md-chatbubbles-outline"
                }
                size={30}
                color={
                  tabInfo.focused
                    ? theme.tabBarOnlineColor
                    : theme.tabBarOfflineColor
                }
              />
            );
          },
          tabBarActiveTintColor: theme.tabBarOnlineColor,
        }}
      />
      <BottomNav.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          headerShown: false,
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarIcon: (tabInfo) => {
            return (
              <Icons
                name={
                  tabInfo.focused
                    ? "ios-person-circle"
                    : "ios-person-circle-outline"
                }
                size={30}
                color={
                  tabInfo.focused
                    ? theme.tabBarOnlineColor
                    : theme.tabBarOfflineColor
                }
              />
            );
          },
          tabBarActiveTintColor: theme.tabBarOnlineColor,
        }}
      />
    </BottomNav.Navigator>
  );
};

export default BottomTabNav;
