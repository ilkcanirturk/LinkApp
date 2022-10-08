import {ScrollView, Text, View} from 'react-native';
import styles from './MessageArea.style';
import React from 'react';
import { useSelector } from "react-redux";

//Message Area Component for Chatscreen.
const MessageArea = ({messages}) => {
  const {theme} = useSelector((state) => state.theme);
   
  console.log(messages);
  return (
    <ScrollView style={[styles.messageAreaStyle, {backgroundColor: theme.backgroundColor}, {borderColor: theme.borderColor}]} contentContainerStyle={styles.sendTextStyle}>
      {messages?.map((message, i) => (
        <View key={i} style={[styles.messageTextStyle, {backgroundColor: theme.boxColor}, {borderColor: theme.borderColor}]}>
          <Text style={styles.textStyle}>{message?.text}</Text>
          <Text style={styles.dateStyle}>
            {new Date(message?.timestamp).getHours()}:
            {new Date(message?.timestamp).getMinutes()}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default MessageArea;

