import minorUnitToCurrency from "../../utilities/minorUnitToCurrency"

export default function makeAsCurrency({
	subdivision = 100,
	code = "NZD",
	isMajorUnit = false,
	numberFormat = "en-NZ",
}: MakeAsCurrencyParameters) {
	return (value: number | string) => {
		const amount = isMajorUnit
			? value
			: minorUnitToCurrency(value, subdivision).join(".")

		return new Intl.NumberFormat(numberFormat, {
			style: "currency",
			currency: code,
		}).format(Number(amount))
	}
}
