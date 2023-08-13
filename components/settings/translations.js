import React, { useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const LanguageContext = React.createContext({
    language: 'en',
    setLanguage: () => {},
  });

export const useLanguage = () => {
    return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('pl');

    useEffect(() => {
        // Pobierz zapisany język z AsyncStorage przy uruchomieniu
        const getStoredLanguage = async () => {
            try {
                const storedLanguage = await AsyncStorage.getItem('selectedLanguage');
                if (storedLanguage) setLanguage(storedLanguage);
            } catch (error) {
                console.error('Failed to get stored language:', error);
            }
        };

        getStoredLanguage();
    }, []);

    // Ustawienie języka i zapisanie do AsyncStorage
    const handleSetLanguage = async (lang) => {
        try {
            await AsyncStorage.setItem('selectedLanguage', lang);
            setLanguage(lang);
        } catch (error) {
            console.error('Failed to set language:', error);
        }
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

