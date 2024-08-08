import { memo } from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useTheme } from "@mui/material/styles";

import { useMockedUser } from "@/hooks/use_mocked_user";

import { bgBlur } from "@/themes/css";

import Scrollbar from "@/components/scrollbar";
import { NavSectionHorizontal } from "@/components/nav_section";

import { HEADER } from "../config_layout";
import { useNavData } from "./config_navigation";
import HeaderShadow from "../common/header_shadow";

// ----------------------------------------------------------------------

const NavHorizontal = () => {
	const theme = useTheme();

	const { user } = useMockedUser();

	const navData = useNavData();

	return (
		<AppBar
			component="div"
			sx={{
				top: HEADER.H_DESKTOP_OFFSET,
			}}
		>
			<Toolbar
				sx={{
					...bgBlur({
						color: theme.palette.background.default,
					}),
				}}
			>
				<Scrollbar
					sx={{
						"& .simplebar-content": {
							display: "flex",
						},
					}}
				>
					<NavSectionHorizontal
						data={navData}
						slotProps={{
							currentRole: user?.role,
						}}
						sx={{
							...theme.mixins.toolbar,
						}}
					/>
				</Scrollbar>
			</Toolbar>

			<HeaderShadow />
		</AppBar>
	);
};

export default memo(NavHorizontal);
