import React from 'react'; 
import { StyleSheet, Text, View } from 'react-native';
import Search from './components/Search'; 
import Doctors from './components/Doctors';
import Doctor2 from './components/Doctor2';
//Function
const App = () => {
  return (
    //main container
    <View style={styles.container}>
      <Search />
      <Doctors />
      <Doctor2 />
    </View>
  );
};
//stylesheet for main container
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',  // direction set
    justifyContent: 'flex-start',
    alignItems: 'center',  // Center the items 
    flex: 1,  // Ensures  container takes up the full screen
    backgroundColor:'#E8E8FF',//color
  },
});

export default App;  // export the App component
