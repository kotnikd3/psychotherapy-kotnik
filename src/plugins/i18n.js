import { createI18n } from 'vue-i18n';
import en from '@/locales/en.json';
import sl from '@/locales/sl.json';

let locale = 'sl' // default
if (window.location.hostname.endsWith('.com')) {
    locale = 'en'
}

const i18n = createI18n({
	locale: locale,
  	fallbackLocale: 'sl',
  	messages: {
		en,
		sl,
  	},
    allowComposition: true,
    legacy: false,
    warnHtmlMessage: false,
});

export default i18n;
