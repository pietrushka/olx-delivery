import { db } from "@/lib/kysely"

class AdsBlueprintsRepository {
	getBlueprint = async () => {
		return await db.selectFrom("adsBlueprints").selectAll().executeTakeFirst()
	}
}

export default new AdsBlueprintsRepository()
