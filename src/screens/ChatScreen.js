import {StyleSheet, View} from 'react-native';
import React, { useContext } from 'react';
import {useRoute} from '@react-navigation/native';
import Header from '../components/ChatHeader';
import MessageArea from '../components/MessageArea';
import MessageInputArea from '../components/MessageInputArea';
import { ChatListContext } from '../contexts/chatContext';
import { UserContext } from '../contexts/userContext';
import { useSelector } from "react-redux";

const ChatScreen = () => {
  const {theme} = useSelector((state) => state.theme);
  const route = useRoute();
  const {contact} = route?.params;
  const {user} = useContext(UserContext)
  const {getChat} = useContext(ChatListContext)

  return (
    <View
      style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <Header contact={contact} />
      <MessageArea messages={getChat(user?.id, contact?.id)} />
      <MessageInputArea contact={contact} />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});