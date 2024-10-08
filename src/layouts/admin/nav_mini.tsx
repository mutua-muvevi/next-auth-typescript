import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import { useMockedUser } from "@/hooks/use_mocked_user";

import { hideScroll } from "@/themes/css";

import Logo from "@/components/logo";
import { NavSectionMini } from "@/components/nav_section";

import { NAV } from "../config_layout";
import { useNavData } from "./config_navigation";
import NavToggleButton from "../common/nav_toggle_button";

// ----------------------------------------------------------------------

const NavMini = () => {
	const { user } = useMockedUser();

	const navData = useNavData();

	return (
		<Box
			sx={{
				flexShrink: { lg: 0 },
				width: { lg: NAV.W_MINI },
			}}
		>
			<NavToggleButton
				sx={{
					top: 22,
					left: NAV.W_MINI - 12,
				}}
			/>

			<Stack
				sx={{
					pb: 2,
					height: 1,
					position: "fixed",
					width: NAV.W_MINI,
					borderRight: (theme) => `solid 1px ${theme.palette.divider}`,
						backgroundColor: (theme) =>
							theme.palette.mode === "dark"
								? theme.palette.background.navs
								: "inherit",
					...hideScroll.x,
				}}
			>
				<Logo sx={{ mx: "auto", my: 2 }} />

				<NavSectionMini
					data={navData}
					slotProps={{
						currentRole: user?.role,
					}}
				/>
			</Stack>
		</Box>
	);
};

export default NavMini;
