import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

export default function App() {

  const [goal, setGoal] = useState('');
  const [goals, setGoals] = useState(['Learn React Native']);

  const textGoal = enteredText => {
    setGoal(enteredText);
  };

  const addGoal = () => {
    setGoals(currentGoals => [...currentGoals, goal]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput 
          onChangeText={textGoal}
          style={styles.input} 
          placeholder="Enter Goal"
          value={goal}
        />
        <Button onPress={addGoal} title="Add"/>
      </View>
      <ScrollView>
        {goals.map((goal, index) => 
          <View key={index} style={styles.goal}> 
            <Text> 
              {goal} 
            </Text> 
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  input: {
    border: 'black',
    borderWidth: 1,
    width: '80%',
    padding: 10,
  },

  goal: {
    padding: 10,
    backgroundColor: '#ccc',
    marginVertical: 10,
    borderColor: 'black',
    borderWidth: 1,
    width: '80%'
  }

});
