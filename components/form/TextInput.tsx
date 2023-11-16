export default function TextInput({ id, label }: { id: string; label: string }) {
	return (
		<div className="w-full p-2">
			<label className="block" htmlFor={id}>
				{label}:
			</label>
			<input
				type="text"
				id={id}
				name={id}
				required
				className=" block w-full focus:outline-none"
			/>
		</div>
	)
}
