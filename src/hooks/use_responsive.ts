import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// ----------------------------------------------------------------------

export const useResponsive = (query: string, start: any, end: any) => {
	const theme = useTheme();

	const mediaUp = useMediaQuery(theme.breakpoints.up(start));

	const mediaDown = useMediaQuery(theme.breakpoints.down(start));

	const mediaBetween = useMediaQuery(theme.breakpoints.between(start, end));

	const mediaOnly = useMediaQuery(theme.breakpoints.only(start));

	if (query === "up") {
		return mediaUp;
	}

	if (query === "down") {
		return mediaDown;
	}

	if (query === "between") {
		return mediaBetween;
	}

	return mediaOnly;
};

// ----------------------------------------------------------------------

export const useWidth = () => {
	const theme = useTheme();

	const keys = [...theme.breakpoints.keys].reverse();

	return (
		keys.reduce((output: any, key: any) => {
			// eslint-disable-next-line react-hooks/rules-of-hooks
			const matches = useMediaQuery(theme.breakpoints.up(key));

			return !output && matches ? key : output;
		}, null) || "xs"
	);
};
