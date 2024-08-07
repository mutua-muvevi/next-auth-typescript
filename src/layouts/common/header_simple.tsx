import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useTheme } from "@mui/material/styles";

import { paths } from "@/routes/paths";
import { RouterLink } from "@/routes/components";

import { useOffSetTop } from "@/hooks/use_off_set_top";

import { bgBlur } from "@/themes/css";

import Logo from "@/components/logo";

import { HEADER } from "../config_layout";
import HeaderShadow from "./header_shadow";
import SettingsButton from "./settings_button";

// ----------------------------------------------------------------------

const HeaderSimple = () => {
	const theme = useTheme();

	const offsetTop = useOffSetTop(HEADER.H_DESKTOP);

	return (
		<AppBar>
			<Toolbar
				sx={{
					justifyContent: "space-between",
					height: {
						xs: HEADER.H_MOBILE,
						md: HEADER.H_DESKTOP,
					},
					transition: theme.transitions.create(["height"], {
						easing: theme.transitions.easing.easeInOut,
						duration: theme.transitions.duration.shorter,
					}),
					...(offsetTop && {
						...bgBlur({
							color: theme.palette.background.default,
						}),
						height: {
							md: HEADER.H_DESKTOP_OFFSET,
						},
					}),
				}}
			>
				<Logo />

				<Stack direction="row" alignItems="center" spacing={1}>
					<SettingsButton />

					<Link
						href={paths.faqs}
						component={RouterLink}
						color="inherit"
						sx={{ typography: "subtitle2" }}
					>
						Need help?
					</Link>
				</Stack>
			</Toolbar>

			{offsetTop && <HeaderShadow />}
		</AppBar>
	);
};

export default HeaderSimple;
