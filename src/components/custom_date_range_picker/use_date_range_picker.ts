import { useState, useCallback } from "react";

import { fDate } from "@/utils/format_time";

import { shortDateLabel } from "./utils";

// ----------------------------------------------------------------------
interface useDateRangePickerProps {
	start : string | Date | number;
	end : string | Date | number;
}

const useDateRangePicker = (start: string | Date | number, end : string | Date | number) : object => {
	const [open, setOpen] = useState(false);

	const [endDate, setEndDate] = useState(end);

	const [startDate, setStartDate] = useState(start);

	const error =
		start && end ? new Date(start).getTime() > new Date(end).getTime() : false;

	const onOpen = useCallback(() => {
		setOpen(true);
	}, []);

	const onClose = useCallback(() => {
		setOpen(false);
	}, []);

	const onChangeStartDate = useCallback((newValue) => {
		setStartDate(newValue);
	}, []);

	const onChangeEndDate = useCallback(
		(newValue) => {
			if (error) {
				setEndDate(null);
			}
			setEndDate(newValue);
		},
		[error]
	);

	const onReset = useCallback(() => {
		setStartDate(null);
		setEndDate(null);
	}, []);

	return {
		startDate,
		endDate,
		onChangeStartDate,
		onChangeEndDate,
		//
		open,
		onOpen,
		onClose,
		onReset,
		//
		selected: !!startDate && !!endDate,
		error,
		//
		label: `${fDate(startDate)} - ${fDate(endDate)}`,
		shortLabel: shortDateLabel(startDate, endDate),
		//
		setStartDate,
		setEndDate,
	};
}

export default useDateRangePicker