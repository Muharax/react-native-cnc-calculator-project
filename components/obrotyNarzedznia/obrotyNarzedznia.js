import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import { tablicaTolerancjiOtworow } from './tablicaTolerancjiOtworow';
import styles from '../styles';



function ObrotyNarzedzia({setSharedState}) {
    // const [selectedValue, setSelectedValue] = useState("H7");
    const [inputValueSR, setInputValueSR] = useState("");
    const [inputValuePS, setInputValuePS] = useState("");
    const [inputValueOB, setInputValueOB] = useState("");

    const resetInputs = () => {
      setInputValueSR("");
      setInputValuePS("");
      setInputValueOB("");
    }
    

    const obliczeniaPredkosci = () => {
      const pi = 3.14;
      const sr = parseFloat(inputValueSR);
      const ps = parseFloat(inputValuePS);
    
      if (isNaN(sr) || isNaN(ps)) {
        // Either inputValueSR or inputValuePS is not a number, cannot perform calculation
        return;
      }

      const obroty = (ps * 1000) / (pi * sr);
    
      const obrotyRounded = obroty.toFixed(0);
      setInputValueOB(obrotyRounded);
      setSharedState(obrotyRounded);

    }

    useEffect(() => {
      obliczeniaPredkosci();
    }, [inputValueSR, inputValuePS]);


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
            title="Obroty narzędzia [N]"
            onPress={() => setObrotyNarzędzia(!ObrotyNarzędzia)}
          />
          {ObrotyNarzędzia && <View>
            <View style={styles.predkoscSkrawania}>

              <View>
                <Text>Średnica narzędzia [mm]</Text>
                <TextInput
                  keyboardType='numeric'
                  editable
                  maxLength={10}
                  // placeholder='np. 70'
                  style={styles.input}
                  onChangeText={setInputValueSR}
                  value={inputValueSR}
                />
              </View>

              <View>
                <Text>Prędkość skrawania [m/min]</Text>
                <TextInput
                  keyboardType='numeric'
                  editable
                  maxLength={10}
                  // placeholder='np. 70'
                  style={styles.input}
                  onChangeText={setInputValuePS}
                  value={inputValuePS}
                />
              </View>

              <View style={styles.obrotyWynik}>
                <Text style={styles.fs}>Obroty </Text>
                <Text style={styles.fW}>{inputValueOB === "" ? "..." : inputValueOB}</Text>
                <Text style={styles.fs}> [obr/min]</Text>
                <CustomButton 
                    title="Reset"
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

export default ObrotyNarzedzia;