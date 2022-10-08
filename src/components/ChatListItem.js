import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from './ChatListItem.style';
import React, { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import { contactDataList } from "../data/ContactDataList";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";


//ChatList item for displaying users and messages.
const ChatListItem = ({ chat }) => {
  //For theme change and informations.
  const { theme } = useSelector((state) => state.theme);
  const { id, messages } = chat;
  //useContext for manage user data.
  const { user } = useContext(UserContext);
  //Filter for matching with contact id.
  const contact = contactDataList.filter(
    (person) => id == user?.id + person?.id
  )[0];
  const navigation = useNavigation();
  const goToChatScreen = () => {
    navigation.navigate("ChatScreen", { contact });
  };
  return (
    <TouchableOpacity onPress={goToChatScreen}>
      <View
        style={[
          styles.messageListItemContainer,
          { borderColor: theme.borderColor },
        ]}
      >
        <View
          style={[styles.imageContainer, { borderColor: theme.borderColor }]}
        >
          <Image
            style={styles.ppStyle}
            source={{
              uri: contact?.ppURL,
            }}
          />
        </View>
        <View style={styles.messageListItemInfoStyle}>
          <View style={styles.messageListItemStyle}>
            <Text style={[styles.contactNameStyle, { color: theme.textColor }]}>
              {contact?.firstName}
            </Text>
            <Text
              style={[styles.messageListDateStyle, { color: theme.textColor }]}
            >
              {messages.length === 1
                ? new Date(messages[0].timestamp).getHours() +
                  ":" +
                  new Date(messages[0].timestamp).getMinutes()
                : new Date(messages[messages.length - 1].timestamp).getHours() +
                  ":" +
                  new Date(
                    messages[messages.length - 1].timestamp
                  ).getMinutes()}
            </Text>
          </View>
          <View>
            <Text
              numberOfLines={1}
              style={[styles.lastMessageStyle, { color: theme.textColor }]}
            >
              {messages.length === 1
                ? messages[0].text
                : messages[messages.length - 1].text}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatListItem;
