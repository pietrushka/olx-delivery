"use client"

import { useFormState, useFormStatus } from "react-dom"
import { addParcel } from "@/app/actions"
import TextInput from "./TextInput"

function SubmitButton() {
	const { pending } = useFormStatus()

	return (
		<button
			type="submit"
			aria-label="Remove cart item"
			aria-disabled={pending}
			className="mx-auto block border-2 border-black p-2"
		>
			Submit →
		</button>
	)
}

function AddressFormGroup({ role }: { role: string }) {
	return (
		<div className="flex border-y-2 border-black">
			<div className="flex w-8 justify-center border-r-2 border-black">
				<h2 className="my-auto rotate-90 uppercase">{role}</h2>
			</div>
			<div className="w-full divide-y-2 divide-black">
				<TextInput id={`${role}Name`} label="Name" />
				<TextInput id={`${role}Surname`} label="Surname" />
				<TextInput id={`${role}PostalCode`} label="Postal Code" />
				<TextInput id={`${role}City`} label="City" />
				<TextInput id={`${role}StreetAndNumber`} label="Street & number" />
				<TextInput id={`${role}Email`} label="Email" />
				<TextInput id={`${role}Phone`} label="Phone" />
				<TextInput id={`${role}LockerCode`} label="Locker Code" />
			</div>
		</div>
	)
}

export default function Form() {
	const [state, formAction] = useFormState(addParcel, null)

	return (
		<form action={formAction} className="">
			<div className="mx-auto grid gap-4">
				<AddressFormGroup role="sender" />
				<AddressFormGroup role="recipient" />
				<SubmitButton />
			</div>
		</form>
	)
}
