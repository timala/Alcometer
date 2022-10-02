import { StyleSheet } from "react-native";
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: Constants.statusBarHeight,
    },
    center: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      color: "darkblue",
      fontWeight: "bold",
      paddingTop: 10,
      fontSize: 50,
      marginBottom: 16
    },
    field: {
      fontWeight: 'bold',
      marginBottom: 10,
    },
    picker: {
      width: '100%'
    },
    result: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    green: {
      color: 'green',
      fontWeight: 'bold',
      paddingTop: 10,
      paddingBottom: 10,
      fontSize: 70
    },
    yellow: {
      color: 'yellow',
      fontWeight: 'bold',
      paddingTop: 10,
      paddingBottom: 10,
      fontSize: 70
    },
    red: {
      color: 'red',
      fontWeight: 'bold',
      paddingTop: 10,
      paddingBottom: 10,
      fontSize: 70
    },
  });