import { useState, useCallback } from "react";

// ----------------------------------------------------------------------

const usePopover = () => {
	const [open, setOpen] = useState(null);

	const onOpen = useCallback((event: any) => {
		setOpen(event.currentTarget);
	}, []);

	const onClose = useCallback(() => {
		setOpen(null);
	}, []);

	return {
		open,
		onOpen,
		onClose,
		setOpen,
	};
}

export default usePopover