import React, { useState } from 'react';
import { View, Text, TextInput, Image, Modal, TouchableOpacity } from 'react-native';
import { imagesData } from './symboleTolerancjiDane';

import CustomButton from '../config';
// import Modal from 'react-native-modal';

import { useLanguage } from '../settings/translations';
import slownik from '../settings/pl';


import styles from '../styles';


const SymboleTolerancji = () => {
  const { language } = useLanguage();
  const translations = slownik[language];
  const [showSymbole, setSymbole] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  
  const groupByCategory = (data) => {
    return data.reduce((result, item) => {
        (result[item.kategoria] = result[item.kategoria] || []).push(item);
        return result;
    }, {});
};
const groupedData = groupByCategory(imagesData);


  return (
    <View>
      <CustomButton
        title={translations.symboleTolerancji}
        onPress={() => setSymbole(!showSymbole)}
      />
  
      {showSymbole && (
        <View style={{marginTop:7}}>
            <View style={styles.headerRow}>
              <Text style={styles.headerCell}>Tolerancja</Text>
              <Text style={styles.headerCell}>Właściwość geometryczna</Text>
              <Text style={styles.headerCell}>Symbol</Text>
            </View>

            <View>
    {Object.keys(groupedData).map(category => (
      <View key={category}>
        <Text style={{ fontWeight: 'bold', fontSize: 18, backgroundColor:'#e5e5e5', borderWidth:0, borderColor:'black', flexDirection:'row', justifyContent:'center', alignContent:'center' }}>{category}</Text>

        {groupedData[category].map((item, index) => (
          <View style={styles.row} key={index}>
            <Text style={styles.cell}>{item.name}</Text>
            <Text style={styles.cell}>{item.description}</Text>
            <TouchableOpacity
              onPress={() => {
                setSelectedImage(item);
                setModalVisible(true);
              }}
            >
              <Image source={item.source} style={styles.image} />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    ))}
  </View>


         
  



          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(false);
              setSelectedImage(null);
            }}
          >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ width: '90%', padding: 10, backgroundColor: 'white', borderRadius: 10, borderColor:'green', borderWidth:5 }}>
                {selectedImage && (
                  <View>
                    <Text>{selectedImage.description}</Text>
                    {selectedImage.modalImage && <Image 
                      source={selectedImage.modalImage}
                      // style={{width:'50%'}}
                    />}
                  </View>
                )}
  
                <TouchableOpacity
                  style={{ marginTop: 20, backgroundColor: '#d5d5d5', padding: 10, borderRadius: 5, flexDirection:'row', justifyContent:'center', alignContent:'center' }}
                  onPress={() => {
                    setModalVisible(false);
                    setSelectedImage(null);
                  }}
                >
                  <Text style={{fontWeight:'bold'}}>{translations.zamknij}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      )}
    </View>
  );
  
  
};


export default SymboleTolerancji;
