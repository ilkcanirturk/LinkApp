import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: 80,
    width: "100%",
    backgroundColor: "#e5ffff",
    flexDirection: "row",
    paddingBottom: 30,
    position: "absolute",
    bottom: 0,
  },
  inputBox: {
    height: 50,
    width: "85%",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#e5ffff",
  },
  sendIcon: {
    width: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "85%",
  },
  cameraIcon: {
    marginLeft: 10,
    marginRight: 28,
    color: "#5a9bc9",
  },
});
