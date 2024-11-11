import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import FirstRows from './components/FirstRows';
import LastRows from './components/LastRows';
const App = () => {
  const [input, setInput] = useState("0");
  const handlePress = (value) => {
    if (value === "+/-") {
      
      setInput((prevInput) => (prevInput.startsWith('-') ? prevInput.substring(1) : '-' + prevInput));
    } else if (value === "C") {
      setInput("0"); 
    } else if (input === "0" && value !== "C") {
      setInput(value); 
    } else if (value === "=") {
      try {
        const result = eval(input); 
        setInput(result.toString());
      } catch (error) {
        setInput("");
      }
    } else {
      setInput(input + value); 
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.input}>{input}</Text>
      <FirstRows handlePress={handlePress} />
      <LastRows handlePress={handlePress} setInput={setInput} input={input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 10,
    justifyContent: 'flex-end',
  },
  input: {
    color: '#fff',
    fontSize: 48,
    textAlign: 'right',
    marginBottom: 20,
  },
});

export default App;
