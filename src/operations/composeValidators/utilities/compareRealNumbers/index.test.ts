import compareRealNumbers, { REAL_NUMBER_PRECISION } from "."

import type { RealNumberValue } from "../../../../types/values"

const pOne: RealNumberValue = {
	datatype: "real",
	value: 1 + 1 / REAL_NUMBER_PRECISION,
}

const pTwo: RealNumberValue = {
	datatype: "real",
	value: 1 + 2 / REAL_NUMBER_PRECISION,
}

const bad = {
	datatype: "real",
	value: true,
}

test("[compareRealNumbers] returns -1 if left is greater than right", () => {
	expect(compareRealNumbers(pOne, pTwo)).toBe(-1)
})

test("[compareRealNumbers] returns 0 if left is equal to right", () => {
	expect(compareRealNumbers(pOne, pOne)).toBe(0)
})

test("[compareRealNumbers] returns -1 if left is less than right", () => {
	expect(compareRealNumbers(pTwo, pOne)).toBe(1)
})

test(`[compareRealNumbers] has a fixed precision of ${
	1 / REAL_NUMBER_PRECISION
}`, () => {
	const tooSmallOne: RealNumberValue = {
		datatype: "real",
		value: 1 + 1 / REAL_NUMBER_PRECISION / 10,
	}

	const tooSmallTwo: RealNumberValue = {
		datatype: "real",
		value: 1 + 2 / REAL_NUMBER_PRECISION / 10,
	}

	expect(compareRealNumbers(tooSmallTwo, tooSmallOne)).toBe(0)
})

test("[compareRealNumbers] throws an error if left argument is not a real number", () => {
	// @ts-expect-error override for testing purposes
	expect(() => compareRealNumbers(bad, pOne)).toThrow(
		"true is not a real number",
	)
})

test("[compareRealNumbers] throws an error if right argument is not a real number", () => {
	// @ts-expect-error override for testing purposes
	expect(() => compareRealNumbers(pTwo, bad)).toThrow(
		"true is not a real number",
	)
})
