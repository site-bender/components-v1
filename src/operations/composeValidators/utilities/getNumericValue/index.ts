import type { Validation } from "../../../../types/constraints"
import type { NumberValue } from "../../../../types/values"

export default async function getNumericValue(
	v: Validation | NumberValue | number,
): Promise<number> {
	const value = await v

	if (typeof value === "number") {
		return value
	}

	if (typeof value === "object" && "value" in value) {
		const val = value.value

		if (val == null) {
			return NaN
		}

		if (typeof val === "number") {
			return val
		}

		if (typeof val === "string") {
			return parseInt(val, 10)
		}

		if (typeof val === "object" && "numerator" in val && "denominator" in val) {
			return (val.numerator as number) / (val.denominator as number)
		}
	}

	return NaN
}
