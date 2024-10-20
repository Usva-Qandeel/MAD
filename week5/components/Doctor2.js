import React from 'react';  
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default App = () => {
    return (
      //for last 2 boxes of container
    <View style={styles.boxcontainer}>
        <View style={styles.box3}>
            <Icon name='male' size={50} ></Icon> 
            <Text style={styles.box3text}>
                Dr. Angela Rayez                
            </Text>
            <Text style={styles.box3placeholdertext}>
                Therapist                
            </Text>
            <View style={styles.box3rating}>
                <Icon name='star' size={20} color='yellow' ></Icon>
                <Text style={styles.ratingtextofbox3}>4.8</Text>
            </View>
        </View>
        <View style={styles.box4}>
        <Icon name='female' size={50} ></Icon> 
            <Text style={styles.box4text}>
                Dr. Chris Bronte                
            </Text>
            <Text style={styles.box4placeholdertext}>
                Dentist               
            </Text>
            <View style={styles.box4rating}>
                <Icon name='star' size={20} color='yellow' ></Icon>
                <Text style={styles.ratingtextofbox4}>5.0</Text>
            </View>
        </View>
    </View>    
    );
};
//stylesheet for last 2 boxes of container
const styles = StyleSheet.create({
  boxcontainer: {
    flexDirection: 'row',
    marginTop:430,   
  },
  box3: {
    borderColor: 'white',
    backgroundColor: 'white',
    width: 165, 
    height: 200,  
    borderRadius: 15,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    marginTop:-185,
    marginLeft: -340, 
       
  },
  box3text: {
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight:'bold',
    fontSize:20,
  },
  box3placeholdertext:{
  color:'lightgrey',
  fontSize:19,
  },
  box3rating:{
  flexDirection: 'row',
  backgroundColor:'#6A0DAD',
  borderRadius:15,
  width:70,
  height:30,
  marginTop: 10,
  paddingHorizontal: 5,
  alignItems: 'center',
  justifyContent: 'center', 
  },
  ratingtextofbox3: {
    marginLeft: 5,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  box4: {
    borderColor: 'white',
    backgroundColor: 'white',
    width: 165, 
    height: 200,  
    borderRadius: 15,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin:3,
    marginTop:-185,      
  },
  box4text: {
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight:'bold',
    fontSize:20,
  },
  box4placeholdertext:{
  color:'lightgrey',
  fontSize:19,
  },
  box4rating:{
  flexDirection: 'row',
  backgroundColor:'#6A0DAD',
  borderRadius:15,
  width:70,
  height:30,
  marginTop: 10,
  paddingHorizontal: 5,
  alignItems: 'center',
  justifyContent: 'center',
  
  },
  ratingtextofbox4: {
    marginLeft: 5,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
