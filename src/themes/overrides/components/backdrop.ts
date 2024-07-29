import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

export function backdrop(theme: object) {
	return {
		MuiBackdrop: {
			styleOverrides: {
				root: {
					backgroundColor: alpha(theme.palette.grey[900], 0.8),
				},
				invisible: {
					background: "transparent",
				},
			},
		},
	};
}
