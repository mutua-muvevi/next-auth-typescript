import { m } from "framer-motion";

import Box from "@mui/material/Box";

import { useResponsive } from "@/hooks/use_responsive";

import { varContainer } from "./variants";

// ----------------------------------------------------------------------

interface MotionViewportProps {
	children: React.ReactNode;
	disableAnimatedMobile?: boolean;
}

const MotionViewport = ({
	children,
	disableAnimatedMobile = true,
	...other
}: MotionViewportProps) => {
	const smDown = useResponsive("down", "sm");

	if (smDown && disableAnimatedMobile) {
		return <Box {...other}>{children}</Box>;
	}

	return (
		<Box
			component={m.div}
			initial="initial"
			whileInView="animate"
			viewport={{ once: true, amount: 0.3 }}
			variants={varContainer()}
			{...other}
		>
			{children}
		</Box>
	);
};

MotionViewport.propTypes = {
	children: PropTypes.node,
	disableAnimatedMobile: PropTypes.bool,
};

export default MotionViewport;
