import { createI18n } from 'vue-i18n';
import en from '@/locales/en.json';
import sl from '@/locales/sl.json';


let defaultLocale = 'en' // default
if (window.location.hostname.endsWith('.si')) {
    defaultLocale = 'sl'
}


const i18n = createI18n({
	locale: defaultLocale,
  	fallbackLocale: 'en',
  	messages: {
		en,
		sl
  	},
    allowComposition: true,
    legacy: false,
    warnHtmlMessage: false,
});

export default i18n;
