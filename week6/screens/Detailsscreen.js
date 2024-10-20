import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
function Detailsscreen() {
  return (
    <View style={styles.container}>
        <View style={styles.textContainer}>
      <Text style={styles.text}>Detail Screen</Text>
      </View>
      <View style={styles.boxofsearch}>
      <Icon name= 'user-md' size={50} color='lightgrey'style={styles.iconofsearch} ></Icon></View>
        <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Your Company Name</Text>
      </View>
    </View>
    
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ADD8E6',
      },
      iconofsearch:{
        marginLeft:5,
        marginRight:10,
        color:'black',
        margin: -400,
        
       },
      textContainer: {
        marginBottom: 400,
      },
      text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blue',
      },
      footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 10,
        backgroundColor: '#00BCD4',
        alignItems: 'center',
      },
      footerText: {
        color: 'white',
        fontSize: 14,
      },
  });
export default Detailsscreen;
