import { OLX_BASE_URL, olxRoutes, OlxRoute } from "@/lib/constants/olx"

type QueryParams = Record<PropertyKey, unknown>

export function sanitizeOlxHref(href?: string): OlxRoute | undefined {
	if (!href) return
	const route = href.replace(/\//gi, "").replace(/?.*/gi, "")

	if (olxRoutes.includes(route as OlxRoute)) return route as OlxRoute
}

export default class OlxLinkGenerator {
	subPageArr: OlxRoute[] = []
	queryParams: QueryParams = {}

	addSubPage = (page: OlxRoute) => {
		this.subPageArr.push(page)
		return this
	}

	addParams = (params: QueryParams) => {
		this.queryParams = { ...this.queryParams, ...params }
		return this
	}
	addDeliveryParam = () => {
		this.queryParams["courier"] = 1
		return this
	}

	get url() {
		const subPageString = `/${this.subPageArr.join("/")}`
		const queryString =
			"?" +
			Object.entries(this.queryParams)
				.map(([key, value]) => `${key}=${value}`)
				.join("&")
		return OLX_BASE_URL + subPageString + queryString
	}
}
