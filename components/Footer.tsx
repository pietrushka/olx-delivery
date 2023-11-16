import Image from "next/image"

export default function Footer() {
	return (
		<footer className="flex flex-col items-center border-t-2 border-black p-4">
			<Image
				src="/pietrushkaGithubBarcode.png"
				width={500}
				height={500}
				alt="Author github link barcode"
			/>
		</footer>
	)
}
