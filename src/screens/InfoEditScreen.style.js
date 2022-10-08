import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        flex: 1,
      },
      topSpaceStyle: {
        width: "100%",
        height: 200,
        marginTop: -10,
        alignItems: "center",
        backgroundColor: "#e5ffff",
        borderBottomLeftRadius: 120,
        borderBottomRightRadius: 120,
        borderWidth: 3,
        borderColor: '#206D98',
        marginBottom: 50,
      },
      titleStyle: {
        fontSize: 40,
        fontWeight: "700",
        alignSelf: "center",
        marginTop: 120,
        marginBottom: 0,
      },
      textInput: {
        width: 275,
        height: 45,
        marginBottom: 10,
        fontSize: 20,
        borderWidth: 1.5,
        textAlign: "center",
        backgroundColor: "#f7f7f7",
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.44,
        shadowRadius: 3,
        elevation: 5,
      },
      buttonContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 30,
        paddingHorizontal: 52
      },
      cancelButtonStyle: {
        height: 50,
        width: 120,
        flexDirection: "row",
        backgroundColor: "#e5ffff",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        shadowColor: "black",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.41,
        shadowRadius: 5,
        elevation: 6,
      },
      saveButtonStyle: {
        height: 50,
        width: 120,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        shadowColor: "black",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.41,
        shadowRadius: 5,
        elevation: 6,
      },
      saveText: {
        paddingHorizontal: 5,
        fontSize: 24,
        fontWeight: "600",
      },
      saveIconStyle: {
        color: "#5eff73"
      },
      cancelText: {
        alignSelf: "center",
        fontSize: 24,
        marginRight: 15,
      },
      cancelIconStyle: {
        color: "black"
      },
      updateImage: {
        marginBottom: 30,
        width: 80,
        height: 80,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "#206D98",
        justifyContent: "center",
        alignItems: "center",
      },
      photo: {
        width: 60,
        height: 60,
        borderRadius: 50,
      },
      photoIcon: {
        fontSize: 36,
        color: "black",
      },
})