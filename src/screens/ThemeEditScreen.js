import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from './ThemeEditScreen.style';
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleLightTheme, handleDarkTheme } from "../redux/store";
import Ionicons from "@expo/vector-icons/Ionicons";
import Octicons from "@expo/vector-icons/Octicons";
import { useNavigation } from "@react-navigation/native";

//For theme mode change.
const ThemeEditScreen = () => {
  const { navigate } = useNavigation();
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const onPress = () => {
    navigate("ProfileScreen");
  };

  const setLightTheme = () => {
    dispatch(handleLightTheme());
  };

  const setDarkTheme = () => {
    dispatch(handleDarkTheme());
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <TouchableOpacity onPress={onPress} style={styles.backButton}>
        <Ionicons name="ios-chevron-back" size={48} />
      </TouchableOpacity>
      <View style={styles.config}>
        <TouchableOpacity style={styles.buttonLight} onPress={setLightTheme}>
          <Text style={styles.textLight}>Light</Text>
          <Ionicons name="ios-sunny" size={45} style={styles.iconLight} />
        </TouchableOpacity>
        <Octicons
          name="arrow-switch"
          size={70}
          style={[{ color: theme.textColor }]}
        />
        <TouchableOpacity style={styles.buttonDark} onPress={setDarkTheme}>
          <Text style={styles.textDark}>Dark</Text>
          <Ionicons name="ios-moon" size={45} style={styles.iconDark} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ThemeEditScreen;
