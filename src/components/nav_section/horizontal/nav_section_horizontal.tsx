import { memo } from "react";

import Stack from "@mui/material/Stack";

import NavList from "./nav_list";

// ----------------------------------------------------------------------

interface GroupProps {
	items: any[];
	slotProps?: object;
}

const Group = ({ items, slotProps }: GroupProps) => {
	return (
		<>
			{items.map((list: object) => (
				<NavList key={list.title} data={list} depth={1} slotProps={slotProps} />
			))}
		</>
	);
};

// ----------------------------------------------------------------------

interface NavSectionHorizontalProps {
	data: any[];
	sx?: object;
	slotProps?: object;
	[key: string]: any;
}

const NavSectionHorizontal = ({
	data,
	slotProps,
	sx,
	...other
}: NavSectionHorizontalProps) => {
	return (
		<Stack
			component="nav"
			id="nav-section-horizontal"
			direction="row"
			alignItems="center"
			spacing={`${slotProps?.gap || 6}px`}
			sx={{
				mx: "auto",
				...sx,
			}}
			{...other}
		>
			{data.map((group, index) => (
				<Group
					key={group.subheader || index}
					items={group.items}
					slotProps={slotProps}
				/>
			))}
		</Stack>
	);
};

export default memo(NavSectionHorizontal);
