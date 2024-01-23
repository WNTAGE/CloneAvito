import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import EnglishLanguage from '../../constants/InterfaceTranslate/English.json'
import RussianLanguage from '../../constants/InterfaceTranslate/Russian.json'

i18n.use(initReactI18next).init({
	resources: {
		en: {
			translation: EnglishLanguage,
		},
		ru: {
			translation: RussianLanguage,
		},
	},
	lng: 'en',
	fallbackLng: 'en',
	interpolation: {
		escapeValue: false,
	},
})

export default i18n
