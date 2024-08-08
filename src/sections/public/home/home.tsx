"use client";

import { useScroll } from "framer-motion";

import ScrollProgress from "@/components/scroll_progress";
import MainLayout from "@/layouts/public";
import { Box } from "@mui/material";

const HomeView = () => {
	const { scrollYProgress } = useScroll();

	return (
		<MainLayout>
			<ScrollProgress scrollYProgress={scrollYProgress} />

			<Box
				sx={{
					overflow: "hidden",
					position: "relative",
					bgcolor: "background.default",
				}}
			>
				Homepage
			</Box>
		</MainLayout>
	);
};

export default HomeView;
