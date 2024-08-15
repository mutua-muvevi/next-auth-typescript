export interface ThemePalette {
	mode: string;
	primary: PaletteColorOptions;
	secondary: PaletteColorOptions;
	info: PaletteColorOptions;
	success: PaletteColorOptions;
	warning: PaletteColorOptions;
	error: PaletteColorOptions;
	grey: GreyScale;
	common: CommonColors;
	divider: string;
	action: ActionOptions;
	text: TextOptions;
	background: BackgroundOptions;
	contrastThreshold: number;
	tonalOffset: number;
}

export interface PaletteColorOptions {
	lighter: string;
	light: string;
	main: string;
	dark: string;
	darker: string;
	contrastText: string;
}

export interface GreyScale {
	[key: string]: string; // Allows for arbitrary keys with string values
}

export interface CommonColors {
	black: string;
	white: string;
}

export interface ActionOptions {
	hover: string;
	selected: string;
	disabled: string;
	disabledBackground: string;
	focus: string;
	hoverOpacity: number;
	disabledOpacity: number;
	active: string;
	selectedOpacity: number;
	focusOpacity: number;
	activatedOpacity: number;
}

export interface TextOptions {
	primary: string;
	secondary: string;
	disabled: string;
}

export interface BackgroundOptions {
	default: string;
	paper: string;
}
