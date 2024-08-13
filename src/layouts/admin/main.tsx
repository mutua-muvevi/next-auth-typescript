import Box from "@mui/material/Box";

import { useResponsive } from "@/hooks/use_responsive";

import { useSettingsContext } from "@/components/settings";

import { NAV, HEADER } from "../config_layout";

import i18n from "i18next";
import { useTranslation } from "react-i18next";

// ----------------------------------------------------------------------

const SPACING = 8;

interface MainProps {
	children: React.ReactNode;
	sx?: any;
	[key: string]: any;
}

const Main = ({ children, sx, ...other }: MainProps) => {
	const settings = useSettingsContext();

	const lgUp = useResponsive("up", "lg");

	const isNavHorizontal = settings.themeLayout === "horizontal";

	const isNavMini = settings.themeLayout === "mini";
	console.log("I18NEXT", i18n)
	
	const translate = useTranslation()
	console.log("REACT I18NEXT", translate)

	if (isNavHorizontal) {
		return (
			<Box
				component="main"
				sx={{
					minHeight: 1,
					display: "flex",
					flexDirection: "column",
					pt: `${HEADER.H_MOBILE + 24}px`,
					pb: 10,
					...(lgUp && {
						pt: `${HEADER.H_MOBILE * 2 + 40}px`,
						pb: 15,
					}),
				}}
			>
				{children}
			</Box>
		);
	}

	return (
		<Box
			component="main"
			sx={{
				flexGrow: 1,
				minHeight: 1,
				display: "flex",
				flexDirection: "column",
				py: `${HEADER.H_MOBILE + SPACING}px`,
				...(lgUp && {
					px: 2,
					py: `${HEADER.H_DESKTOP + SPACING}px`,
					width: `calc(100% - ${NAV.W_VERTICAL}px)`,
					...(isNavMini && {
						width: `calc(100% - ${NAV.W_MINI}px)`,
					}),
				}),
				...sx,
			}}
			{...other}
		>
			{children}
		</Box>
	);
};

export default Main;
