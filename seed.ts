import olxAccountsSeed from "@/seedData/olxAccountsSeed.json"
import adBlueprintsSeed from "@/seedData/adBlueprintsSeed.json"

async function seedParcels() {
	const { db, sql } = await import("./lib/kysely")

	const createParcelsTable = await db.schema
		.createTable("parcels")
		.ifNotExists()
		.addColumn("id", "serial", (cb) => cb.primaryKey())
		.addColumn("senderName", "varchar(255)")
		.addColumn("senderSurname", "varchar(255)")
		.addColumn("senderPostalCode", "varchar(20)")
		.addColumn("senderCity", "varchar(100)")
		.addColumn("senderStreetAndNumber", "varchar(255)")
		.addColumn("senderEmail", "varchar(255)")
		.addColumn("senderPhone", "varchar(20)")
		.addColumn("recipientName", "varchar(255)")
		.addColumn("recipientSurname", "varchar(255)")
		.addColumn("recipientPostalCode", "varchar(20)")
		.addColumn("recipientCity", "varchar(100)")
		.addColumn("recipientStreetAndNumber", "varchar(255)")
		.addColumn("recipientEmail", "varchar(255)")
		.addColumn("recipientPhone", "varchar(20)")
		.addColumn("createdAt", sql`timestamp with time zone`, (cb) =>
			cb.defaultTo(sql`current_timestamp`)
		)
		.execute()
	console.log(`Created "parcels" table`)

	const createOlxAccountsTable = await db.schema
		.createTable("olxAccounts")
		.ifNotExists()
		.addColumn("id", "serial", (cb) => cb.primaryKey())
		.addColumn("email", "varchar(255)")
		.addColumn("password", "varchar(255)")
		.addColumn("cookiesString", "text")
		.addColumn("localStorageString", "text")
		.addColumn("createdAt", sql`timestamp with time zone`, (cb) =>
			cb.defaultTo(sql`current_timestamp`)
		)
		.execute()
	console.log(`Created "olxAccounts" table`)

	const migration = await db.schema
		.alterTable("olxAccounts")
		.alterColumn("cookiesString", (column) => column.setDataType("text"))
		.alterColumn("localStorageString", (column) => column.setDataType("text"))
		.execute()

	const addOlxAccounts = await db
		.insertInto("olxAccounts")
		.values(
			olxAccountsSeed.map((x) => ({
				email: x.email,
				password: x.password,
				localStorageString: JSON.stringify(x.localStorage),
				cookiesString: JSON.stringify(x.cookies),
			}))
		)
		.execute()
	console.log(`Seeded database with ${olxAccountsSeed.length} olx accounts`)

	const createAdsBlueprintsTable = await db.schema
		.createTable("adsBlueprints")
		.ifNotExists()
		.addColumn("id", "serial", (cb) => cb.primaryKey())
		.addColumn("title", "varchar(255)")
		.addColumn("description", "varchar(255)")
		.addColumn("price", "decimal")
		.addColumn("loaction", "varchar(255)")
		.addColumn("contactName", "varchar(255)")
		.execute()
	console.log(`Created "adsBlueprints" table`)

	const addBlueprints = await db
		.insertInto("adsBlueprints")
		.values(
			adBlueprintsSeed.map((x) => ({
				title: x.title,
				description: x.description,
				price: x.price,
				loaction: x.loaction,
				contactName: x.contactName,
			}))
		)
		.execute()
	console.log(`Seeded database with ${adBlueprintsSeed.length} ad blueprints`)

	return {
		createParcelsTable,
		createOlxAccountsTable,
		// addOlxAccounts,
		createAdsBlueprintsTable,
		// addBlueprints,
		migration,
	}
}

;(async () => {
	await seedParcels()
})()
