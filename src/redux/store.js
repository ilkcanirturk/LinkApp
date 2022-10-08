import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import darkTheme from "../constants/dark";
import lightTheme from "../constants/light";


//Theme Mode 
const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: lightTheme,
  },
  reducers: {
    handleLightTheme: state => {
      return {
        theme: state.theme === lightTheme ? darkTheme : lightTheme,
      };
    },
    handleDarkTheme: state => {
      return {
        theme: state.theme === darkTheme ? lightTheme : darkTheme,
      };
    },
  },
});
//User management.
const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {},
  },
  reducers: {
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    setUser: (state, action) => {
      state.userInfo = action.payload;
    },
    updateUser: (state, action) => {
      state.userInfo = action.payload;
    },
    logOut: (state, action) => {
      AsyncStorage.removeItem("userKey");
      state.userInfo = action.payload;
    },
  },
});


export const { handleLightTheme, handleDarkTheme} = themeSlice.actions;
export const { addUser, setUser, updateUser, sigIn, logOut } = userSlice.actions;

//combine reducers
export const store = configureStore({
  reducer: combineReducers({
    theme: themeSlice.reducer,
    user: userSlice.reducer
  }),
});