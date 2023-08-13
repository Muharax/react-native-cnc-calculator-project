import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { tablicaTolerancjiOtworow } from './tablicaTolerancjiOtworow';
import { useLanguage } from '../settings/translations';
import slownik from '../settings/pl';
import styles from '../styles';



function TolerancjaOtworow() {
    const { language } = useLanguage();
    const translations = slownik[language];
    const [selectedValue, setSelectedValue] = useState("H7");
    const [inputValue, setInputValue] = useState("");
    const [showOtworu, setShowOtworu] = useState(false);

    function CustomButton({ onPress, title }) {
        return (
          <TouchableOpacity onPress={onPress} style={styles.btn}>
            <Text style={styles.btnText}>{title}</Text>
          </TouchableOpacity>
        );
      }
  
    const znajdzWartosc = (input, selectedValue) => {
      const tolerancje = tablicaTolerancjiOtworow[selectedValue];
      if (!tolerancje) {
        return ["nieznana", "nieznana"];
      }
    
      const inputNum = parseInt(input);
      for(let i = 0; i < tolerancje.length; i++) {
        if (tolerancje[i].przedzial.includes(inputNum)) {
          return tolerancje[i].wartosc;
        }
      }
      return ["...", "..."];
    };
   
  
    const wartosc = znajdzWartosc(inputValue, selectedValue);
  
    return (
      <View>
        <View>
          <View style={{marginBottom: 10}}>
          <CustomButton
            title={translations.hole}
            onPress={() => setShowOtworu(!showOtworu)}
          />
          {showOtworu && <View>
            <View style={styles.wLinii}>
              <Text style={{fontSize:30}}>{'ø'}</Text>
              <TextInput
                keyboardType='numeric'
                editable
                maxLength={10}
                placeholder='70'
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
                  
                {Object.keys(tablicaTolerancjiOtworow).map((item) => (
                  <Picker.Item key={item} label={item} value={item} />
                ))}
  
                </Picker>
              </View>
            </View>
  
            <View style={styles.srodek}>
  
              <View style={styles.naglowekOtworow}>
                <Text style={styles.wartosciii}>
                  {`${translations.wartosc} `}
                  <Text style={{fontWeight: 'bold' }}>{`${inputValue} ${selectedValue}`}</Text>
                  {` ${translations.tolerancja}`}
                </Text>
              </View>
              
              <View>
                <Text style={styles.superscript}>
                  <Text style={{fontWeight: 'bold'}}>
                        {`es: `}
                    </Text>
                  {`${wartosc[0]} mm `}
                </Text>
                <Text style={styles.subscript}>
                  <Text style={{fontWeight: 'bold'}}>
                      {`ei: `}
                  </Text>
                  {`${wartosc[1]} mm `}
                </Text>
              </View>
  
            </View>
  
  
            <View>
              <Text>
                <Text style={{fontWeight: 'bold'}}>{`MAX: `}</Text>
                {`${inputValue ? `${Number(inputValue) + Number(wartosc[0])} mm` : '...'}`}
              </Text>
              <Text>
                <Text style={{fontWeight: 'bold'}}>{`MIN: `}</Text>
                {`${inputValue ? `${Number(inputValue) + Number(wartosc[1])} mm` : '...'}`}
              </Text>
  
            </View>
  
          </View>}
          </View>
 
        </View>
      </View>
    );
  }

export default TolerancjaOtworow;