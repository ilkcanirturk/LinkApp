import {TextInput, TouchableOpacity, View} from 'react-native';
import styles from './MessageInputArea.style';
import React, { useContext, useState } from 'react';
import Icon from '@expo/vector-icons/Ionicons';
import { ChatListContext } from '../contexts/chatContext';
import { UserContext } from '../contexts/userContext';


//Message Input Area component.
const MessageInputArea = ({contact}) => {

   const {user} = useContext(UserContext)
   const {setChat} = useContext(ChatListContext)
   const [input, setInput] = useState("")
   const handleSendMessage = () =>{
    setChat(user?.id,contact?.id,input)
    setInput("")
   }
   
  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <TouchableOpacity>
          <Icon
            style={styles.cameraIcon}
            name="camera"
            size={30}
          />
        </TouchableOpacity>
        <TextInput style={styles.input} value={input} onChangeText={(text)=>setInput(text)} placeholder="Type your message..."></TextInput>
      </View>
      <TouchableOpacity style={styles.sendIcon} onPress={handleSendMessage}>
        <Icon name="send" size={30} color={"#5a9bc9"} />
      </TouchableOpacity>
    </View>
  );
};

export default MessageInputArea;

