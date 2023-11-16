import Image from "next/image"
import Link from "next/link"

function AddButton() {
	return (
		<Link className=" rounded border-2 border-black p-2 text-xl font-bold" href="/add-parcel">
			<span className="block text-center">+</span>
			<Image src="/package.png" width={100} height={100} alt="package" />
		</Link>
	)
}

export default function Home() {
	return (
		<div className="flex min-h-full flex-col items-center gap-10 p-4">
			<h1 className="text-7xl font-bold">WE ARE MAKING SENDING CRAZY CHEAP</h1>
			<AddButton />
		</div>
	)
}
