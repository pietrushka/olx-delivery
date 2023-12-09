export default async function batchMap<T, U>(
	processItem: (item: T) => Promise<U>,
	items: T[],
	batchSize: number = 1
): Promise<U[]> {
	const result: U[] = []

	for (let i = 0; i < items.length; i += batchSize) {
		const batch = items.slice(i, i + batchSize)

		for (const item of batch) {
			const itemResult = await processItem(item)
			result.push(itemResult)
		}
	}

	return result
}
