import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Button from './components/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello world!</Text>
      <Button label="Start" />
      <Text style={styles.text}>Recording</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#fff',
  },
});
