"use client"

import { UserButton, useAuth, SignInButton } from "@clerk/nextjs"
import Link from "next/link"

function AuthButton() {
	const { isSignedIn } = useAuth()

	if (isSignedIn) {
		return (
			<div className=" flex items-center justify-center px-2 ">
				<UserButton afterSignOutUrl="/" />
			</div>
		)
	}
	return (
		<SignInButton afterSignInUrl="/" afterSignUpUrl="/">
			<button className="p-4">Sign in</button>
		</SignInButton>
	)
}

export default function Header() {
	return (
		<header className="flex justify-between border-b-2 border-black bg-white font-bold">
			<div className="flex">
				<div className="flex justify-center  text-center">
					<Link className="block flex-1 p-4" href="/add-parcel">
						Add parcel
					</Link>
				</div>
				<div className="flex justify-center text-center">
					<Link className="block flex-1 p-4" href="/my-parcels">
						My parcels
					</Link>
				</div>
			</div>
			<AuthButton />
		</header>
	)
}
