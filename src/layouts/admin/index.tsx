import Box from "@mui/material/Box";

import { useBoolean } from "@/hooks/use_boolean";
import { useResponsive } from "@/hooks/use_responsive";

import { useSettingsContext } from "@/components/settings";

import Main from "./main";
import Header from "./header";
import NavMini from "./nav_mini";
import NavVertical from "./nav_vertical";
import NavHorizontal from "./nav_horizontal";

// ----------------------------------------------------------------------

interface DashboardLayoutProps {
	children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
	const settings = useSettingsContext();

	const lgUp = useResponsive("up", "lg");

	const nav = useBoolean();

	const isHorizontal = settings.themeLayout === "horizontal";

	const isMini = settings.themeLayout === "mini";

	const renderNavMini = <NavMini />;

	const renderHorizontal = <NavHorizontal />;

	const renderNavVertical = (
		<NavVertical openNav={nav.value} onCloseNav={nav.onFalse} />
	);

	if (isHorizontal) {
		return (
			<>
				<Header onOpenNav={nav.onTrue} />

				{lgUp ? renderHorizontal : renderNavVertical}

				<Main>{children}</Main>
			</>
		);
	}

	if (isMini) {
		return (
			<>
				<Header onOpenNav={nav.onTrue} />

				<Box
					sx={{
						minHeight: 1,
						display: "flex",
						flexDirection: { xs: "column", lg: "row" },
					}}
				>
					{lgUp ? renderNavMini : renderNavVertical}

					<Main>{children}</Main>
				</Box>
			</>
		);
	}

	return (
		<>
			<Header onOpenNav={nav.onTrue} />

			<Box
				sx={{
					minHeight: 1,
					display: "flex",
					flexDirection: { xs: "column", lg: "row" },
				}}
			>
				{renderNavVertical}

				<Main>{children}</Main>
			</Box>
		</>
	);
};

export default DashboardLayout;
