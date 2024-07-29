import merge from "lodash/merge";

import { fab } from "./components/fab";
import { card } from "./components/card";
import { chip } from "./components/chip";
import { tabs } from "./components/tabs";
import { menu } from "./components/menu";
import { list } from "./components/list";
import { table } from "./components/table";
import { alert } from "./components/alert";
import { badge } from "./components/badge";
import { paper } from "./components/paper";
import { radio } from "./components/radio";
import { appBar } from "./components/appbar";
import { drawer } from "./components/drawer";
import { dialog } from "./components/dialog";
import { avatar } from "./components/avatar";
import { rating } from "./components/rating";
import { slider } from "./components/slider";
import { button } from "./components/button";
import { select } from "./components/select";
import { defaultProps } from "./default_props";
import { switches } from "./components/switch";
import { tooltip } from "./components/tooltip";
import { popover } from "./components/popover";
import { stepper } from "./components/stepper";
import { svgIcon } from "./components/svg_icon";
import { skeleton } from "./components/skeleton";
import { backdrop } from "./components/backdrop";
import { progress } from "./components/progress";
import { timeline } from "./components/timeline";
import { checkbox } from "./components/checkbox";
import { dataGrid } from "./components/data_grid";
import { treeView } from "./components/treeview";
import { textField } from "./components/textfield";
import { accordion } from "./components/accordion";
import { typography } from "./components/typography";
import { pagination } from "./components/pagination";
import { datePicker } from "./components/date_picker";
import { breadcrumbs } from "./components/breadcrumbs";
import { cssBaseline } from "./components/css_baseline";
import { buttonGroup } from "./components/button_group";
import { autocomplete } from "./components/autocomplete";
import { toggleButton } from "./components/toggle_button";
import { loadingButton } from "./components/loading_button";

// ----------------------------------------------------------------------

export function componentsOverrides(theme : object) {
	const components = merge(
		defaultProps(theme),
		//
		fab(theme),
		tabs(theme),
		chip(theme),
		card(theme),
		menu(theme),
		list(theme),
		badge(theme),
		table(theme),
		paper(theme),
		alert(theme),
		radio(theme),
		select(theme),
		button(theme),
		rating(theme),
		dialog(theme),
		appBar(theme),
		avatar(theme),
		slider(theme),
		drawer(theme),
		stepper(theme),
		tooltip(theme),
		popover(theme),
		svgIcon(theme),
		switches(theme),
		checkbox(theme),
		dataGrid(theme),
		skeleton(theme),
		timeline(theme),
		treeView(theme),
		backdrop(theme),
		progress(theme),
		textField(theme),
		accordion(theme),
		typography(theme),
		pagination(theme),
		datePicker(theme),
		buttonGroup(theme),
		breadcrumbs(theme),
		cssBaseline(theme),
		autocomplete(theme),
		toggleButton(theme),
		loadingButton(theme)
	);

	return components;
}
