import React, { useEffect, useState } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from "react-native";
import styles from './InfoEditScreen.style';
import { useDispatch, useSelector } from "react-redux";
import { auth, db } from "../../config";
import { updateEmail, updatePassword } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { doc, updateDoc } from "firebase/firestore";
import { logOut } from "../redux/store";
import Icon from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";
import uploadImageAsync from '../hooks/uploadImageAsync';

const InfoEditScreen = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const { theme } = useSelector((state) => state.theme);
  const [profilImage, setProfilImage] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [rePassword, setRePassword] = useState();
  const [localData, setLocalData] = useState();

  //  Current user email info.
  useEffect(() => {
    getLocal();
  }, []);

  const getLocal = async () => {
    const response = await AsyncStorage.getItem("userKey");
    const local = response ? JSON.parse(response) : null;
    setLocalData(local);
  };

  const handleProfileImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
      aspect: [4, 3],
      allowsEditing: true,
    });
    if (!result.cancelled) {
      const editPhotoUrl = await uploadImageAsync(result.uri);
      setProfilImage(editPhotoUrl);
      updatefireStorage(editPhotoUrl);
    }
  };
  const updatefireStorage = async (editPhotoUrl) => {
    const profileUrl = doc(db, "users", localData?.uid);
    await updateDoc(profileUrl, {
      profilUri: editPhotoUrl,
    });
  };

  const saveButton = () => {
    if (email == "" || phoneNumber == "" || userName == "" || password == "" || rePassword == "") {
      Alert.alert("WARNING!", "Missing information!");
    } else if (
      rePassword !== password  
    ) {
      Alert.alert("WARNING!", "Passwords do not match!");
    } else {
      handleSaveButton();
      Alert.alert("SUCCESS!", "Please login with new user informations.")
    }
  };

  const handleSaveButton = async () => {
    if (email && password && userName && phoneNumber && rePassword) {
      updateEmail(auth.currentUser, email)
        .then(() => {
          updatePassword(auth.currentUser, password).then(async () => {
            {
              const userUpdate = doc(db, "users", localData?.uid);
              await updateDoc(userUpdate, {
                email: email,
                phoneNumber: phoneNumber,
                userName: userName,
                password: password,
              });
            }
          });
          dispatch(logOut({}));
        })
        .catch((e) => console.log(e));
    }
  };
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          marginTop: -180,
        }}
      >
        <View  style= {styles.topSpaceStyle}>
          <Text style={[styles.titleStyle, { color: theme.textInfoColor }]}>
            EDIT INFO
          </Text>
        </View>
        <TouchableOpacity onPress={handleProfileImage} style={styles.updateImage}>
          {profilImage ? (
            <Image style={styles.photo} source={{ uri: profilImage }}/>
          ) : (
            <MaterialIcons
              style={[styles.photoIcon, { color: theme.textColor }]}
              name="add-a-photo"
            />
          )}
        </TouchableOpacity>
        <TextInput
          style={[
            styles.textInput,
            {
              color: theme.textInfoColor,
              borderColor: !email ? "#e53935" : "#4caf50",
            },
          ]}
          label="email"
          value={email}
          placeholder="Email"
          defaultValue={localData?.email}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(value) => {
            setEmail(value);
          }}
        />
        <TextInput
          style={[
            styles.textInput,
            {
              color: theme.textInfoColor,
              borderColor: !phoneNumber ? "#e53935" : "#006d41",
            },
          ]}
          label="phoneNumber"
          placeholder="Phone Number"
          value={phoneNumber}
          defaultValue={localData?.phoneNumber}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          onChangeText={(value) => {
            setPhoneNumber(value);
          }}
        />
        <TextInput
          style={[
            styles.textInput,
            {
              color: theme.textInfoColor,
              borderColor: !userName ? "#e53935" : "#006d41",
            },
          ]}
          placeholder="UserName"
          value={userName}
          defaultValue={localData?.userName}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(value) => {
            setUserName(value);
          }}
        />
        <TextInput
          style={[
            styles.textInput,
            {
              color: theme.textInfoColor,
              borderColor: !password ? "#e53935" : "#006d41",
            },
          ]}
          label="password"
          placeholder="New Password"
          value={password}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={(value) => {
            setPassword(value);
          }}
        />
        <TextInput
          style={[
            styles.textInput,
            {
              color: theme.textInfoColor,
              borderColor: !rePassword ? "#e53935" : "#006d41",
            },
          ]}
          label="rePassword"
          placeholder="New Password Again"
          value={rePassword}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={(value) => {
            setRePassword(value);
          }}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              navigate("ProfileScreen");
            }}
            style={styles.cancelButtonStyle}
          >
            <View style={{ flexDirection: "row" }}>
              <Icon style= {styles.cancelIconStyle} name="ios-chevron-back" size={45} />
              <Text style={styles.cancelText}>Cancel</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.saveButtonStyle, {backgroundColor: theme.iconColor}]}
            onPress={() => saveButton()}
          >
            <Text style={styles.saveText}>Save</Text>
            <Icon style={styles.saveIconStyle} name="checkmark-circle" size={40} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};


export default InfoEditScreen;
