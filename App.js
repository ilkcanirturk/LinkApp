import React from "react";
import { store } from "./src/redux/store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import MainStackNav from "./src/navigation/MainStackNav";
import { NavigationContainer } from "@react-navigation/native";
import { ToastProvider } from "react-native-toast-notifications";
import ChatListProvider from './src/providers/ChatListProvider';
import UserProvider from './src/providers/UserProvider';

export default function App() {
  return (
    //Provider for App
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <ChatListProvider>
            <UserProvider>
              <ToastProvider>
                <MainStackNav />
              </ToastProvider>
            </UserProvider>
          </ChatListProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
