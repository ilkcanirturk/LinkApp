import { StyleSheet } from "react-native";

export default StyleSheet.create({
    buttonContainer: {
        width: "100%",
        height: 40,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 1.5,
      },
      iconTextGroupStyle: {
        flexDirection: "row",
        marginHorizontal: 15,
        alignItems: "center",
      },
      secondIcon: {
        marginRight: 10
      },
      textStyle: {
        fontSize: 22, 
        paddingLeft: 15
      }
})