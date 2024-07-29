"use client";

import { useMemo } from "react";
import merge from 'lodash/merge';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<Box>
			{children}
		</Box>
	)
};

export default ThemeProvider;