import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { styled, useTheme } from "@mui/material/styles";

import { bgBlur } from "@/themes/css";

import { LeftIcon, RightIcon } from "./arrow_icons";

// ----------------------------------------------------------------------

const StyledRoot = styled(Box)(({ theme }) => ({
	...bgBlur({
		opacity: 0.48,
		color: theme.palette.grey[900],
	}),
	zIndex: 9,
	display: "inline-flex",
	alignItems: "center",
	position: "absolute",
	bottom: theme.spacing(2),
	right: theme.spacing(2),
	padding: theme.spacing(0.25),
	color: theme.palette.common.white,
	borderRadius: theme.shape.borderRadius,
}));

const StyledIconButton = styled(IconButton)({
	width: 28,
	height: 28,
	padding: 0,
	opacity: 0.48,
	"&:hover": { opacity: 1 },
});

// ----------------------------------------------------------------------

interface CarouselArrowIndexProps {
	icon?: string | React.ReactElement;
	index: number;
	total: number;
	onNext: VoidFunction;
	onPrev: VoidFunction;
	sx?: object;
}

const CarouselArrowIndex = ({
	index,
	total,
	onNext,
	onPrev,
	icon,
	sx,
	...other
}: CarouselArrowIndexProps) => {
	const theme = useTheme();

	const isRTL = theme.direction === "rtl";

	return (
		<StyledRoot sx={sx} {...other}>
			<StyledIconButton color="inherit" onClick={onPrev}>
				<LeftIcon isRTL={isRTL} />
			</StyledIconButton>

			<Typography variant="subtitle2" component="span" sx={{ mx: 0.25 }}>
				{index + 1}/{total}
			</Typography>

			<StyledIconButton color="inherit" onClick={onNext}>
				<RightIcon isRTL={isRTL} />
			</StyledIconButton>
		</StyledRoot>
	);
};

export default CarouselArrowIndex;
