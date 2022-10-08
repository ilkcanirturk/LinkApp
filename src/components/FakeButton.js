import { Text, View, TouchableOpacity } from "react-native";
import styles from './FakeButton.style';
import React from "react";
import Fontisto from "@expo/vector-icons/Fontisto";
import { useSelector } from "react-redux";

//Fake button component for ProfileScreen.
const FakeButton = ({ nameIcon, text, size }) => {
  const {theme} = useSelector((state) => state.theme);

  return (
    <TouchableOpacity style={[styles.buttonContainer, {backgroundColor: theme.backgroundColor}, {borderBottomColor: theme.borderColor}]}>
      <View style={styles.iconTextGroupStyle}>
        <Fontisto name={nameIcon} size={size} style={[{color: theme.iconColor}]} />
        <Text style={[styles.textStyle, {color: theme.textColor}]}>{text}</Text>
      </View>
      <Fontisto name="angle-right" size={24} style={[styles.secondIcon, {color: theme.iconColor}]} />
    </TouchableOpacity>
  );
};

export default FakeButton;


