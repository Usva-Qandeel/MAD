import React from 'react'; 
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default App = () => {
    return (
      //container of first 2 boxes of doctor
    <View style={styles.boxcontainer}>
        <View style={styles.box1}>
            <Icon name='user' size={50} ></Icon> 
            <Text style={styles.box1text}>
                Dr. John Smith                
            </Text>
            <Text style={styles.box1placeholdertext}>
                Dermatologist                
            </Text>
            <View style={styles.box1rating}>
                <Icon name='star' size={20} color='yellow' ></Icon>
                <Text style={styles.ratingtextofbox1}>4.9</Text>
            </View>
        </View>
        <View style={styles.box2}>
        <Icon name='user-md' size={50} ></Icon> 
            <Text style={styles.box2text}>
                Dr. Anna Dinn                
            </Text>
            <Text style={styles.box2placeholdertext}>
                Psychologist               
            </Text>
            <View style={styles.box2rating}>
                <Icon name='star' size={20} color='yellow' ></Icon>
                <Text style={styles.ratingtextofbox2}>4.9</Text>
            </View>
        </View>
    </View>
    
    );
};
//stylesheet for first 2 boxes of doctor
const styles = StyleSheet.create({
  boxcontainer: {
    flexDirection: 'row',
  },
  box1: {
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
    marginLeft: -300, 
       
  },
  box1text: {
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight:'bold',
    fontSize:20,
  },
  box1placeholdertext:{
  color:'lightgrey',
  fontSize:19,
  },
  box1rating:{
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
  ratingtextofbox1: {
    marginLeft: 5,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  box2: {
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
  box2text: {
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight:'bold',
    fontSize:20,
  },
  box2placeholdertext:{
  color:'lightgrey',
  fontSize:19,
  },
  box2rating:{
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
  ratingtextofbox2: {
    marginLeft: 5,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
