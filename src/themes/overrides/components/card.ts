export function card(theme : any) {
	return {
		MuiCard: {
			styleOverrides: {
				root: {
					position: "relative",
					boxShadow: theme.customShadows.card,
					borderRadius: theme.shape.borderRadius ,
					zIndex: 0, // Fix Safari overflow: hidden with border radius
				},
			},
		},
		MuiCardHeader: {
			styleOverrides: {
				root: {
					padding: theme.spacing(3, 3, 0),
				},
			},
		},
		MuiCardContent: {
			styleOverrides: {
				root: {
					padding: theme.spacing(3),
				},
			},
		},
	};
}
