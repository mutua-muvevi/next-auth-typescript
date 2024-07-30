// ----------------------------------------------------------------------

interface FlattenArrayProps {
	list: any[];
	key?: string;
}

export const flattenArray = (list: any[], key = "children"): any => {
	let children: any[] = [];

	const flatten = list?.map((item) => {
		if (item[key] && item[key].length) {
			children = [...children, ...item[key]];
		}
		return item;
	});

	return flatten?.concat(
		children.length ? flattenArray(children, key) : children
	);
};
