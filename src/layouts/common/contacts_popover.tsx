import { m } from "framer-motion";

import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";

import { fToNow } from "@/utils/format_time";

import { _contacts } from "@/_mock";

import Iconify from "@/components/iconify";
import Scrollbar from "@/components/scrollbar";
import { varHover } from "@/components/animate";
import CustomPopover, { usePopover } from "@/components/custom_popover";

// ----------------------------------------------------------------------

const ContactsPopover = () => {
	const popover = usePopover();

	return (
		<>
			<IconButton
				component={m.button}
				whileTap="tap"
				whileHover="hover"
				variants={varHover(1.05)}
				color={popover.open ? "inherit" : "default"}
				onClick={popover.onOpen}
				sx={{
					...(popover.open && {
						bgcolor: (theme) => theme.palette.action.selected,
					}),
				}}
			>
				<Iconify icon="solar:users-group-rounded-bold-duotone" width={24} />
			</IconButton>

			<CustomPopover
				open={popover.open}
				onClose={popover.onClose}
				sx={{ width: 320 }}
			>
				<Typography variant="h6" sx={{ p: 1.5 }}>
					Contacts{" "}
					<Typography component="span">({_contacts.length})</Typography>
				</Typography>

				<Scrollbar sx={{ height: 320 }}>
					{_contacts.map((contact) => (
						<MenuItem key={contact.id} sx={{ p: 1 }}>
							<Badge
								variant={contact.status}
								anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
								sx={{ mr: 2 }}
							>
								<Avatar alt={contact.name} src={contact.avatarUrl} />
							</Badge>

							<ListItemText
								primary={contact.name}
								secondary={
									contact.status === "offline"
										? fToNow(contact.lastActivity)
										: ""
								}
								primaryTypographyProps={{ typography: "subtitle2" }}
								secondaryTypographyProps={{
									typography: "caption",
									color: "text.disabled",
								}}
							/>
						</MenuItem>
					))}
				</Scrollbar>
			</CustomPopover>
		</>
	);
}

export default ContactsPopover;