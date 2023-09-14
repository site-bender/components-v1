import type { TypeOfTruncation } from "../../../types/enums"

export default function truncate(
	value: string | number,
	truncationType?: TypeOfTruncation,
	decimalPlaces?: number,
): string | number {
	switch (truncationType) {
		case TypeOfTruncation.CHARACTERS:
			return typeof decimalPlaces === "number"
				? (value as string).replace(/\n/g, " ").slice(0, decimalPlaces)
				: value
		case TypeOfTruncation.LINES:
			return typeof decimalPlaces === "number"
				? (value as string)
						.split(/\n/)
						.slice(0, decimalPlaces)
						.join(`
`)
				: value
		case TypeOfTruncation.WORDS:
			return typeof decimalPlaces === "number"
				? (value as string).split(/[ \n]/).slice(0, decimalPlaces).join(" ")
				: value
		case TypeOfTruncation.ROUND:
			return (
				Math.round((value as number) * 10 ** (decimalPlaces || 0)) /
				10 ** (decimalPlaces || 0)
			)
		case TypeOfTruncation.ROUND_DOWN:
			return (
				Math.floor((value as number) * 10 ** (decimalPlaces || 0)) /
				10 ** (decimalPlaces || 0)
			)
		case TypeOfTruncation.ROUND_UP:
			return (
				Math.ceil((value as number) * 10 ** (decimalPlaces || 0)) /
				10 ** (decimalPlaces || 0)
			)
		case TypeOfTruncation.TRUNCATE:
			return Math.trunc(value as number)
		default:
			return value
	}
}
