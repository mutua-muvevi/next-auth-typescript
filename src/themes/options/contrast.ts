import { grey } from "../palette";
import { customShadows } from "../custom_shadows";

// ----------------------------------------------------------------------


export const createContrast = (contrast : string, mode : any) => {
	const theme = {
		...(contrast === "bold" &&
			mode === "light" && {
				palette: {
					background: {
						default: grey[200],
					},
				},
			}),
	};

	const components = {
		...(contrast === "bold" && {
			MuiCard: {
				styleOverrides: {
					root: {
						boxShadow: customShadows(mode).z1,
					},
				},
			},
		}),
	};

	return {
		...theme,
		components,
	};
}
