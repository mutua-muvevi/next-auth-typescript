import React, { forwardRef } from "react";
import { Icon } from "@iconify/react";

import Box from "@mui/material/Box";

interface IconifyProps {
	icon: React.ReactElement | string;
	width?: number;
	sx?: object;
}

const Iconify = forwardRef(
	({ icon, width = 20, sx, ...other }: IconifyProps, ref) => (
		<Box
			ref={ref}
			component={Icon}
			className="component-iconify"
			icon={icon}
			sx={{ width, height: width, ...sx }}
			{...other}
		/>
	)
);

Iconify.displayName = "Iconify";

export default Iconify;
