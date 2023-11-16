async function seedParcels() {
	const { db, sql } = await import("./lib/kysely")
	const createTable = await db.schema
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
	return {
		createTable,
	}
}

;(async () => {
	await seedParcels()
})()
