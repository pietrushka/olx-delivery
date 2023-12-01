import { Page } from "puppeteer"
import CommonPage, { Cookie, LocalStorage } from "@/lib/puppeteer/CommonPage"
import { AdsBlueprint } from "@/lib/kysely"
import OlxLinkGenerator from "@/lib/utils/OlxLinkGenerator"
import { OLX_BASE_URL, OlxSelectors, OlxXPathExpressions } from "@/lib/constants/olx"

class OlxPage {
	handlePayUForm = async (page: Page, blueprint: AdsBlueprint) => {
		await page.waitForSelector(OlxSelectors.privateSellOption)
		await page.click(OlxSelectors.privateSellOption)

		await page.waitForSelector(OlxSelectors.sellerPayUFirstName)
		await page.type(OlxSelectors.sellerPayUFirstName, blueprint.contactName)

		await page.waitForSelector(OlxSelectors.sellerPayULastName)
		await page.type(OlxSelectors.sellerPayULastName, blueprint.contactName)

		await page.waitForTimeout(3000) // TODO

		await page.waitForSelector(OlxSelectors.payUTermsIframe)
		const verificationFrameAccessor = await page.$(OlxSelectors.payUTermsIframe)

		if (!verificationFrameAccessor) {
			throw new Error("No payU terms verificationFrameAccessor")
		}

		const verificationFrame = await verificationFrameAccessor.contentFrame()
		if (!verificationFrame) {
			throw new Error("No payU terms verificationFrame")
		}
		await verificationFrame.waitForSelector(OlxSelectors.payUTermsCheckbox)
		await verificationFrame.click(OlxSelectors.payUTermsCheckbox)
	}

	createNewAd = async (page: Page, blueprint: AdsBlueprint) => {
		const createAdUrl = new OlxLinkGenerator().addSubPage("adding").url
		await page.goto(createAdUrl, { waitUntil: "networkidle0" })

		this.handleNotFinishedAdModal(page)

		await page.waitForTimeout(10000)

		await page.waitForSelector(OlxSelectors.titleInput)
		await page.type(OlxSelectors.titleInput, blueprint.title)

		await page.waitForTimeout(1000)

		await page.waitForSelector(OlxSelectors.descriptionInput)
		await page.type(OlxSelectors.descriptionInput, blueprint.description)

		await page.waitForTimeout(1000)

		await page.waitForSelector(OlxSelectors.priceInput)
		await page.type(OlxSelectors.priceInput, `${blueprint.price}`)

		await page.waitForTimeout(5000)

		await page.waitForSelector(OlxSelectors.itemUsedRadioButton)
		await page.click(OlxSelectors.itemUsedRadioButton) // item used

		// await page.waitForSelector(OlxSelectors.autoProlongationButton)
		// await page.click(OlxSelectors.autoProlongationButton) // auto prolongation enebled

		await page.waitForSelector(OlxSelectors.sSizeToggle)
		await page.click(OlxSelectors.sSizeToggle)

		await page.waitForTimeout(500)

		await page.waitForSelector(OlxSelectors.inpostSSizeInput)
		await page.click(OlxSelectors.inpostSSizeInput)

		await page.waitForTimeout(2000)
		await this.handlePayUForm(page, blueprint)

		await page.waitForTimeout(2000)
		await CommonPage.clearInput(page, OlxSelectors.cityInput)
		await page.waitForSelector(OlxSelectors.cityInput)
		await page.type(OlxSelectors.cityInput, blueprint.loaction)

		await page.waitForTimeout(1000)
		await page.waitForSelector(OlxSelectors.locationSuggestionOption)
		await page.click(OlxSelectors.locationSuggestionOption)

		await page.waitForSelector(OlxSelectors.createAdSubmit)
		await page.click(OlxSelectors.createAdSubmit)
	}

	loadStorageData = async (page: Page, cookies: Cookie[], localStorageData: LocalStorage) => {
		await page.goto(OLX_BASE_URL, { waitUntil: "networkidle0" })
		await CommonPage.loadStorageData(page, cookies, localStorageData)
		await page.waitForNetworkIdle()
		await page.reload({ waitUntil: "networkidle0" })
	}

	handleNotFinishedAdModal = async (page: Page) => {
		const isModalPresent = await page.evaluate((selector) => {
			const modal = document.querySelector(selector)
			return modal !== null && (modal as HTMLElement).style.display !== "none"
		}, OlxSelectors.notFinishedAdModal)

		if (isModalPresent) {
			const [button] = await page.$x(OlxXPathExpressions.textNo)
			if (button) {
				await button.evaluate((b) => (b as HTMLElement).click())
			}
		}
	}
}

export default new OlxPage()
