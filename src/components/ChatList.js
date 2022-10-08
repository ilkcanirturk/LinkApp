import { FlatList } from 'react-native'
import React, { useContext } from 'react'
import { ChatListContext } from '../contexts/chatContext'
import ChatListItem from './ChatListItem'

const ChatList = () => {
    const {chatList} = useContext(ChatListContext)
    
  return (
    <FlatList
    inverted
    data={chatList}
    renderItem={({ item, index })=> <ChatListItem key={index} chat={item} />}
  />
  )
}

export default ChatList
