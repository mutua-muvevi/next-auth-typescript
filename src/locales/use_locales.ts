"use client";

import { useCallback } from "react";
import { useTranslation } from "react-i18next";

import { localStorageGetItem } from "@/utils/storage_available";

import { useSettingsContext } from "@/components/settings";

import { allLangs, defaultLang } from "./config_lang";

// ----------------------------------------------------------------------

export const useLocales = () => {
	const langStorage = localStorageGetItem("i18nextLng");

	const currentLang =
		allLangs.find((lang) => lang.value === langStorage) || defaultLang;

	return {
		allLangs,
		currentLang,
	};
}

// ----------------------------------------------------------------------

export const useTranslate = () => {
	const { t, i18n, ready } = useTranslation();

	const settings = useSettingsContext();

	const onChangeLang = useCallback(
		(newlang: any) => {
			i18n.changeLanguage(newlang);
			settings.onChangeDirectionByLang(newlang);
		},
		[i18n, settings]
	);

	return {
		t,
		i18n,
		ready,
		onChangeLang,
	};
}
