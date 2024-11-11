import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const FirstRows = ({ handlePress }) => {
  return (
    <View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button1} onPress={() => handlePress("C")}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={() => handlePress("+/-")}>
          <Text style={styles.buttonText}>+/-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3} onPress={() => handlePress("%")}>
          <Text style={styles.buttonText}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button4} onPress={() => handlePress("/")}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.row}>
        {["7", "8", "9", "x"].map((label) => (
          <TouchableOpacity key={label} style={styles.button} onPress={() => handlePress(label)}>
            <Text style={styles.buttonText}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.row}>
        {["4", "5", "6", "-"].map((label) => (
          <TouchableOpacity key={label} style={styles.button} onPress={() => handlePress(label)}>
            <Text style={styles.buttonText}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#333',
    width: 75,
    height: 75,
    borderRadius: 37.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button1: {
    backgroundColor: '#333',
    width: 75,
    height: 75,
    borderRadius: 37.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button2: {
    backgroundColor: '#333',
    width: 75,
    height: 75,
    borderRadius: 37.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button3: {
    backgroundColor: '#333',
    width: 75,
    height: 75,
    borderRadius: 37.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button4: {
    backgroundColor: '#333',
    width: 75,
    height: 75,
    borderRadius: 37.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
});

export default FirstRows;
