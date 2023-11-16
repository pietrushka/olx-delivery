import { db } from "@/lib/kysely"
import { NewParcel } from "@/lib/kysely"

export async function findParcelById(id: number) {
	return await db.selectFrom("parcels").where("id", "=", id).selectAll().executeTakeFirst()
}

export async function insertParcelReturnId(data: NewParcel) {
	const insertResult = await db
		.insertInto("parcels")
		.values(data)
		.returning("id")
		.executeTakeFirst()
	return insertResult?.id
}
