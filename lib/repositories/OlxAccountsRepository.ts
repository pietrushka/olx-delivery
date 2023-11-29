import { db } from "@/lib/kysely"
import { Protocol } from "puppeteer"

class OlxAccountsRepository {
	getLogin = async () => {
		return await db.selectFrom("olxAccounts").select(["email", "password"]).executeTakeFirst()
	}
	getStorageData = async () => {
		const row = await db
			.selectFrom("olxAccounts")
			.select(["id", "cookiesString", "localStorageString"])
			.executeTakeFirst()

		if (!row) return

		return {
			cookies: JSON.parse(row.cookiesString),
			localStorage: JSON.parse(row.localStorageString),
			accountId: row.id,
		}
	}
	saveStorageData = async (
		accountId: number,
		{
			cookies,
			localStorage,
		}: { cookies: Protocol.Network.Cookie[]; localStorage: Record<string, unknown> }
	) => {
		await db
			.updateTable("olxAccounts")
			.set({
				cookiesString: JSON.stringify(cookies),
				localStorageString: JSON.stringify(localStorage),
			})
			.where("id", "=", accountId)
			.executeTakeFirst()
		console.log(
			"------------------------------------------------ account updated ------------------------------------------------"
		)
	}
}

export default new OlxAccountsRepository()
