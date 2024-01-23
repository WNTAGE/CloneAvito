import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import EnglishLanguage from '../../constants/InterfaceTranslate/English.json'

i18n.use(initReactI18next).init({
	resources: {
		en: {
			translation: EnglishLanguage,
		},
		ru: {
			translation: {
				example: 'Пример перевода интерфейса',
			},
		},
	},
	lng: 'en',
	fallbackLng: 'en',
	interpolation: {
		escapeValue: false,
	},
})

export default i18n
