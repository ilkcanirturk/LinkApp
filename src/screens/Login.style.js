import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: 10,
        backgroundColor: "#b2dfdb",
      },
      topSpaceStyle: {
        width: "100%",
        height: 200,
        marginTop: -50,
        alignItems: "center",
        backgroundColor: "#e5ffff",
        borderBottomLeftRadius: 120,
        borderBottomRightRadius: 120,
        borderWidth: 1.5,
        borderColor: '#206D98',
        marginBottom: 50,
      },
      logoStyle: {
        height: 120,
        width: 250,
        resizeMode: "contain",
        alignSelf: "center",
        marginVertical: 50
      },
      titleStyle: {
        fontSize: 40,
        color: '#5a9bc9'
      },
      containerTextInput: {
        marginTop: 40,
        alignItems: "center",
      },
      textInput: {
        paddingHorizontal: 10,
        width: 350,
        height: 50,
        fontSize: 20,
        borderColor: "#206D98",
        borderWidth: 1.5,
        marginBottom: 10,
        textAlign: "center",
        backgroundColor: "#e5ffff",
        borderRadius: 15,
        shadowColor: "#b2dfdb",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.44,
        shadowRadius: 3,
        elevation: 5,
      },
      loginButton: {
        marginTop: 50,
        height: 65,
        width: 200,
        backgroundColor: "#5a9bc9",
        alignItems: "center",
        borderColor: "#e5ffff",
        borderWidth: 1.5,
        borderRadius: 30,
        shadowColor: "black",
        flexDirection: "row",
        justifyContent: "center",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.41,
        shadowRadius: 5,
        elevation: 6,
      },
      loginIconStyle: {
        color: "white",
        marginLeft: 20,
      },
      loginText: {
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 30,
        color: "white",
      },
      bottomFooter: {
        marginTop: 105,
        width: "100%",
        height: "100%",
        alignItems: "center",
        backgroundColor: "#206D98",
        borderTopLeftRadius: 120,
        borderTopRightRadius: 120,
        borderBottomLeftRadius: 120,
        borderBottomRightRadius: 120,
        borderWidth: 1.5,
        borderColor: '#e5ffff'
      },
      labelStyle: {
        fontWeight: "bold",
        fontSize: 16,
        color: "white",
        marginTop: 15,
      },
      registerButton: {
        marginTop: 20,
        height: 40,
        width: 150,
        flexDirection: "row",
        backgroundColor: "#e5ffff",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
        shadowColor: "black",
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowOpacity: 0.21,
        shadowRadius: 5,
        elevation: 6,
      },
      registerIconStyle: {
        color: "#206D98",
      },
      registerText: {
        fontWeight: "700",
        fontSize: 16,
        color: "#206D98",
      }
})