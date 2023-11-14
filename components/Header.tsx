"use client"

import { UserButton, useAuth, SignInButton } from "@clerk/nextjs"
import Link from "next/link"

function AuthButton() {
	const { isSignedIn } = useAuth()

	if (isSignedIn) {
		return (
			<div className=" flex w-1/12 items-center justify-center ">
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
		<header className="-lg fixed w-full border-b-2 border-black font-bold">
			<div className="mx-auto flex w-10/12 justify-between ">
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
			</div>
		</header>
	)
}
