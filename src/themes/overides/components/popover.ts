import { listClasses } from "@mui/material/List";

import { paper } from "../../css";

// ----------------------------------------------------------------------

export const popover = (theme: any) => {
	return {
		MuiPopover: {
			styleOverrides: {
				paper: {
					...paper({ theme, dropdown: true }),
					[`& .${listClasses.root}`]: {
						paddingTop: 0,
						paddingBottom: 0,
					},
				},
			},
		},
	};
};
