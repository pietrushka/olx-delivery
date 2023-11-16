import { ColumnType, Generated, Insertable, Selectable, Updateable } from "kysely"
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
	senderLockerCode: string
	recipientName: string
	recipientSurname: string
	recipientPostalCode: string
	recipientCity: string
	recipientStreetAndNumber: string
	recipientEmail: string
	recipientPhone: string
	recipientLockerCode: string
	createdAt: ColumnType<Date, string | undefined, never>
}

export type Parcel = Selectable<ParcelsTable>
export type NewParcel = Insertable<ParcelsTable>
export type ParcelUpdate = Updateable<ParcelsTable>

// Keys of this interface are table names.
export interface Database {
	parcels: ParcelsTable
}

export const db = createKysely<Database>()
export { sql } from "kysely"
