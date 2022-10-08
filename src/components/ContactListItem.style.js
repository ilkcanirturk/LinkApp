import { StyleSheet } from "react-native";

export default StyleSheet.create({
    listContainerStyle: {
        borderBottomWidth: 0.75,
        borderTopWidth: 0.75,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 8,
        paddingLeft: 8,
        paddingBottom: 8,
        borderBottomLeftRadius: 45,
        borderTopLeftRadius: 45,
        borderLeftWidth: 1.5
      },
      contactsInfoStyle: {
        flexDirection: 'row',
      },
      contactsContainerStyle: {
        marginLeft: 15,
        width: '100%',
      },
      titleText: {
        fontWeight: '600',
        fontSize: 18,
        flex: 1,
      },
      imageContainer: {
        width: 60,
        height: 60,
        borderRadius: 50,
        overflow: 'hidden',
        borderWidth: 3,
      },
      ppStyle: {
        width: '100%',
        height: '100%',
      },
      numberStyle: {
        marginTop: 10,
        fontSize: 16
      }
});
