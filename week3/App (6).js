import {View,Text, StyleSheet} from 'react-native'
import Header from './components/header';
export default function App() {
  return (
    <>
    <Header name="cat header"></Header>
    <Header name="dog header"></Header>
    <Header name="abc header"></Header>
    <Header name="sjs header"></Header>

<View style={styles.container}>
  <Text style={styles.textBox}>Hello world</Text>
</View>

</>
  );
}

const styles=StyleSheet.create(
{
  container:{
    display:'flex',
    flex:1, 
    justifyContent:'center', 
    alignItems:'center',
    backgroundColor:'black'

  },
  textBox:
  {
    color:'red', 
    backgroundColor:'purple'

  }
}
);

