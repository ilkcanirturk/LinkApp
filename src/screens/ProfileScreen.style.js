import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
      },
      editContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
      },
      imageStyle: {
          backgroundColor: 'gray', 
          height: 120, 
          width: 120, 
          borderRadius: 75, 
          marginVertical: 20, 
          alignSelf: 'center'
      },
      textName: {
          fontSize: 26, 
          fontWeight: 'bold',  
          alignSelf: 'center'
      },
      containerInfo: {
          flexDirection: 'row', 
          justifyContent: 'space-around', 
          marginHorizontal: 55,
          marginTop: 5
      },
      textInfo: {
          fontSize: 16, 
      },
      editButtonStyle:{
          width: 50, 
          height: 50,
          flexDirection: 'row',
          backgroundColor: '#e5ffff', 
          justifyContent: 'center', 
          alignSelf: 'center',
          borderColor: 'black',
          borderWidth: 1.5,
          borderRadius: 50
      },
      editTextStyle: {
          justifyContent: 'center', 
          alignSelf: 'center',
          color: 'black',
          fontSize: 20,
          fontWeight: '600',
          paddingRight: 10,
          paddingLeft: 5
      },
      themeButtonStyle:{
          width: 50, 
          height: 50, 
          backgroundColor: '#e5ffff',
          flexDirection: 'row',
          justifyContent: 'center', 
          alignSelf: 'center', 
          borderTopColor: 'red',
          borderBottomColor: '#2196f3',
          borderLeftColor: 'green',
          borderRightColor: 'magenta',
          borderWidth: 1.5,
          borderRadius: 50
      },
      themeTextStyle: {
          justifyContent: 'center', 
          alignSelf: 'center',
          color: 'black',
          fontSize: 20,
          fontWeight: '600',
          paddingLeft: 5
      },
      fakeButtonGroup: {
        borderTopWidth: 1.5, 
        marginTop: 30
      },
      logoutButtonStyle: {
        width: 120, 
        height: 50,
        flexDirection: 'row',
        backgroundColor: '#ff3c39', 
        justifyContent: 'center', 
        alignSelf: 'center', 
        marginTop: 30,
        borderRadius: 20
      },
      logoutTextStyle: {
        justifyContent: 'center', 
        alignSelf: 'center',
        fontSize:  20,
        fontWeight: '600',
        paddingLeft: 5
      },
      iconStyle: {
        alignSelf: 'center'
      },
      iconStyleLogout: {
        alignSelf: 'center',
        paddingLeft: 10
      }
})