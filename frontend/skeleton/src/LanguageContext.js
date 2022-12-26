import React, { useState, useCallback, useEffect } from 'react';
import { english, greek, polish, italian } from 'utils/dictionaries';

const LanguageContext = React.createContext();
const LanguageUpdateContext = React.createContext();

export const useLanguage = () => {
    const context = React.useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export const useLanguageUpdate = () => {
    const context = React.useContext(LanguageUpdateContext);
    if (context === undefined) {
        throw new Error('useLanguageUpdate must be used within a LanguageProvider');
    }
    return context;
};

export default function ThemeProvider({ children }) {
    const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

    function getDictionary(language) {
        if (language === 'en') {
            return english;
        }
        if (language === 'gr') {
            return greek;
        }
        if (language === 'pl') {
            return polish;
        }
        if (language === 'it') {
            return italian;
        }
        return english;
    }

    const [dictionary, setDictionary] = useState(getDictionary(language));

    const changeLanguage = useCallback((language) => {
        setLanguage(language);
        const dictionary = getDictionary(language);
        setDictionary(dictionary);
        localStorage.setItem('language', language);
    }, []);

    return (
        <LanguageContext.Provider value={{ language, dictionary }}>
            <LanguageUpdateContext.Provider value={changeLanguage}>{children}</LanguageUpdateContext.Provider>
        </LanguageContext.Provider>
    );
}
