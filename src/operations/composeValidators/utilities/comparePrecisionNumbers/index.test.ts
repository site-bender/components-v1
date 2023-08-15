import type { PrecisionNumberValue } from "../../../../types/values"
import compareIntegers from "."

const pOne: PrecisionNumberValue = {
	datatype: "precision",
	value: 1.001,
	decimalPlaces: 3,
}

const pTwo: PrecisionNumberValue = {
	datatype: "precision",
	value: 1.002,
	decimalPlaces: 3,
}

const noPrecision = {
	datatype: "precision",
	value: 1.0005,
	decimalPlaces: undefined,
}

const badValue = {
	datatype: "precision",
	value: false,
	decimalPlaces: 2,
}

test("[compareIntegers] returns -1 if left is greater than right", () => {
	expect(compareIntegers(pOne, pTwo)).toBe(-1)
})

test("[compareIntegers] returns 0 if left is equal to right", () => {
	expect(compareIntegers(pOne, pOne)).toBe(0)
})

test("[compareIntegers] returns -1 if left is less than right", () => {
	expect(compareIntegers(pTwo, pOne)).toBe(1)
})

test("[compareIntegers] throws an error if left argument is not a precision number", () => {
	// @ts-expect-error override for testing purposes
	expect(() => compareIntegers(badValue, pTwo)).toThrow(
		"false is not a precision number",
	)
})

test("[compareIntegers] throws an error if right argument is not a precision number", () => {
	// @ts-expect-error override for testing purposes
	expect(() => compareIntegers(pOne, badValue)).toThrow(
		"false is not a precision number",
	)
})

test("[compareIntegers] throws an error if precision not specified", () => {
	// @ts-expect-error override for testing purposes
	expect(() => compareIntegers(pOne, noPrecision)).toThrow(
		"1.0005 is not a precision number",
	)

	// @ts-expect-error override for testing purposes
	expect(() => compareIntegers(noPrecision, pTwo)).toThrow(
		"1.0005 is not a precision number",
	)
})
