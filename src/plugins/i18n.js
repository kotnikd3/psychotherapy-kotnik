import { createI18n } from 'vue-i18n';
import en from '@/locales/en.json';
import sl from '@/locales/sl.json';

const i18n = createI18n({
	locale: 'en',
  	fallbackLocale: 'en',
  	messages: {
		en,
		sl,
  	},
    allowComposition: true,
    legacy: false,
    warnHtmlMessage: false,
});

export default i18n;
