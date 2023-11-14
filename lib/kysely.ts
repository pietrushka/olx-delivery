import { Generated, ColumnType } from "kysely"
import { createKysely } from "@vercel/postgres-kysely"

interface ParcelsTable {
	id: Generated<number>
	senderName: string
	senderSurname: string
	senderPostalCode: string
	senderCity: string
	senderStreetAndNumber: string
	senderEmail: string
	senderPhone: string
	recipientName: string
	recipientSurname: string
	recipientPostalCode: string
	recipientCity: string
	recipientStreetAndNumber: string
	recipientEmail: string
	recipientPhone: string
	createdAt: ColumnType<Date, string | undefined, never>
}

// Keys of this interface are table names.
export interface Database {
	parcels: ParcelsTable
}

export const db = createKysely<Database>()
export { sql } from "kysely"