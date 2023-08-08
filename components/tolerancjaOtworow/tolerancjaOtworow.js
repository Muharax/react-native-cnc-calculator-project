import React, { useState } from 'react';
import { Text, View } from "react-native";
import { tablicaTolerancji } from "./tablicaTolerancjiOtworow";



function CustomButton({ onPress, title }) {
    return (
      <TouchableOpacity onPress={onPress} style={styles.btn}>
        <Text style={styles.btnText}>{title}</Text>
      </TouchableOpacity>
    );
  }



const TolerancjaOtworow = () => {
    const [showOtworu, setShowOtworu] = useState(false);

    
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
            {`${wartosc[0]} mm `}
            </Text>
            <Text style={styles.subscript}>
            {`${wartosc[1]} mm `}
            </Text>
        </View>

        </View>


        <View>
        <Text style={styles.subscript}>
            {`MAX ${inputValue+wartosc[0]} mm`}
        </Text>
        <Text style={styles.subscript}>
            {`MIN ${inputValue} mm`}
        </Text>
        </View>

        </View>}
}

export default TolerancjaOtworow;