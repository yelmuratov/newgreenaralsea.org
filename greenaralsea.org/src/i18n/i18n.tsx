import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector).use(initReactI18next).init({
        debug: true,
        lng: 'en',
        resources: {
            en: {
                translation: {
                    "Welcome to React": "Welcome to React and react-i18next"
                }
            },
            ru: {
                translation: {
                    "Welcome to React": "Добро пожаловать в React и react-i18next"
                }
            },
            uz: {
                translation: {
                    "Welcome to React": "React va react-i18next ga xush kelibsiz"
                }
            }
        }
    });