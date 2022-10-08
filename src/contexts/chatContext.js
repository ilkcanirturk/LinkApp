import { createContext } from "react";

export const ChatListContext = createContext({
  chatList: null,
  setChatList: () => {},
  setChat: () => {},
  getChat: () => {},
});