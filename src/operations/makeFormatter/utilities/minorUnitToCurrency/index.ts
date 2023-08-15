export default function minorUnitToCurrency(
	amount: number | string,
	subdivision = 100,
): [number, number] {
	const amt = Number(amount)

	return [Math.floor(amt / subdivision), amt % subdivision]
}
