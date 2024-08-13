"use client";

import { useScroll } from "framer-motion";

import ScrollProgress from "@/components/scroll_progress";
import MainLayout from "@/layouts/public";
import { Box } from "@mui/material";

const About = () => {
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
				About page
			</Box>
		</MainLayout>
	);
};

export default About;
