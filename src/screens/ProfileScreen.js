import { Text, View, Image, Pressable, SafeAreaView } from 'react-native';
import styles from './ProfileScreen.style';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/store";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from '../../config';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons from  '@expo/vector-icons/Ionicons';
import FakeButton from '../components/FakeButton';
import * as ImagePicker from "expo-image-picker";
import uploadImageAsync from '../hooks/uploadImageAsync';
import { TouchableOpacity } from 'react-native-gesture-handler';


const ProfileScreen = () => {

  const { navigate } = useNavigation();
  const {theme} = useSelector((state) => state.theme);
  const [localData, setLocalData] = useState();
  const [profilImage, setProfilImage] = useState();
  const dispatch = useDispatch();

  //Deletes current user from Async storage after the logout.
  const handleLogOut = () => {
    dispatch(logOut({}));
  };
  useEffect(() => {
    getLocal();
  }, []);

  const getLocal = async () => {
    const response = await AsyncStorage.getItem("userKey");
    const local = response ? JSON.parse(response) : null;
    const userDoc = await doc(db, "users", local.uid);
    const userRef = await getDoc(userDoc);
    setProfilImage(userRef.data().profilUri);
    setLocalData(userRef.data());
  };
  //Pick image from phone gallery.
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
      aspect: [4, 3],
      allowsEditing: true,
    });
    if (!result.cancelled) {
      const photoURL = await uploadImageAsync(result.uri);
      setProfilImage(photoURL);
      handleSubmitProfile(photoURL);
    }
  };
  const handleSubmitProfile = async (photoURL) => {
    const profilUpdate = doc(db, "users", localData?.uid);
    await updateDoc(profilUpdate, {
      profilUri: photoURL,
    });
    AsyncStorage.setItem("userKey", JSON.stringify(photoURL));
  };

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <View style={styles.editContainer}>
      {/* Navigates to other screens. */}
        <Pressable onPress={() => navigate('ThemeEditScreen')} style={styles.themeButtonStyle}>
          <Ionicons name="color-palette-outline" size= {30} style={styles.iconStyle}/>
        </Pressable>
        <Pressable onPress={() => navigate('InfoEditScreen')} style={styles.editButtonStyle}>
          <Ionicons name="settings-outline" size= {30} style={styles.iconStyle}/>
        </Pressable>
      </View> 
      <TouchableOpacity onPress={pickImage}>
        <Image style={styles.imageStyle} source={require('../../assets/geralt.jpg')}/>
      </TouchableOpacity>
      <Text style={[styles.textName, {color: theme.textColor}]}>{localData?.userName}</Text>
      <Text style={[styles.textName, {color: theme.textColor}]}>{localData?.phoneNumber}</Text>
      <View style= {styles.containerInfo}>
        <Text style= {[styles.textInfo, {color: theme.textColor}]}>
            {localData?.email}
        </Text>
      </View>
      <View style={[styles.fakeButtonGroup, {borderTopColor: theme.borderColor}]}>
        <FakeButton nameIcon={"world-o"} text= {"Language"} size={"22"}/>
        <FakeButton nameIcon={"shield"} text= {"Security"} size={"22"}/>
        <FakeButton nameIcon={"star"} text= {"Starred Messages"} size={"22"}/>
        <FakeButton nameIcon={"database"} text= {"Data"} size={"22"}/>
        <FakeButton nameIcon={"locked"} text= {"Privacy"} size={"22"}/>
        <FakeButton nameIcon={"bell-alt"} text= {"Notifications"} size={"22"}/>
      </View>
      <Pressable onPress={handleLogOut} style={styles.logoutButtonStyle}>
        <Text style={[styles.logoutTextStyle, {color: theme.textColor}]}>Logout</Text>
        <Ionicons name="exit-outline" size= {30} style={[styles.iconStyleLogout, {color: theme.textColor}]}/>
      </Pressable>
    </SafeAreaView>
  )
}

export default ProfileScreen
