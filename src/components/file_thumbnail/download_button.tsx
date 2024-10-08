"use client"

import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

import { bgBlur } from "@/themes/css";

import Iconify from "../iconify";

// ----------------------------------------------------------------------

interface DownloadButtonProps {
	onDownload?: () => void;
}

const DownloadButton = ({ onDownload }: DownloadButtonProps) => {
	const theme = useTheme();

	return (
		<IconButton
			onClick={onDownload}
			sx={{
				p: 0,
				top: 0,
				right: 0,
				width: 1,
				height: 1,
				zIndex: 9,
				opacity: 0,
				position: "absolute",
				borderRadius: "unset",
				justifyContent: "center",
				bgcolor: "grey.800",
				color: "common.white",
				transition: theme.transitions.create(["opacity"]),

				"&:hover": {
					opacity: 1,
					...bgBlur({
						opacity: 0.64,
						color: theme.palette.grey[900],
					}),
				},
			}}
		>
			<Iconify icon="eva:arrow-circle-down-fill" width={24} />
		</IconButton>
	);
}

export default DownloadButton;
