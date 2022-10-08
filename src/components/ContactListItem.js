import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './ContactListItem.style';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from "react-redux";

const ContactListItem = ({contact}) => {
  //For theme change and informations.
  const {theme} = useSelector((state) => state.theme);
  const { firstName, ppURL, phoneNumber } = contact;

  //Navigation
  const navigation=useNavigation()

  const handleNavigateToChat = () =>{
    navigation.navigate('ChatScreen', {contact})
  }
  
  return (
    <TouchableOpacity onPress={handleNavigateToChat}>
      <View style={[styles.listContainerStyle, {borderColor: theme.borderColor}]}>
        <View style={[styles.imageContainer, {borderColor: theme.borderColor}]}>
          <Image
            style={styles.ppStyle}
            source={{
              uri: ppURL
            }}
          />
        </View>
        <View style={styles.contactsContainerStyle}>
          <View style={styles.contactsInfoStyle}>
            <Text style={[styles.titleText, {color: theme.textColor}]}>
              {firstName}
            </Text>
          </View>
          <Text style={[styles.numberStyle, {color: theme.iconColor}]}>{phoneNumber}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ContactListItem;


  