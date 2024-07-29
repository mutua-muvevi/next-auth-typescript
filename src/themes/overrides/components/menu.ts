import { menuItem } from "../../css";

// ----------------------------------------------------------------------

export const menu = (theme: any) => {
	return {
		MuiMenuItem: {
			styleOverrides: {
				root: {
					...menuItem(theme),
				},
			},
		},
	};
};
