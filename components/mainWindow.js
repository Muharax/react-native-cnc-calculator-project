import React, { useState } from 'react';
import { Text, TouchableOpacity, View, BackHandler, Image, ScrollView } from 'react-native';
import TolerancjaOtworow from './tolerancjaOtworow/tolerancjaOtworowIndex';
import TolerancjaWalow from './tolerancjaWalow/tolerancjaWalowIndex';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';
import ObrotyNarzedzia from './obrotyNarzedznia/obrotyNarzedznia';
import PosuwNarzedzia from './posuwNarzedzia/posuwNarzedzia';

function HomeScreen() {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'center', top: -10}}>
      <Image source={require('./logo.png')} />
      
    </View>
  );
}

function Settings() {
  const [selectedLanguage, setSelectedLanguage] = useState("PL");

  return (
    <View>
      <Text>Language</Text>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
      >
        <Picker.Item label="Polski" value="PL" />
        <Picker.Item label="English" value="PL" />
        
      </Picker>
      <CustomButton
        title="Zapisz"
        onPress={() => {
          console.log('Button pressed');
        }}
      />
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
  
  const [currentScreen, setCurrentScreen] = useState('Home');
  const [sharedState, setSharedState] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <View style={styles.btnContainer}>
          <CustomButton
            title="Home"
            onPress={() => setCurrentScreen('Home')}
          />
          <CustomButton
            title="Pasowania"
            onPress={() => setCurrentScreen('Pasowania')}
          />
          <CustomButton
            title="Settings"
            onPress={() => setCurrentScreen('Settings')}
          />
          {/* <CustomButton
            title="Info"
            onPress={() => setCurrentScreen('Info')}
          /> */}
          <CustomButton
            title="Exit"
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
