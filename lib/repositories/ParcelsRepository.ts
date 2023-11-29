import { db } from "@/lib/kysely"
import { NewParcel } from "@/lib/kysely"

class ParcelsRepository {
	insertParcelReturnId = async (data: NewParcel) => {
		const insertResult = await db
			.insertInto("parcels")
			.values(data)
			.returning("id")
			.executeTakeFirst()
		return insertResult?.id
	}

	findParcelById = async (id: number) => {
		return await db.selectFrom("parcels").where("id", "=", id).selectAll().executeTakeFirst()
	}
}

export default new ParcelsRepository()
