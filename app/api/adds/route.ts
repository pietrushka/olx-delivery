import OlxPage from "@/lib/puppeteer/OlxPage"
import CommonPage from "@/lib/puppeteer/CommonPage"
import OlxAccountsRepository from "@/lib/repositories/OlxAccountsRepository"
import AdsBlueprintsRepository from "@/lib/repositories/AdsBlueprintsRepository"
import { OLX_BASE_URL } from "@/lib/constants/olx"

export async function POST() {
	// TODO rearrange queries
	const storageData = await OlxAccountsRepository.getStorageData()
	if (!storageData) {
		throw new Error("noStorageData")
	}
	const adBlueprint = await AdsBlueprintsRepository.getBlueprint()
	if (!adBlueprint) {
		throw new Error("noBlueprint")
	}
	const { page, browser } = await CommonPage.init()
	try {
		await OlxPage.loadStorageData(page, storageData.cookies, storageData.localStorage)
		await OlxPage.createNewAd(page, adBlueprint)
	} finally {
		await page.goto(OLX_BASE_URL, { waitUntil: "networkidle0" })
		const pageStorage = await CommonPage.extractStorageData(page)
		OlxAccountsRepository.saveStorageData(storageData.accountId, pageStorage)
		await browser.close()
	}
}
