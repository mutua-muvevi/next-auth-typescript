import { getYear, isSameDay, isSameMonth } from "date-fns";

import { fDate } from "@/utils/format_time";

// ----------------------------------------------------------------------

export const shortDateLabel = (
	startDate: string | Date | number,
	endDate: string | Date | number
) => {
	const getCurrentYear = new Date().getFullYear();

	const startDateYear = startDate ? getYear(startDate) : null;

	const endDateYear = endDate ? getYear(endDate) : null;

	const currentYear =
		getCurrentYear === startDateYear && getCurrentYear === endDateYear;

	const sameDay =
		startDate && endDate
			? isSameDay(new Date(startDate), new Date(endDate))
			: false;

	const sameMonth =
		startDate && endDate
			? isSameMonth(new Date(startDate), new Date(endDate))
			: false;

	if (currentYear) {
		if (sameMonth) {
			if (sameDay) {
				return fDate(endDate, "dd MMM yy");
			}
			return `${fDate(startDate, "dd")} - ${fDate(endDate, "dd MMM yy")}`;
		}
		return `${fDate(startDate, "dd MMM")} - ${fDate(endDate, "dd MMM yy")}`;
	}

	return `${fDate(startDate, "dd MMM yy")} - ${fDate(endDate, "dd MMM yy")}`;
}
