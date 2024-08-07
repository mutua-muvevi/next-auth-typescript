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
					{
						title: "Dashboard",
						path: paths.admin.root,
						icon: <Iconify icon="lets-icons:home-duotone" />
					},
					{
						title: "Users",
						path: paths.admin.users,
						icon: <Iconify icon="lets-icons:home-duotone" />
					},
					{
						title: "Marketing",
						path: paths.admin.marketing,
						icon: <Iconify icon="lets-icons:home-duotone" />
					},
					{
						title: "Finance",
						path: paths.admin.finance,
						icon: <Iconify icon="lets-icons:home-duotone" />
					},
				]
			}
		], [translate]
	)

	return data
}