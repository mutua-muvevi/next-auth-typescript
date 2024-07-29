"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { localStorageGetItem } from "@/utils/storage_available";

import { defaultLang } from "./config_lang";
import translationEn from "./langs/en.json";
import translationEs from "./langs/es.json";
import translationFr from "./langs/fr.json";
import translationHi from "./langs/hi.json";
import translationJa from "./langs/ja.json";
import translationRu from "./langs/ru.json";
import translationAr from "./langs/ar.json";
import translationZh from "./langs/cn.json";

//------------------------------------------------------------------

const language = localStorageGetItem("i18nextLng", defaultLang.value);

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			en: { translation: translationEn },
			es: { translation: translationEs },
			fr: { translation: translationFr },
			hi: { translation: translationHi },
			ja: { translation: translationJa },
			ru: { translation: translationRu },
			ar: { translation: translationAr },
			cn: { translation: translationZh },
		},
		lng: language,
		fallbackLng: "en",
		debug: false,
		ns: ["translations"],
		defaultNS: "translations",
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
