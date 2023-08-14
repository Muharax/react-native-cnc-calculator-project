import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import CustomButton from '../config';
import { useLanguage } from '../settings/translations';
import { Picker } from '@react-native-picker/picker';
import slownik from '../settings/pl';


const SymboleTolerancji = () => {
  const { language } = useLanguage();
  const translations = slownik[language];
  const [showSymbole, setSymbole] = useState(false);

  return (

<View>
<CustomButton
            title={translations.symboleTolerancji}
            onPress={() => setSymbole(!showSymbole)}
          />
          {showSymbole && <View>
            <Picker>
                <Picker.Item label="Polski" value="pl" />
                <Picker.Item label="English" value="en" />
            </Picker>

            <Text>SIEMA</Text>
            </View>}
</View>
  );
};


export default SymboleTolerancji;
