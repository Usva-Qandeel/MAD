
import { StyleSheet, Text, View,Button } from 'react-native';
import { useEffect,useState } from 'react';
import { counterContext } from './context/context';
export default function App() {

  const [count , setCount]=useState(0);
//case1
  useEffect(()=>{console.log('i am case 1 i will show once the component is rendered')},[])
   //case 2 
   useEffect(()=>{
    console,log('value of count is changes'+ count )
   },[count])
   //case 3 
   useEffect(()=>{console.log('run an add')})
  return (

    <counterContext.Provider value={count}>
    <View style={styles.container}>
      <Text>{count}</Text>
      <Button onPress={()=>{setCount(count+1)}} title='click me'></Button>
    </View>
    </counterContext.Provider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
