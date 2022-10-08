import React, {useState} from 'react';
import {ChatListContext} from '../contexts/chatContext';

const ChatListProvider = ({children}) => {
  const [chatState, setChatState] = useState([]);
  const getOtherChats = (sender, receiver) => {
    let chatlist = chatState.filter(chat => chat.id !== sender + receiver);
    if (chatlist !== undefined) return chatlist;
    return [];
  };
  const getChat = (sender, receiver) => {
    let chat = chatState.filter(chat => chat.id === sender + receiver);
    let messageList = chat[0]?.messages;
    if (messageList !== undefined) return messageList;

    return [];
  };
  const setChat = (sender, receiver, msg) => {
    let chats = getOtherChats(sender, receiver);
    setChatState([
      ...chats,
      {
        id: sender + receiver,
        messages: [
          ...getChat(sender, receiver),
          {text: msg, timestamp: new Date()},
        ],
      },
    ]);
  };
  return (
    <ChatListContext.Provider
      value={{
        chatList: chatState,
        setChatList: setChatState,
        getChat: getChat,
        setChat: setChat,
      }}>
      {children}
    </ChatListContext.Provider>
  );
};

export default ChatListProvider;