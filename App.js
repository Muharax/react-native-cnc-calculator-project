import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import MainWindow from './components/mainWindow';
import { LanguageProvider } from './components/settings/translations';

export default function App() {
  return (
    <>
    <StatusBar style="auto" />
    <LanguageProvider>
      <MainWindow></MainWindow>
    </LanguageProvider>
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
