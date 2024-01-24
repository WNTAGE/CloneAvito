import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EnglishLanguage from "../../constants/InterfaceTranslate/English.json";
import RussianLanguage from "../../constants/InterfaceTranslate/Russian.json";
import LatvianLanguage from "../../constants/InterfaceTranslate/Latvian.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: EnglishLanguage,
    },
    ru: {
      translation: RussianLanguage,
    },
    lv: {
      translation: LatvianLanguage,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
