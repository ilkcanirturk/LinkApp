import { StyleSheet } from "react-native";

export default StyleSheet.create({
  messageListItemContainer: {
    borderBottomWidth: 0.75,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 10,
  },

  messageListItemStyle: {
    flexDirection: "row",
  },
  messageListItemInfoStyle: {
    marginLeft: 10,
    width: "100%",
  },
  contactNameStyle: {
    fontWeight: "600",
    fontSize: 18,
    flex: 1,
  },
  messageListDateStyle: {
    flex: 1,
    marginLeft: 75,
    color: "black",
  },
  imageContainer: {
    width: 75,
    height: 75,
    borderRadius: 50,
    overflow: "hidden",
    borderWidth: 3,
  },
  ppStyle: {
    width: "100%",
    height: "100%",
  },
  lastMessageStyle: {
    paddingTop: 10,
    fontSize: 18,
  },
});
