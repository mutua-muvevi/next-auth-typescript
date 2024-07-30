"use client";

import merge from "lodash/merge";

//date fns
import {
	arSA as arAdapter,
	zhCN as zhCNAdapter,
	enUS as enUSAdapter,
	es as esESAdapter,
	fr as frFRAdapter,
	hi as hiINAdapter,
	ja as jaAdapter,
	ru as ruAdapter,
} from "date-fns/locale";

// date pickers
import {
	enUS as enUSDate,
	zhCN as zhCNDate,
	jaJP as jaJPDate,
	// hiIN as hiINDate,
	esES as esESDate,
	frFR as frFRDate,
	ruRU as ruRUDate,
} from "@mui/x-date-pickers/locales";

// core mui
import {
	arSA as arSACore,
	enUS as enUSCore,
	zhCN as zhCNCore,
	jaJP as jaJPCore,
	// hiIN as hiINCore,
	esES as esESCore,
	frFR as frFRCore,
	ruRU as ruRUCore,
} from "@mui/material/locale";

//datagrid MUI
import {
	arSD as arSDDatagrid,
	enUS as enUSDataGrid,
	zhCN as zhCNDataGrid,
	jaJP as jaJPDataGrid,
	// hiIN as hiINDataGrid,
	esES as esESDataGrid,
	frFR as frFRDataGrid,
	ruRU as ruRUDataGrid,
} from "@mui/x-data-grid/locales";

// ----------------------------------------------------------------------
export const allLangs = [
	{
		label: "English",
		value: "en",
		systemValue: merge(enUSDate, enUSDataGrid, enUSCore),
		adapterLocale: enUSAdapter,
		icon: "flagpack:gb-nir",
		numberFormat: {
			code: "en-US",
			currency: "USD",
		},
	},
	{
		label: "French",
		value: "fr",
		systemValue: merge(frFRDate, frFRDataGrid, frFRCore),
		adapterLocale: frFRAdapter,
		icon: "flagpack:fr",
		numberFormat: {
			code: "fr-Fr",
			currency: "EUR",
		},
	},
	{
		label: "Spanish",
		value: "es",
		systemValue: merge(esESDate, esESDataGrid, esESCore),
		adapterLocale: esESAdapter,
		icon: "flagpack:es",
		numberFormat: {
			code: "es-ES",
			currency: "EUR",
		},
	},
	{
		label: "Chinese",
		value: "cn",
		systemValue: merge(zhCNDate, zhCNDataGrid, zhCNCore),
		adapterLocale: zhCNAdapter,
		icon: "flagpack:cn",
		numberFormat: {
			code: "zh-CN",
			currency: "CNY",
		},
	},
	{
		label: "Hindi",
		value: "hi",
		systemValue: merge(hiINAdapter),
		adapterLocale: hiINAdapter,
		icon: "flagpack:in",
		numberFormat: {
			code: "hi-IN",
			currency: "INR",
		},
	},
	{
		label: "Japanese",
		value: "ja",
		systemValue: merge(jaAdapter, jaJPDataGrid, jaJPCore),
		adapterLocale: jaAdapter,
		icon: "flagpack:jp",
		numberFormat: {
			code: "ja-JP",
			currency: "JPY",
		},
	},
	{
		label: "Russian",
		value: "ru",
		systemValue: merge(ruAdapter, ruRUDataGrid, ruRUCore),
		adapterLocale: ruAdapter,
		icon: "flagpack:ru",
		numberFormat: {
			code: "ru-RU",
			currency: "RUB",
		},
	},
	{
		label: "Arabic",
		value: "ar",
		systemValue: merge(arAdapter, arSDDatagrid, arSACore),
		adapterLocale: arAdapter,
		icon: "flagpack:sa",
		numberFormat: {
			code: "ar-SA",
			currency: "SAR",
		},
	}
];

export const defaultLang = allLangs[0];

// https://icon-sets.iconify.design/flagpack/