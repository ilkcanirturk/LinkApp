import {FlatList} from 'react-native';
import React from 'react';
import {contactDataList} from '../data/ContactDataList';
import ContactListItem from './ContactListItem';
const ContactList = () => {
  return (
      <FlatList
        data={contactDataList}
        renderItem={({ item, index })=> <ContactListItem key={index} contact={item} />}
      />
  );
};

export default ContactList;
