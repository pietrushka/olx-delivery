import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body>
					<div className="m-auto flex min-h-screen w-10/12 flex-col border-2 border-black bg-white">
						<Header />
						<main className="mx-auto h-full flex-1 py-14">{children}</main>
						<Footer />
					</div>
				</body>
			</html>
		</ClerkProvider>
	)
}
