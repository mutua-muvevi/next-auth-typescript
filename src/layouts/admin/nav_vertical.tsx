import { useEffect } from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Drawer from "@mui/material/Drawer";

import { usePathname } from "@/routes/hooks";

import { useResponsive } from "@/hooks/use_responsive";
import { useMockedUser } from "@/hooks/use_mocked_user";

import Logo from "@/components/logo";
import Scrollbar from "@/components/scrollbar";
import { NavSectionVertical } from "@/components/nav_section";

import { NAV } from "../config_layout";
import NavUpgrade from "../common/nav_upgrade";
import { useNavData } from "./config_navigation";
import NavToggleButton from "../common/nav_toggle_button";

// ----------------------------------------------------------------------

interface NavVerticalProps {
	openNav: boolean;
	onCloseNav: VoidFunction;
}

const NavVertical = ({ openNav, onCloseNav }: NavVerticalProps) => {
	const { user } = useMockedUser();

	const pathname = usePathname();

	const lgUp = useResponsive("up", "lg");

	const navData = useNavData();

	useEffect(() => {
		if (openNav) {
			onCloseNav();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname]);

	const renderContent = (
		<Scrollbar
			sx={{
				height: 1,
				"& .simplebar-content": {
					height: 1,
					display: "flex",
					flexDirection: "column",
				},
			}}
		>
			<Logo sx={{ mt: 3, ml: 4, mb: 1 }} />

			<NavSectionVertical
				data={navData}
				slotProps={{
					currentRole: user?.role,
				}}
			/>

			<Box sx={{ flexGrow: 1 }} />

			<NavUpgrade />
		</Scrollbar>
	);

	return (
		<Box
			sx={{
				flexShrink: { lg: 0 },
				width: { lg: NAV.W_VERTICAL },
			}}
		>
			<NavToggleButton />

			{lgUp ? (
				<Stack
					sx={{
						height: 1,
						position: "fixed",
						width: NAV.W_VERTICAL,
						borderRight: (theme) => `solid 1px ${theme.palette.divider}`,
						backgroundColor: (theme) =>
							theme.palette.mode === "dark"
								? theme.palette.background.navs
								: theme.palette.primary.main,
					}}
				>
					{renderContent}
				</Stack>
			) : (
				<Drawer
					open={openNav}
					onClose={onCloseNav}
					PaperProps={{
						sx: {
							width: NAV.W_VERTICAL,
						},
					}}
				>
					{renderContent}
				</Drawer>
			)}
		</Box>
	);
};

export default NavVertical;
