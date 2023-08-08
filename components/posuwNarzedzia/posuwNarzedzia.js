import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles';

function PosuwNarzedzia({sharedState, setSharedState}) {
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
    
      setInputValueWynik(posuw.toFixed(2));  // Use toFixed(2) to round to 2 decimal places
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
            title="Posuw narzędzia [F]"
            onPress={() => setObrotyNarzędzia(!ObrotyNarzędzia)}
          />
          {ObrotyNarzędzia && <View>
            <View style={styles.predkoscSkrawania}>

              <View style={{flexDirection:'row', }}>
                <View>
                  <Text>Obroty narzędzia [obr/min]</Text>
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
                      title="Pobierz"
                      style={{marginTop: 20, marginLeft:-50}}
                      onPress={pobierzObrotyNarzedzia}
                  ></CustomButton>
                </View>
              </View>

              <View>
                <Text>Ilość ostrzy [Z]</Text>
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
                <Text>Posuw na ząb [fz]</Text>
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
                <Text style={styles.fs}>Posuw [f] </Text>
                <Text style={styles.fW}>{inputValueWynik === "" ? "..." : inputValueWynik}</Text>
                <Text style={styles.fs}> [mm/min]</Text>
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

export default PosuwNarzedzia;
