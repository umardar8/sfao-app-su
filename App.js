import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={{ backgroundColor: '#667eb0' }}>
      <Image
        source={require("./assets/sfao-logo.png")}
        style={{
          padding: 40,
          alignItems: 'center',
        }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'top',
  },
  topbar: {
    backgroundColor: '#667eb0',
    alignItems: 'center',
    width: 360,
    height: 50,
    resizeMode: 'contain',
  }
});