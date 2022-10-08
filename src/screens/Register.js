import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
  SafeAreaView
} from "react-native";
import styles from './Register.style';
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth, db } from "../../config";
import { setDoc, doc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { useToast } from "react-native-toast-notifications";
import Icon from "@expo/vector-icons/AntDesign";


const Register = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const { navigate } = useNavigation();
  const toast = useToast();

  const toastConfigWarning = {
    type: "danger",
    placement: "bottom",
    duration: 4000,
    animationType: "zoom-in",
  };
  const toastConfigSuccess = {
    type: "success",
    placement: "center",
    duration: 400,
    animationType: "slide-in",
  };

  const registerButton = () => {
    if (email == "" || phoneNumber == "" || userName == "" || password == "" || rePassword == "") {
      Alert.alert("WARNING!", "Missing information!");
    } else if (
      rePassword !== password  
    ) {
      Alert.alert("WARNING!", "Passwords do not match!");
    } else {
      handleRegister();
    }
  };

  //Register user to firebase auth.
  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (response) => {
        await setDoc(doc(db, "users", response.user.uid), {
          email: email,
          phoneNumber: phoneNumber,
          userName: userName,
          password: password,
          uid: response.user.uid,
        });
        navigate("Login");
        setEmail("");
        setPhoneNumber("");
        setUserName("");
        setPassword("");
        setPassword("");
        toast.show("Account created successfully!", toastConfigSuccess);
      })
      //Catch possible errors.
      .catch((error) => {
        switch (error.code) {
          case "auth/email-already-in-use":
            toast.show(
              "Email is already in use!", 
              toastConfigWarning
            );
            break;
          case "auth/invalid-email":
            toast.show(
              "Invalid email! Please check your informations.",
              toastConfigWarning
            );
            break;
          case "auth/weak-password":
            toast.show(
              "Password should more than 6 characters!",
              toastConfigWarning
            );
            break;
        }
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topSpaceStyle}>
        <Image
          source={require("../../assets/LinkLogo.png")}
          style={styles.logoStyle}
        />
      </View>
      <Text style={styles.titleStyle}>REGISTER</Text>
      <View style={styles.containerTextInput}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          value={email}
          onChangeText={(value) => setEmail(value)}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Phone Number"
          keyboardType="number-pad"
          value={phoneNumber}
          onChangeText={(value) => setPhoneNumber(value)}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.textInput}
          placeholder="User Name"
          value={userName}
          onChangeText={(value) => setUserName(value)}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          value={password}
          onChangeText={(value) => setPassword(value)}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password Again"
          value={rePassword}
          onChangeText={(value) => setRePassword(value)}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity
        onPress={() => registerButton()}
        style={styles.registerButton}
      >
        <Text style={styles.registerText}>Register</Text>
        <Icon style={styles.registerIconStyle} name="link" size={35}/>
      </TouchableOpacity>
      <View style={styles.bottomFooter}>
      <Text style={styles.labelStyle}>Already have an account?</Text>
      <TouchableOpacity
        onPress={() => {
          navigate("Login");
        }}
        style={styles.loginButton}
      >
        <Text style={styles.loginText}>Login     </Text>
        <Icon name="login" size={24} style={styles.loginIconStyle} />
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Register;


