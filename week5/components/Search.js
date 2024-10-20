import React from 'react';  
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
 export default App = () => {
  return (
    //for container of search field and below text
    <View style={styles.container}>
    <View style={styles.boxofsearch}>
      <Icon name= 'search' size={20} color='lightgrey'style={styles.iconofsearch} ></Icon>
      <Text style={styles.placeholdertextforsearchbox}>search conditions, doctors...</Text>
    </View>  
    <View style={styles.container}>
    <Text style={styles.finddoctortext}>Let's Find Your Doctor</Text>
    </View>
    </View>
  );
};
//stylesheet for seachfield and below text
const styles = StyleSheet.create({
  boxofsearch:{
    backgroundColor: 'white',
    borderColor: 'white',
    borderRadius: 20,
    width: '100%',
    height: 50,
    margin: 20,
    marginTop: -300,
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
  finddoctortext:{
    fontSize:17,
    color:'black',
    fontWeight:'bold',
    margin: -1,
    paddingLeft:20,   
  }
});
