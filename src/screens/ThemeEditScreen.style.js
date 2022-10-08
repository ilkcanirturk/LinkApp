import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
      },
      config: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 270,
        alignItems: "center",
      },
      buttonLight: {
        display: "flex",
        height: 80,
        width: 120,
        backgroundColor: "white",
        borderRadius: 25,
        borderColor: "#ffecb3",
        borderWidth: 2,
        marginLeft: 20,
        flexDirection: "row",
      },
      textLight: {
        display: "flex",
        alignSelf: "center",
        marginTop: 13,
        color: "black",
        fontSize: 28,
        paddingLeft: 20,
      },
      iconLight: {
        color: "orange",
      },
      buttonDark: {
        display: "flex",
        height: 80,
        width: 120,
        marginRight: 20,
        backgroundColor: "#616161",
        borderRadius: 25,
        borderColor: "#ffecb3",
        borderWidth: 2,
        flexDirection: "row",
      },
      textDark: {
        display: "flex",
        alignSelf: "center",
        marginTop: 13,
        color: "white",
        fontSize: 28,
        paddingLeft: 20,
      },
      backButton: {
        marginLeft: 20,
        width: 50,
        height: 50,
        backgroundColor: "#e5ffff",
        borderRadius: 25,
        borderTopColor: "red",
        borderBottomColor: "#2196f3",
        borderLeftColor: "green",
        borderRightColor: "magenta",
        borderWidth: 1.5,
      }
})