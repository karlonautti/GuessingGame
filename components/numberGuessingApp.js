import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

function GuessingGame() {
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [wrongGuess, setWrongGuess] = useState('');

  const handleGuess = () => {
    const userGuess = parseInt(guess, 10);
    setAttempts(attempts + 1);

    if (userGuess === randomNumber) {
      Alert.alert(`You guessed the number in ${attempts + 1} attempts!`, `The right number was ${randomNumber}`);
      resetGame();
    } else if (userGuess > randomNumber) {
      setWrongGuess('Try again! Your guess is too high.');
    } else {
      setWrongGuess('Try again! Your guess is too low.');
    }

    setGuess('');
  };

  const resetGame = () => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
    setAttempts(0);
    setGuess('');
    setWrongGuess('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>GUESS THE NUMBER!</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your guess"
        keyboardType="numeric"
        value={guess}
        onChangeText={text => setGuess(text)}
      />
      <Button title="Guess number" onPress={handleGuess} />
      {wrongGuess ? <Text style={styles.text}>{wrongGuess}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: '80%',
    paddingHorizontal: 10,
  },
  text: {
    marginTop: 20,
    fontSize: 20,
    color: 'red',
  },
});

export default GuessingGame;