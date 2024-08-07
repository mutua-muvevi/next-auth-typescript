import { paramCase } from '@/utils/change_case';

//----------------------------------------------------------------

const ROOTS = {
	AUTH: "/auth",
	ADMIN: "/admin",
	APP: "/app",
	PUBLIC: "/",
	DEV: "/developer"
}

//-----------------------------------------------------------------

export const paths = {
	developer: {
		root: ROOTS.DEV,
		components: {
			root: `${ROOTS.DEV}/components`,

			// Components
			forms: `${ROOTS.DEV}/components/forms`,
			datagrid: `${ROOTS.DEV}/components/datagrid`,
			charts: `${ROOTS.DEV}/components/charts`,

		}
	},
	admin : {
		root: ROOTS.ADMIN,

		// pages
		users: `${ROOTS.ADMIN}/users`,
		marketing: `${ROOTS.ADMIN}/marketing`,
		finance: `${ROOTS.ADMIN}/finance`,
	},
	auth: {
		root: ROOTS.AUTH,
	},
	public: {
		root: ROOTS.PUBLIC,

		// pages
		articles: `${ROOTS.PUBLIC}/articles`,
		article_detail: (slug: string) => `${ROOTS.PUBLIC}/article/${paramCase(slug)}`,

		faqs: `${ROOTS.PUBLIC}/faqs`,
		about: `${ROOTS.PUBLIC}/about`,
		contact: `${ROOTS.PUBLIC}/contact`,
		products: `${ROOTS.PUBLIC}/products`,

		terms: `${ROOTS.PUBLIC}/terms`,
		privacy: `${ROOTS.PUBLIC}/privacy`,

	},
	app: {
		root: ROOTS.APP
	}
}