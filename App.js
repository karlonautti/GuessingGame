import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GuessingGame from './components/numberGuessingApp';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>NUMBER GUESSING GAME</Text>

      < GuessingGame />
      <StatusBar style="auto" />
    </View>
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
