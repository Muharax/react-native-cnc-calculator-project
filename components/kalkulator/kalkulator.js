import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { tablicaTolerancjiWalow } from './tablicaTolerancjiWalow';
import styles from '../styles';


const Kalkulator = () => {
  

  function CustomButton({ onPress, title }) {
    return (
      <TouchableOpacity onPress={onPress} style={styles.btn}>
        <Text style={styles.btnText}>{title}</Text>
      </TouchableOpacity>
    );
  }

  const znajdzWartosc = (input, selectedValue) => {
    const tolerancje = tablicaTolerancjiWalow[selectedValue];
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
    <View style={{marginBottom: 10}}>
        <CustomButton
          title="Kalkulator"
          onPress={() => setShowWalu(!showWalu)}
        />
        {showWalu && <View>
          <View style={styles.wLinii}>
            <Text>{'fi'}</Text>
            <View style={styles.select}>
              <Picker
                style={styles.samSelect}
                selectedValue={selectedValue}
                onValueChange={(itemValue) => setSelectedValue(itemValue)}
              >
                
                <Picker.Item key={item} label={item} value={item} />
              

              </Picker>
            </View>
          </View>

          <View style={styles.srodek}>

            <View style={styles.naglowekOtworow}>
              <Text style={styles.wartosciii}>
                {'Wartość: '}
                <Text style={{fontWeight: 'bold' }}>{`${inputValue} ${selectedValue}`}</Text>
                {' tolerancja'}
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
                {`${inputValue ? `${Number(inputValue)} mm` : '...'}`}
            </Text>              
            <Text>
                <Text style={{fontWeight: 'bold'}}>{`MIN: `}</Text>
                {`${inputValue ? `${Number(inputValue) + Number(wartosc[0])} mm` : '...'}`}
            </Text>

          </View>

        </View>}
        </View>
  );
};


export default Kalkulator;
