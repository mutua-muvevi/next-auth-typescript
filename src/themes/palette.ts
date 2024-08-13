
import { alpha } from "@mui/material/styles";

export const grey = {
	0: "#FFFFFF",
	100: "#F9FAFB",
	200: "#F4F6F8",
	300: "#DFE3E8",
	400: "#C4CDD5",
	500: "#919EAB",
	600: "#637381",
	700: "#454F5B",
	800: "#212B36",
	900: "#161C24",
};

export const primary = {
	lighter: "#3596f7",
	light: "#1b89f6",
	main: "#027cf5",
	dark: "#0270dd",
	darker: "#0263c4",
	contrastText: "#FFFFFF",
};

export const secondary = {
	lighter: "#EFD6FF",
	light: "#C684FF",
	main: "#8E33FF",
	dark: "#5119B7",
	darker: "#27097A",
	contrastText: "#FFFFFF",
};

export const info = {
	lighter: "#CAFDF5",
	light: "#61F3F3",
	main: "#00B8D9",
	dark: "#006C9C",
	darker: "#003768",
	contrastText: "#FFFFFF",
};

export const success = {
	lighter: "#D3FCD2",
	light: "#77ED8B",
	main: "#22C55E",
	dark: "#118D57",
	darker: "#065E49",
	contrastText: "#ffffff",
};

export const warning = {
	lighter: "#FFF5CC",
	light: "#FFD666",
	main: "#FFAB00",
	dark: "#B76E00",
	darker: "#7A4100",
	contrastText: grey[800],
};

export const error = {
	lighter: "#FFE9D5",
	light: "#FFAC82",
	main: "#FF5630",
	dark: "#B71D18",
	darker: "#7A0916",
	contrastText: "#FFFFFF",
};

export const common = {
	black: "#000000",
	white: "#FFFFFF",
};

export const action = {
	hover: alpha(grey[500], 0.08),
	selected: alpha(grey[500], 0.16),
	disabled: alpha(grey[500], 0.8),
	disabledBackground: alpha(grey[500], 0.24),
	focus: alpha(grey[500], 0.24),
	hoverOpacity: 0.08,
	disabledOpacity: 0.48,
};

const base = {
	primary,
	secondary,
	info,
	success,
	warning,
	error,
	grey,
	common,
	divider: alpha(grey[500], 0.2),
	action,
};
export const palette = (mode: string) => {
	const light = {
		...base,
		mode: "light",
		text: {
			primary: grey[800],
			secondary: grey[600],
			disabled: grey[500],
		},
		background: {
			paper: "#FFFFFF",
			default: "#FFFFFF",
			neutral: grey[200],
		},
		action: {
			...base.action,
			active: grey[600],
		},
	};

	const dark = {
		...base,
		mode: "dark",
		text: {
			primary: "#FFFFFF",
			secondary: grey[500],
			disabled: grey[600],
		},
		background: {
			paper: "#181a1b",
			// default: "#0f0f0f",
			default: "#101418",
			// default: "#181a1b",
			neutral: "#ccc",
			navs: "#0c0d0f",
		},
		action: {
			...base.action,
			active: grey[500],
		},
	};

	return mode === "light" ? light : dark
};
