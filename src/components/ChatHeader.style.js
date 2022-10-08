import { StyleSheet } from "react-native";

export default StyleSheet.create({
  topContainerStyle: {
    marginTop: 35,
    alignItems: "center",
    flexDirection: "row",
    height: 60,
  },
  contactNameStyle: {
    color: "white",
    fontWeight: "600",
    fontSize: 20,
    marginLeft: 8,
  },
  infoStyle: {
    flex: 1,
    left: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  rightIconsStyle: {
    flexDirection: "row",
    justifyContent: "flex-end",
    flex: 1,
    marginRight: 15,
  },
  callIcon: {
    marginRight: 20,
  },
  ppContainer: {
    marginLeft: 10,
    width: 45,
    height: 45,
    borderRadius: 30,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "gray",
  },
  ppStyle: {
    width: "100%",
    height: "100%",
  },
  chatHeaderContainer: {
    width: "100%",
  },
});
