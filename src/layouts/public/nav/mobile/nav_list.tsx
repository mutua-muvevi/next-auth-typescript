import { useState, useCallback } from "react";

import Collapse from "@mui/material/Collapse";
import { stackClasses } from "@mui/material/Stack";
import { listItemButtonClasses } from "@mui/material/ListItemButton";

import { useActiveLink } from "@/routes/hooks/use_active_link";

import { NavSectionVertical } from "@/components/nav_section";

import { NavItem } from "./nav_item";

// ----------------------------------------------------------------------

interface NavListProps {
	data: {
		title: string;
		path: string;
		icon?: React.ReactElement;
		children?: {
			title: string;
			path: string;
		}[];
	};
}

const NavList = ({ data }: NavListProps) => {
	const active = useActiveLink(data.path, !!data.children);

	const [openMenu, setOpenMenu] = useState(false);

	const handleToggleMenu = useCallback(() => {
		if (data.children) {
			setOpenMenu((prev) => !prev);
		}
	}, [data.children]);

	return (
		<>
			<NavItem
				open={openMenu}
				onClick={handleToggleMenu}
				//
				title={data.title}
				path={data.path}
				icon={data.icon}
				//
				hasChild={!!data.children}
				externalLink={data.path.includes("http")}
				//
				active={active}
			/>

			{!!data.children && (
				<Collapse in={openMenu} unmountOnExit>
					<NavSectionVertical
						data={data.children}
						slotProps={{
							rootItem: {
								minHeight: 36,
							},
						}}
						sx={{
							[`& .${stackClasses.root}`]: {
								"&:last-of-type": {
									[`& .${listItemButtonClasses.root}`]: {
										height: 160,
										backgroundSize: "cover",
										backgroundPosition: "center",
										bgcolor: "background.neutral",
										backgroundRepeat: "no-repeat",
										backgroundImage:
											"url(/assets/illustrations/illustration_dashboard.png)",
										"& .label": {
											display: "none",
										},
									},
								},
							},
						}}
					/>
				</Collapse>
			)}
		</>
	);
};

export default NavList;
