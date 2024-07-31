import { memo } from "react";

import Stack from "@mui/material/Stack";

import NavList from "./nav_list";

// -----------------------------------------------------------------------

interface GroupProps {
	items: any[];
	slotProps?: object;
}

const Group = ({ items, slotProps }: GroupProps) => {
	return (
		<>
			{items.map((list): any => (
				<NavList key={list.title} data={list} depth={1} slotProps={slotProps} />
			))}
		</>
	);
};

// ----------------------------------------------------------------------
interface NavSectionMiniProps {
	data: any[];
	slotProps?: object;
}

const NavSectionMini = ({ data, slotProps, ...other }: NavSectionMiniProps) => {
	return (
		<Stack
			component="nav"
			id="nav-section-mini"
			spacing={`${slotProps?.gap || 4}px`}
			{...other}
		>
			{data.map((group, index): any => (
				<Group
					key={group.subheader || index}
					items={group.items}
					slotProps={slotProps}
				/>
			))}
		</Stack>
	);
};

export default memo(NavSectionMini);

// ----------------------------------------------------------------------