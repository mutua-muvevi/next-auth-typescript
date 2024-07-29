export function skeleton(theme: object) {
	return {
		MuiSkeleton: {
			styleOverrides: {
				root: {
					backgroundColor: theme.palette.background.neutral,
				},
				rounded: {
					borderRadius: theme.shape.borderRadius * 2,
				},
			},
		},
	};
}
