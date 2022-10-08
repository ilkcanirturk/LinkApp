import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  SafeAreaView,
} from "react-native";
import styles from './Login.style';
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "@firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { auth, db } from "../../config";
import { getDoc, doc } from "firebase/firestore";
import { setUser } from "../redux/store";
import Icon from "@expo/vector-icons/AntDesign";
import { useToast } from "react-native-toast-notifications";

//Login screen.
//Toast notifications library was used for state updates and notifications.
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
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
  //Login with user email and password informations.
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        const userDoc = doc(db, "users", res.user.uid);
        const userRef = await getDoc(userDoc);
        dispatch(setUser(userRef.data()));
        AsyncStorage.setItem("userKey", JSON.stringify(userRef.data()));
        toast.show("Login successfull!", toastConfigSuccess);
      })
      //Catch possible errors.
      .catch((error) => {
        switch (error.code) {
          case "auth/user-not-found":
            toast.show(
              "User not found! Please check your information.",
              toastConfigWarning
            );
            break;
          case "auth/invalid-email":
            toast.show(
              "Invalid email! Please enter a valid email.",
              toastConfigWarning
            );
            break;
          case "auth/wrong-password":
            toast.show(
              "Wrong Password! Please check  your password.",
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
      <Text style={styles.titleStyle}>LOGIN</Text>
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
          placeholder="Password"
          value={password}
          onChangeText={(value) => setPassword(value)}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity
        onPress={() => handleLogin()}
        style={styles.loginButton}
      >
        <Text style={styles.loginText}>Login</Text>
        <Icon name="login" size={45} style={styles.loginIconStyle} />
      </TouchableOpacity>
      <View style={styles.bottomFooter}>
        <Text style={styles.labelStyle}>Don't have an account?</Text>
        <TouchableOpacity
          onPress={() => {
            navigate("Register");
          }}
          style={styles.registerButton}
        >
          <Text style={styles.registerText}>Register Now </Text>
          <Icon
            style={styles.registerIconStyle}
            name="link"
            size={24}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

