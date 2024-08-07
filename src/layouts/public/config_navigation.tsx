"use client";

import { useMemo } from "react";
import { paths } from "@/routes/paths";
import  { useTranslate } from "@/locales"

import Iconify from "@/components/iconify";

export const navConfig = [
	{
		title: "Home",
		icon: <Iconify icon="lets-icons:home-duotone" />,
		path: paths.public.root
	},
	{
		title: "articles",
		icon: <Iconify icon=""/>,
		path: paths.public.articles
	},
]
