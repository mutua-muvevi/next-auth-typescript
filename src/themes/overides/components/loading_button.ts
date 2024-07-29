import { loadingButtonClasses } from "@mui/lab/LoadingButton";

// ----------------------------------------------------------------------

export const loadingButton = (theme: object) => {
	return {
		MuiLoadingButton: {
			styleOverrides: {
				root: ({ ownerState }: any) => ({
					...(ownerState.variant === "soft" && {
						[`& .${loadingButtonClasses.loadingIndicatorStart}`]: {
							left: 10,
						},
						[`& .${loadingButtonClasses.loadingIndicatorEnd}`]: {
							right: 14,
						},
						...(ownerState.size === "small" && {
							[`& .${loadingButtonClasses.loadingIndicatorStart}`]: {
								left: 10,
							},
							[`& .${loadingButtonClasses.loadingIndicatorEnd}`]: {
								right: 10,
							},
						}),
					}),
				}),
			},
		},
	};
};
