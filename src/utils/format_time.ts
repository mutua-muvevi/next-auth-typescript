import { format, getTime, formatDistanceToNow } from "date-fns";

// ----------------------------------------------------------------------

export function fDate(date : any, newFormat: any) {
	const fm = newFormat || "dd MMM yyyy";

	return date ? format(new Date(date), fm) : "";
}

export function fTime(date : any, newFormat : any) {
	const fm = newFormat || "p";

	return date ? format(new Date(date), fm) : "";
}

export function fDateTime(date : any, newFormat : any) {
	const fm = newFormat || "dd MMM yyyy p";

	return date ? format(new Date(date), fm) : "";
}

export function fTimestamp(date : any) {
	return date ? getTime(new Date(date)) : "";
}

export function fToNow(date : any) {
	return date
		? formatDistanceToNow(new Date(date), {
				addSuffix: true,
		  })
		: "";
}

export function isBetween(inputDate : any, startDate : any, endDate : any) {
	const date = new Date(inputDate);

	const results =
		new Date(date.toDateString()) >= new Date(startDate.toDateString()) &&
		new Date(date.toDateString()) <= new Date(endDate.toDateString());

	return results;
}

export function isAfter(startDate : any, endDate : any) {
	const results =
		startDate && endDate
			? new Date(startDate).getTime() > new Date(endDate).getTime()
			: false;

	return results;
}
