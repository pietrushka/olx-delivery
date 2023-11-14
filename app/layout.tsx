import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"
import "./globals.css"
import Header from "@/components/Header"

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className="bg-white">
					<Header />
					<main className="pt-28">{children}</main>
				</body>
			</html>
		</ClerkProvider>
	)
}
