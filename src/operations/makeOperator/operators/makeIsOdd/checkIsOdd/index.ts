import type { BooleanValue, IntegerValue } from "../../../../../types/values"

export default function checkIsOdd(value: IntegerValue | number): BooleanValue {
	const num = typeof value === "number" ? value : (value as IntegerValue).value

	return {
		datatype: "boolean",
		value: Number.isInteger(num) && Math.abs(num % 2) === 1,
	}
}
