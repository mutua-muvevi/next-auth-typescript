export const timeline = (theme: object) => {
	return {
		MuiTimelineDot: {
			styleOverrides: {
				root: {
					boxShadow: "none",
				},
			},
		},
		MuiTimelineConnector: {
			styleOverrides: {
				root: {
					backgroundColor: theme.palette.divider,
				},
			},
		},
	};
};
