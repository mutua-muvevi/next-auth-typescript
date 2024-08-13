import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

import { useOffSetTop } from "@/hooks/use_off_set_top";
import { useResponsive } from "@/hooks/use_responsive";

import { bgBlur } from "@/themes/css";

import Logo from "@/components/logo";
import { useSettingsContext } from "@/components/settings";

import Searchbar from "../common/searchbar";
import { NAV, HEADER } from "../config_layout";
import SettingsButton from "../common/settings_button";
import AccountPopover from "../common/account_popover";
import ContactsPopover from "../common/contacts_popover";
import LanguagePopover from "../common/language_popover";
import NotificationsPopover from "../common/notifications_popover";
import Iconify from "@/components/iconify";

// ----------------------------------------------------------------------

interface HeaderProps {
	onOpenNav: VoidFunction;
}

const Header = ({ onOpenNav }: HeaderProps) => {
	const theme = useTheme();

	const settings = useSettingsContext();

	const isNavHorizontal = settings.themeLayout === "horizontal";

	const isNavMini = settings.themeLayout === "mini";

	const lgUp = useResponsive("up", "lg");

	const offset = useOffSetTop(HEADER.H_DESKTOP);

	const offsetTop = offset && !isNavHorizontal;

	const renderContent = (
		<>
			{lgUp && isNavHorizontal && <Logo sx={{ mr: 2.5 }} />}

			{!lgUp && (
				<IconButton onClick={onOpenNav}>
					<Iconify
						icon="eva:menu-2-fill"
						width={20}
						/>
				</IconButton>
			)}

			<Searchbar />

			<Stack
				flexGrow={1}
				direction="row"
				alignItems="center"
				justifyContent="flex-end"
				spacing={{ xs: 0.5, sm: 1 }}
			>
				<LanguagePopover />

				<NotificationsPopover />

				<ContactsPopover />

				<SettingsButton />

				<AccountPopover />
			</Stack>
		</>
	);

	return (
		<AppBar
			sx={{
				height: HEADER.H_MOBILE,
				zIndex: theme.zIndex.appBar + 1,
				...bgBlur({
					color: theme.palette.background.default,
				}),
				transition: theme.transitions.create(["height"], {
					duration: theme.transitions.duration.shorter,
				}),
				...(lgUp && {
					width: `calc(100% - ${NAV.W_VERTICAL + 1}px)`,
					height: HEADER.H_DESKTOP,
					...(offsetTop && {
						height: HEADER.H_DESKTOP_OFFSET,
					}),
					...(isNavHorizontal && {
						width: 1,
						bgcolor:
							theme.palette.mode == "dark"
								? theme.palette.background.navs
								: "background.default",
						height: HEADER.H_DESKTOP_OFFSET,
						borderBottom: `dashed 1px ${theme.palette.divider}`,
					}),
					...(isNavMini && {
						width: `calc(100% - ${NAV.W_MINI + 1}px)`,
					}),
				}),
			}}
		>
			<Toolbar
				sx={{
					height: 1,
					px: { lg: 5 },
					bgcolor:
							theme.palette.mode == "dark"
								? theme.palette.background.navs
								: "background.default",
				}}
			>
				{renderContent}
			</Toolbar>
		</AppBar>
	);
};

export default Header;
