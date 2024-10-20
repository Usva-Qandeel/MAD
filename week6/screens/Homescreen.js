import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image,StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
function Homescreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.boxofsearch}>
      <Icon name= 'search' size={20} color='lightgrey'style={styles.iconofsearch} ></Icon>
      <Text style={styles.placeholdertextforsearchbox}>search...</Text>
    </View> 
      <View>
    <StatusBar barStyle="light-content" hidden={false} backgroundColor="#00BCD4"></StatusBar>
    </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Welcome to our shop!</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.customButton} // Now backgroundColor is managed in StyleSheet
          onPress={() => navigation.navigate('Details')}
        >
          <Text style={styles.buttonText}>Go to Details</Text>
        </TouchableOpacity>
        <Image
          style={styles.image}
          source={{
            uri: 'https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?cs=srgb&dl=pexels-padrinan-255379.jpg&fm=jpg',
          }}
        />
      </View>
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
  boxofsearch:{
    backgroundColor: 'white',
    borderColor: 'white',
    borderRadius: 20,
    width: 300,
    height: 50,
    marginTop: -150,
    borderWidth: 2,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  iconofsearch:{
   marginLeft:5,
   marginRight:10,
  },
  placeholdertextforsearchbox: {
    fontSize: 17,  
    color:'lightgrey',
  },
  textContainer: {
    marginBottom: 80,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
    marginBottom: 10,
    paddingTop:100,
  },
  buttonContainer: {
    height: 100,
    width: 150,
    margin: 40,
  },
  customButton: {
    backgroundColor: 'green', // Button background color now defined in StyleSheet
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white', // Button text color
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: 90,
    height: 90,
    margin: 10,
    marginTop: -140,
    paddingLeft: 130,
    alignItems: 'center',
    justifyContent: 'center',
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

export default Homescreen;
