import { useMemo } from "react";
import { paths } from "@/routes/paths";
import  { useTranslate } from "@/locales"

import Iconify from "@/components/iconify";


export const useNavData = () => {

	const translate = useTranslate();

	const data = useMemo(
		() => [
			{
				// subheader: translate("overview")
				subheader: "overview",
				items: [
					""
				]
			}
		], [translate]
	)

}