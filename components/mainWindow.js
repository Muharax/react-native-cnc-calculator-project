import React, { useState } from 'react';
import { Text, TouchableOpacity, View, BackHandler, Image, ScrollView } from 'react-native';
import TolerancjaOtworow from './tolerancjaOtworow/tolerancjaOtworowIndex';
import TolerancjaWalow from './tolerancjaWalow/tolerancjaWalowIndex';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';
import ObrotyNarzedzia from './obrotyNarzedznia/obrotyNarzedznia';
import PosuwNarzedzia from './posuwNarzedzia/posuwNarzedzia';
import { useLanguage } from './settings/translations';
import slownik from './settings/pl';

function HomeScreen() {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'center', top: -10}}>
      <Image source={require('./logo.png')} />
      
    </View>
  );
}

function Settings() {
  const { language, setLanguage } = useLanguage();
  const translations = slownik[language];

  return (
      <View style={{ padding: 15, backgroundColor: '#d5d5d5', borderRadius: 7 }}>
          <Text style={{marginBottom:10}}>{translations.chooseLang}:</Text>
          <View style={{backgroundColor: '#f9f9f9', borderRadius:7}}>
            <Picker
                selectedValue={language}
                onValueChange={(itemValue) => {
                  console.log("Zmiana języka na:", itemValue);
                  setLanguage(itemValue);
                }}
            >
                <Picker.Item label="Polski" value="pl" />
                <Picker.Item label="English" value="en" />
            </Picker>
          </View>
      </View>
  );
}

function CustomButton({ onPress, title }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
}

function MainWindow() {

  const { language } = useLanguage();
  const translations = slownik[language];
  const [currentScreen, setCurrentScreen] = useState('Home');
  const [sharedState, setSharedState] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <View style={styles.btnContainer}>
          <CustomButton
            title={translations.home}
            onPress={() => setCurrentScreen('Home')}
          />
          <CustomButton
            title={translations.tools}
            onPress={() => setCurrentScreen('Pasowania')}
          />
          <CustomButton
            title={translations.settings}
            onPress={() => setCurrentScreen('Settings')}
          />
          {/* <CustomButton
            title="Info"
            onPress={() => setCurrentScreen('Info')}
          /> */}
          <CustomButton
            title={translations.exit}
            onPress={() => BackHandler.exitApp()}
          />
        </View>
      </View>

      <ScrollView style={styles.content}>
        {currentScreen === 'Home' && <HomeScreen />}
        {currentScreen === 'Pasowania' && (
          <View>
            <TolerancjaOtworow/>
            <TolerancjaWalow />
            <ObrotyNarzedzia setSharedState={setSharedState} />
            <PosuwNarzedzia sharedState={sharedState} setSharedState={setSharedState}/>
          </View>
        )}
        {currentScreen === 'Settings' && <Settings />}
      </ScrollView>
    </View>
  );
}

export default MainWindow;
