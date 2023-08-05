import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainWindow from './components/mainWindow';

export default function App() {
  return (
    <>
    <StatusBar style="auto" />
    <MainWindow></MainWindow>
    </>
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
