import Box from "@mui/material/Box";

import { usePathname } from "@/routes/hooks";

import Footer from "./footer";
import Header from "./header";

// ----------------------------------------------------------------------

interface MainLayoutProps {
	children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
	const pathname = usePathname();

	const homePage = pathname === "/";

	return (
		<Box sx={{ display: "flex", flexDirection: "column", height: 1 }}>
			<Header />

			<Box
				component="main"
				sx={{
					flexGrow: 1,
					...(!homePage && {
						pt: { xs: 8, md: 10 },
					}),
				}}
			>
				{children}
			</Box>

			<Footer />
		</Box>
	);
};

export default MainLayout;
