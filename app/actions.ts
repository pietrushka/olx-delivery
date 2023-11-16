"use server"

import { z } from "zod"
import { insertParcelReturnId } from "@/lib/ParcelsRepository"

function validateData(formData: FormData) {
	const schema = z.object({
		senderName: z.string().nonempty(),
		senderSurname: z.string().nonempty(),
		senderPostalCode: z.string().nonempty(),
		senderCity: z.string().min(2),
		senderStreetAndNumber: z.string().nonempty(),
		senderEmail: z.string().nonempty(),
		senderPhone: z.string().nonempty(),
		senderLockerCode: z.string().nonempty(),
		recipientName: z.string().nonempty(),
		recipientSurname: z.string().nonempty(),
		recipientPostalCode: z.string().nonempty(),
		recipientCity: z.string().min(2),
		recipientStreetAndNumber: z.string().nonempty(),
		recipientEmail: z.string().nonempty(),
		recipientPhone: z.string().nonempty(),
		recipientLockerCode: z.string().nonempty(),
	})
	return schema.parse(Object.fromEntries(formData))
}

export async function addParcel(prevState: any, formData: FormData) {
	const data = validateData(formData)
	const parcelId = await insertParcelReturnId(data)

	if (!parcelId) {
		return { message: "Error while adding parcel" }
	}

	// TODO add parcel processing logic
	// fetch("http://localhost:3000/api/parcel", {
	// 	method: "POST",
	// 	body: JSON.stringify({ parcelId }),
	// })

	return { message: "Parcel added succesfully, we are processing it right now" }
}
