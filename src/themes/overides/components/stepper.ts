// ----------------------------------------------------------------------

export const stepper = (theme: object) => {
	return {
		MuiStepConnector: {
			styleOverrides: {
				line: {
					borderColor: theme.palette.divider,
				},
			},
		},
	};
}
