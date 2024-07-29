"use client";

import { useMemo } from "react";
import { Box } from "@mui/material";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<Box>
			{children}
		</Box>
	)
};

export default ThemeProvider;