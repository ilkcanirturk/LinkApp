import { StyleSheet } from "react-native";

export default StyleSheet.create({
  messageAreaStyle: {
    height: "70%",
    paddingLeft: 10,
    paddingRight: 10,
  },
  sendTextStyle: {
    alignItems: "flex-end",
  },
  messageTextStyle: {
    minWidth: 70,
    padding: 8,
    maxWidth: "80%",
    borderWidth: 1,
    borderRadius: 30,
    marginTop: 10,
  },
  textStyle: {
    alignSelf: "center",
    color: "black",
    padding: 6,
    fontWeight: "400",
    fontSize: 16,
    marginBottom: 8,
  },
  dateStyle: {
    color: "black",
    position: "absolute",
    right: 16,
    bottom: 4,
    fontSize: 12,
  },
});
