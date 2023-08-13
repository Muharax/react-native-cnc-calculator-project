import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useLanguage } from '../settings/translations';
import slownik from '../settings/pl';
import styles from '../styles';

function PosuwNarzedzia({sharedState, setSharedState}) {
    const { language } = useLanguage();
    const translations = slownik[language];
    const [inputValueON, setInputValueON] = useState("");
    const [inputValueIO, setInputValueIO] = useState("");
    const [inputValuePNZ, setInputValuePNZ] = useState("");
    const [inputValueWynik, setInputValueWynik] = useState("");

    const pobierzObrotyNarzedzia = () => {
      console.log(sharedState);
      setInputValueON(sharedState);
  }

    const resetInputs = () => {
      setInputValueON("");
      setInputValueIO("");
      setInputValuePNZ("");
      setInputValueWynik("");
      setSharedState("");
    }



    const obliczeniaPosuwu = () => {
      const on = parseFloat(inputValueON);
      const io = parseFloat(inputValueIO);
      const pnz = parseFloat(inputValuePNZ);
    
      if (isNaN(on) || isNaN(io) || isNaN(pnz)) {
        // Either inputValueON, inputValueIO or inputValuePNZ is not a number, cannot perform calculation
        return;
      }

      const posuw = on * io * pnz;
    
      setInputValueWynik(posuw.toFixed(0));  // Use toFixed(2) to round to 2 decimal places
    }

    useEffect(() => {
      obliczeniaPosuwu();
    }, [inputValueON, inputValueIO, inputValuePNZ]);

    const [ObrotyNarzędzia, setObrotyNarzędzia] = useState(false);

    function CustomButton({ onPress, title, style }) {
      return (
          <TouchableOpacity onPress={onPress} style={[styles.btn, style]}>
              <Text style={styles.btnText}>{title}</Text>
          </TouchableOpacity>
      );
  }
  
  
    return (
      <View>
        <View>
          <View style={{marginBottom: 10}}>
          <CustomButton
            title={`${translations.posuwNarzedzia} [F]`}
            onPress={() => setObrotyNarzędzia(!ObrotyNarzędzia)}
          />
          {ObrotyNarzędzia && <View>
            <View style={styles.predkoscSkrawania}>

              <View style={{flexDirection:'row', }}>
                <View>
                  <Text>{`${translations.obr} [${translations.jednostka}]                 `}</Text>
                  <TextInput
                    keyboardType='numeric'
                    editable
                    maxLength={10}
                    style={styles.input}
                    onChangeText={setInputValueON}
                    value={inputValueON}
                  />
                </View>
                <View>
                  <CustomButton 
                      title={`${translations.pobierz}`}
                      style={{marginTop: 20, marginLeft:-50}}
                      onPress={pobierzObrotyNarzedzia}
                  ></CustomButton>
                </View>
              </View>

              <View>
                <Text>{`${translations.iloscOstrzy}`} [Z]</Text>
                <TextInput
                  keyboardType='numeric'
                  editable
                  maxLength={10}
                  style={styles.input}
                  onChangeText={setInputValueIO}
                  value={inputValueIO}
                />
              </View>

              <View>
                <Text>{`${translations.posuwNaZab}`} [fz]</Text>
                <TextInput
                  keyboardType='numeric'
                  editable
                  maxLength={10}
                  style={styles.input}
                  onChangeText={setInputValuePNZ}
                  value={inputValuePNZ}
                />
              </View>

              <View style={styles.obrotyWynik}>
                <Text style={styles.fs}>{`${translations.posuw}`} [f] </Text>
                <Text style={styles.fW}>{inputValueWynik === "" ? "..." : inputValueWynik}</Text>
                <Text style={styles.fs}> [mm/min]</Text>
                <CustomButton 
                    title={`${translations.btnReset}`}
                    style={{marginLeft: 10}}
                    onPress={resetInputs}
                    >
                </CustomButton>
              </View>

            </View>
          </View>}
          </View>
        </View>
      </View>
    );
}

export default PosuwNarzedzia;
