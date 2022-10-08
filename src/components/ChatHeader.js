import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './ChatHeader.style';
import React from 'react';
import Icon from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from "react-redux";


//Header component for Chat Screen.
const Header = ({contact}) => {
    const {theme} = useSelector((state) => state.theme);
    const navigation=useNavigation()
  return (
    <View style={[styles.chatHeaderContainer, {backgroundColor: theme.iconColor}]}>
      <View style={styles.topContainerStyle}>
        <View style={styles.infoStyle}>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Icon
              name="chevron-back"
              size={40}
              color= {theme.chatIconColor}
            />
          </TouchableOpacity>
          <View style={styles.ppContainer}>
            <Image
              style={styles.ppStyle}
              source={{
                uri: contact?.ppURL,
              }}
            />
          </View>
          <Text style={styles.contactNameStyle}>
            {contact?.firstName}
          </Text>
        </View>
        <View style={styles.rightIconsStyle}>    
          <TouchableOpacity>
            <Icon
              style={styles.callIcon}
              name="call"
              size={26}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="videocam" size={26} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;
