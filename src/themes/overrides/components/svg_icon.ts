// ----------------------------------------------------------------------

export function svgIcon(theme: object) {
	return {
		MuiSvgIcon: {
			styleOverrides: {
				fontSizeLarge: {
					width: 32,
					height: 32,
					fontSize: "inherit",
				},
			},
		},
	};
}
