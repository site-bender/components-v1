import type { FractionValue } from "../../../../types/values"
import compareFractions from "."

const half: FractionValue = {
	datatype: "fraction",
	value: {
		denominator: 2,
		numerator: 1,
	},
}

const fiveQuarters: FractionValue = {
	datatype: "fraction",
	value: {
		denominator: 4,
		numerator: 5,
	},
}

test("[compareFractions] returns -1 if left is less than right", () => {
	expect(compareFractions(half, fiveQuarters)).toBe(-1)
})

test("[compareFractions] returns 0 if left is equal to right", () => {
	expect(compareFractions(half, half)).toBe(0)
})

test("[compareFractions] returns 1 if left is greater than right", () => {
	expect(compareFractions(fiveQuarters, half)).toBe(1)
})

test("[compareFractions] throws an error if numerator missing", () => {
	const bad = { datatype: "fraction", value: { denominator: 4 } }

	// @ts-expect-error override for testing purposes
	expect(() => compareFractions(half, bad)).toThrow(
		`${JSON.stringify(bad.value)} is not a fraction`,
	)
})

test("[compareFractions] throws an error if denominator missing", () => {
	const bad = { datatype: "fraction", value: { numerator: 4 } }

	// @ts-expect-error override for testing purposes
	expect(() => compareFractions(bad, fiveQuarters)).toThrow(
		`${JSON.stringify(bad.value)} is not a fraction`,
	)
})

test("[compareFractions] throws an error if argument is not a fraction", () => {
	// @ts-expect-error override for testing purposes
	expect(() => compareFractions(half, {})).toThrow(
		"undefined is not a fraction",
	)
})
