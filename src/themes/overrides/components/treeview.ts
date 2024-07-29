// ----------------------------------------------------------------------

export const treeView = (theme: object) => {
	return {
		MuiTreeItem: {
			styleOverrides: {
				label: {
					...theme.typography.body2,
				},
				iconContainer: {
					width: "auto",
				},
			},
		},
	};
};
