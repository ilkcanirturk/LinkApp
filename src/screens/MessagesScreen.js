import { StyleSheet, View} from 'react-native';
import React from 'react';
import ChatList from '../components/ChatList';
import { useSelector } from "react-redux";

const HomeScreen = () => {
  const {theme} = useSelector((state) => state.theme);
  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <ChatList/>
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});