// ----------------------------------------------------------------------

export const typography = (theme: object) => {
	return {
		MuiTypography: {
			styleOverrides: {
				paragraph: {
					marginBottom: theme.spacing(2),
				},
				gutterBottom: {
					marginBottom: theme.spacing(1),
				},
			},
		},
	};
};
