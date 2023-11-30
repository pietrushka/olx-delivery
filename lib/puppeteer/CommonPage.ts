import puppeteer from "puppeteer-extra"
import { Page } from "puppeteer"
import StealthPlugin from "puppeteer-extra-plugin-stealth"

export type Cookie = {
	name: string
	value: string
	expirationDate?: string
	path?: string
	secure?: string
	sameSite?: string
}

export type LocalStorage = Record<string, string>

class CommonPage {
	init = async () => {
		const stealthPlugin = StealthPlugin()
		stealthPlugin.enabledEvasions.delete("iframe.contentWindow")
		stealthPlugin.enabledEvasions.delete("navigator.plugins")
		puppeteer.use(stealthPlugin)
		const browser = await puppeteer.launch({
			headless: false,
		})
		const page = await browser.newPage()

		return { browser, page }
	}

	loadStorageData = async (
		page: Page,
		cookies: Record<string, unknown>[],
		localStorageData: LocalStorage
	) => {
		await page.evaluate(
			(cookies, localStorageData) => {
				// delete cookies
				const existingCookies = document.cookie.split(";")
				for (let i = 0; i < existingCookies.length; i++) {
					const cookie = existingCookies[i]
					const eqPos = cookie.indexOf("=")
					const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
					document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT"
				}

				// create new cookies
				cookies.forEach((cookie) => {
					let cookieString = `${cookie.name}=${cookie.value};`

					if (typeof cookie.expirationDate === "number") {
						const expiryDate = new Date(cookie.expirationDate * 1000)
						cookieString += ` expires=${expiryDate.toUTCString()};`
					}

					if (cookie.path) {
						cookieString += ` path=${cookie.path};`
					}

					if (cookie.secure) {
						cookieString += " secure;"
					}

					if (cookie.sameSite) {
						cookieString += ` samesite=${cookie.sameSite};`
					}

					document.cookie = cookieString
				})

				// load localStorage
				for (let key in localStorageData) {
					localStorage.setItem(key, localStorageData[key])
				}
			},
			cookies,
			localStorageData
		)
	}

	extractStorageData = async (page: Page) => {
		const localStorageData = await page.evaluate(() => {
			let data: Record<string, unknown> = {}
			for (let i = 0; i < localStorage.length; i++) {
				const key = localStorage.key(i)
				if (key) {
					data[key] = localStorage.getItem(key)
				}
			}
			return data
		})
		const cookies = await page.cookies()

		return { cookies, localStorage: localStorageData }
	}

	clearInput = async (page: Page, inputSelector: string) => {
		const inputValue = await page.$eval(inputSelector, (el) => (el as HTMLInputElement).value)
		await page.click(inputSelector)

		for (let i = 0; i < inputValue.length; i++) {
			await page.keyboard.press("Backspace")
		}
	}
}

const commonPage = new CommonPage()
export default commonPage
