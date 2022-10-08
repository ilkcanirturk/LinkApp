import { StyleSheet, View } from 'react-native'
import React from 'react'
import ContactList from '../components/ContactList'
import { useSelector } from "react-redux";

const ContactScreen = () => {
  const {theme} = useSelector((state) => state.theme);
  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <ContactList/>
    </View>
  )
}

export default ContactScreen

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})