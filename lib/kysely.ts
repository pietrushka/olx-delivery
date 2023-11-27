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

interface OlxAccountsTable {
	id: Generated<number>
	email: string
	password: string
	cookiesString: string
	localStorageString: string
	createdAt: ColumnType<Date, string | undefined, never>
}

interface AdsBlueprintsTable {
	id: Generated<number>
	title: string
	description: string
	price: number
	loaction: string
	contactName: string
}

export type Parcel = Selectable<ParcelsTable>
export type NewParcel = Insertable<ParcelsTable>
export type ParcelUpdate = Updateable<ParcelsTable>

export type OlxAccount = Selectable<OlxAccountsTable>
export type NewOlxAccount = Insertable<OlxAccountsTable>
export type OlxAccountUpdate = Updateable<OlxAccountsTable>

export type AdsBlueprint = Selectable<AdsBlueprintsTable>
export type NewAdsBlueprint = Insertable<AdsBlueprintsTable>
export type AdsBlueprintUpdate = Updateable<AdsBlueprintsTable>

// Keys of this interface are table names.
export interface Database {
	parcels: ParcelsTable
	olxAccounts: OlxAccountsTable
	adsBlueprints: AdsBlueprintsTable
}

export const db = createKysely<Database>()
export { sql } from "kysely"
