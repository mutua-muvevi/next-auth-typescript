"use client";

import { useMemo } from "react";
import { paths } from "@/routes/paths";
import { useTranslate } from "@/locales";

import Iconify from "@/components/iconify";

export const navConfig = [
	{
		title: "Home",
		icon: <Iconify icon="lets-icons:home-duotone" />,
		path: paths.public.root,
	},
	{
		title: "about",
		icon: <Iconify icon="fa6-solid:circle-info" />,
		path: paths.public.about,
	},
	{
		title: "faqs",
		icon: <Iconify icon="mdi:faq" />,
		path: paths.public.faqs,
	},
	{
		title: "contact",
		icon: <Iconify icon="ic:baseline-contact-mail" />,
		path: paths.public.contact,
	},
	{
		title: "products",
		icon: <Iconify icon="vaadin:tools" />,
		path: paths.public.products,
	},
	{
		title: "terms",
		icon: <Iconify icon="mdi:clipboard-text-outline" />,
		path: paths.public.terms,
	},
	{
		title: "privacy",
		icon: <Iconify icon="eos-icons:secure-data" />,
		path: paths.public.privacy,
	},
	{
		title: "articles",
		icon: <Iconify icon="ph:article-medium-fill" />,
		path: paths.public.articles,
	},
	// {
	// 	title: "Pages",
	// 	path: "/pages",
	// 	icon: <Iconify icon="solar:file-bold-duotone" />,
	// 	children: [
	// 		{
	// 			subheader: "Other",
	// 			items: [
	// 				{ title: "About us", path: paths.about },
	// 				{ title: "Contact us", path: paths.contact },
	// 				{ title: "FAQs", path: paths.faqs },
	// 				{ title: "Pricing", path: paths.pricing },
	// 				{ title: "Payment", path: paths.payment },
	// 				{ title: "Maintenance", path: paths.maintenance },
	// 				{ title: "Coming Soon", path: paths.comingSoon },
	// 			],
	// 		},
	// 	],
	// },
];
