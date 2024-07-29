import { checkboxClasses } from "@mui/material/Checkbox";

// ----------------------------------------------------------------------

export const checkbox = (theme: object) => {
	return {
		MuiCheckbox: {
			styleOverrides: {
				root: ({ ownerState }: any) => {
					const { color } = ownerState;

					return {
						padding: theme.spacing(1),
						...(color === "default" && {
							[`&.${checkboxClasses.checked}`]: {
								color: theme.palette.text.primary,
							},
						}),
						[`&.${checkboxClasses.disabled}`]: {
							color: theme.palette.action.disabled,
						},
					};
				},
			},
		},
	};
};
