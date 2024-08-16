import { PaletteColor } from "@mui/material/styles";

declare module "@mui/material/styles" {
	interface PaletteColor {
		lighter?: string;
		light: string;
		main: string;
		dark: string;
		darker?: string;
		contrastText: string;
	}

	interface Palette {
		primary: PaletteColor;
		secondary: PaletteColor;
		info: PaletteColor;
		success: PaletteColor;
		warning: PaletteColor;
		error: PaletteColor;
		grey: Record<number, string>;
		common: {
			black: string;
			white: string;
		};
		action: {
			hover: string;
			selected: string;
			disabled: string;
			disabledBackground: string;
			focus: string;
			hoverOpacity: number;
			disabledOpacity: number;
		};
		divider: string;
	}

	// Allow configuration using `createTheme`
	interface PaletteOptions extends Palette {}
}
