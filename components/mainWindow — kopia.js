import React, { useState } from 'react';
import { TextInput, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

function Pasowania() {
  const [selectedValue, setSelectedValue] = useState("H7");
  const [inputValue, setInputValue] = useState("");
  const [showOtworu, setShowOtworu] = useState(false);
  const [showWalu, setShowWalu] = useState(false);
  const start = 7;
  const end = 14;
  const itemsH = Array.from({length: end - start + 1}, (_, i) => `H${start + i}`);

  function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
  }



  let tablicaTolerancji = {
    H1: [
      {przedzial: range(1, 3), wartosc: [0.0008, 0]},
      {przedzial: range(4, 6), wartosc: [0.001, +0]},
      {przedzial: range(7, 10), wartosc: [0.001, +0]},
      {przedzial: range(11, 18), wartosc: [0.0012, +0]},
      {przedzial: range(19, 30), wartosc: [0.0015, +0]},
      {przedzial: range(31, 50), wartosc: [0.0015, +0]},
      {przedzial: range(51, 80), wartosc: [0.002, +0]},
      {przedzial: range(81, 120), wartosc: [0.0025, +0]},
      {przedzial: range(121, 180), wartosc: [0.0035, +0]},
      {przedzial: range(181, 250), wartosc: [0.0045, +0]},
      {przedzial: range(251, 315), wartosc: [0.006, +0]},
      {przedzial: range(316, 400), wartosc: [0.007, +0]},
      {przedzial: range(401, 500), wartosc: [0.008, +0]},
      {przedzial: range(501, 630), wartosc: [0.009, +0]},
      {przedzial: range(631, 800), wartosc: [0.010, +0]},
      {przedzial: range(801, 1000), wartosc: [0.011, +0]},
      {przedzial: range(1001, 1250), wartosc: [0.013, +0]},
      {przedzial: range(1251, 1600), wartosc: [0.015, +0]},
      {przedzial: range(1601, 2000), wartosc: [0.018, +0]},
      {przedzial: range(2001, 2500), wartosc: [0.022, +0]},
      {przedzial: range(2501, 3150), wartosc: [0.025, +0]},
    ],
    H6: [
      {przedzial: [1,2,3], wartosc: [0.006, 0]},
      {przedzial: [4,5,6], wartosc: [0.008, +0]},
      {przedzial: [7,8,9,10], wartosc: [0.009, +0]},
    ],
    H7: [
      {przedzial: [1,2,3], wartosc: [0.010, 0]},
      {przedzial: [4,5,6], wartosc: [0.012, +0]},
      {przedzial: [7,8,9,10], wartosc: [0.015, +0]},
    ],
    H8: [
      {przedzial: [1,2,3], wartosc: [0.014, 0]},
      {przedzial: [4,5,6], wartosc: [0.018, 0]},
      {przedzial: [7,8,9,10], wartosc: [0.022, +0]},
    ],
    H9: [
      {przedzial: [1,2,3], wartosc: [0.025, 0]},
      {przedzial: [4,5,6], wartosc: [0.030, 0]},
      {przedzial: [7,8,9,10], wartosc: [0.036, +0]},
    ],
    H10: [
      {przedzial: [1,2,3], wartosc: [0.030, 0]},
      {przedzial: [4,5,6], wartosc: [0.048, 0]},
    ],
    H11: [
      {przedzial: [1,2,3], wartosc: [0.030, 0]},
      {przedzial: [4,5,6], wartosc: [0.048, 0]},
    ],
    H12: [
      {przedzial: [1,2,3], wartosc: [0.030, 0]},
      {przedzial: [4,5,6], wartosc: [0.048, 0]},
    ],

  };
  


  const znajdzWartosc = (input, selectedValue) => {
    const tolerancje = tablicaTolerancji[selectedValue];
    if (!tolerancje) {
      return ["nieznana", "nieznana"]; // albo jakaś inna domyślna wartość
    }
  
    const inputNum = parseInt(input);
    for(let i = 0; i < tolerancje.length; i++) {
      if (tolerancje[i].przedzial.includes(inputNum)) {
        return tolerancje[i].wartosc;
      }
    }
    return ["b/d", "b/d"]; // albo jakaś inna domyślna wartość
  };
  

  const onInputChange = (value) => {
    setInputValue(value);
  };

  const wartosc = znajdzWartosc(inputValue, selectedValue);


  return (
    <View>
      <View>
        <CustomButton
          title="Tolerancja otworu"
          onPress={() => setShowOtworu(!showOtworu)}
        />
        {showOtworu && <View>
          <View style={styles.wLinii}>
            <Text>{'fi'}</Text>
            <TextInput
              keyboardType='numeric'
              editable
              maxLength={10}
              placeholder='np. 70'
              style={styles.input}
              onChangeText={setInputValue}
              value={inputValue}
            />
            <View style={styles.select}>
              <Picker
                style={styles.samSelect}
                selectedValue={selectedValue}
                onValueChange={(itemValue) => setSelectedValue(itemValue)}
              >
                
              {Object.keys(tablicaTolerancji).map((item) => (
                <Picker.Item key={item} label={item} value={item} />
              ))}

              </Picker>
            </View>
          </View>

          <View style={styles.srodek}>

            <View style={styles.naglowekOtworow}>
              <Text style={styles.wartosciii}>
                  {`Wartość: ${inputValue}${selectedValue} tolerancja `}
              </Text>
            </View>
            
            <View>
              <Text style={styles.superscript}>
                 {`${wartosc[0]} μm `}
              </Text>
              <Text style={styles.subscript}>
                {`${wartosc[1]} μm `}
              </Text>
            </View>


            {/* <Text style={styles.subscript}>
                {`MAX${inputValue}.0${wartosc[0]} `}
                {`MIN${inputValue}.0${wartosc[0]} `}
            </Text> */}

          </View>

        </View>}




















































        <CustomButton
          title="Tolerancja wału"
          onPress={() => setShowWalu(!showWalu)}
        />
        {showWalu && <View style={styles.outInput}>
          <Text>{'fi'}</Text>
          <TextInput
            keyboardType='numeric'
            editable
            maxLength={10}
            placeholder='np. 70'
            style={styles.input}
            onChangeText={setInputValue}
            value={inputValue}
          />
          <View style={styles.select}>
            <Picker
              style={styles.samSelect}
              selectedValue={selectedValue}
              onValueChange={(itemValue) => setSelectedValue(itemValue)}
            >
              <Picker.Item label="h2" value="h1" />
              <Picker.Item label="h2" value="h2" />
              <Picker.Item label="h3" value="h3" />
              <Picker.Item label="h4" value="h4" />
              <Picker.Item label="h5" value="h5" />
              <Picker.Item label="h6" value="h6" />
              <Picker.Item label="h7" value="h7" />
              <Picker.Item label="h8" value="h8" />
              <Picker.Item label="h9" value="h9" />
              <Picker.Item label="h10" value="h10" />
              <Picker.Item label="h11" value="h11" />
              <Picker.Item label="h12" value="h12" />
            </Picker>
          </View>
          <Text>
            {`Wybrane wartości: ${inputValue}, ${selectedValue}`}
          </Text>
        </View>}
      </View>
    </View>
  );
}

function HomeScreen() {
  return <Text>SIEMA ENIU</Text>;
}

function SettingsScreen() {
  return (
    <View>
      <Text>Settings</Text>
      <TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        value="SIema ENIU"
        style={styles.input}
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
          <CustomButton
            title="Screen"
            onPress={() => setCurrentScreen('Settings')}
          />
        </View>
      </View>
      <View style={styles.content}>
        {currentScreen === 'Home' && <HomeScreen />}
        {currentScreen === 'Pasowania' && <Pasowania />}
        {currentScreen === 'Settings' && <SettingsScreen />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  naglowekOtworow: {
    top: -13,
  },
  wartosciii: {
    padding: 15,
  },
  srodek: {
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  wLinii: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  outInput: {
    flexDirection: 'row', // Dodane dla wyświetlenia elementów w rzędzie
    alignItems: 'center', // Dodane dla wycentrowania elementów pionowo
    borderColor: 'dark',
    borderWidth: 2,
  },
  btnW: {
    width: 50,
  },
  container: {
    flex: 1,
  },
  menu: {
    flex: 1,
    marginTop: 20,
  },
  content: {
    flex: 4,
    marginLeft: 10,
    marginRight: 10,
  },
  btn: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
  },
  btnText: {
    color: 'white',
  },
  btnContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 100,
    marginLeft: 10, // Dodana wartość
    textAlign: 'center',
  },
  select: {
    flex: 1, // Dodane dla wyświetlenia elementów w rzędzie
    justifyContent: 'center', // Dodane dla wycentrowania elementów pionowo
  },
  samSelectlect: {
    // width: '20%',
    // backgroundColor: 'grey',
  },
  container: {
    marginTop: 20,
    borderColor: 'black',
    borderWidth: 1,
    flex: 1,
    justifyContent: 'center',

  },
  tolerancjaOtworu: {


  },
  tolerancjaWalu: {


  },
  superscript: {
    fontSize: 10,
    lineHeight: 10,
    top: -10, // lub inna wartość, jeżeli potrzebujesz
  },
  subscript: {
    fontSize: 10,
    lineHeight: 20,
    bottom: -6, // lub inna wartość, jeżeli potrzebujesz
  },
});

export default MainWindow;
