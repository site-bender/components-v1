import type { IntegerValue } from "../../../../types/values"
import compareIntegers from "."

const one: IntegerValue = {
	datatype: "integer",
	value: 1,
}

const two: IntegerValue = {
	datatype: "integer",
	value: 2,
}

const bad = {
	datatype: "integer",
	value: false,
}

test("[compareIntegers] returns -1 if left is less than right", () => {
	expect(compareIntegers(one, two)).toBe(-1)
})

test("[compareIntegers] returns 0 if left is equal to right", () => {
	expect(compareIntegers(one, one)).toBe(0)
})

test("[compareIntegers] returns 1 if left is greater than right", () => {
	expect(compareIntegers(two, one)).toBe(1)
})

test("[compareIntegers] throws an error if left argument is not an integer", () => {
	// @ts-expect-error override for testing purposes
	expect(() => compareIntegers(bad, one)).toThrow("false is not an integer")
})

test("[compareIntegers] throws an error if right argument is not an integer", () => {
	// @ts-expect-error override for testing purposes
	expect(() => compareIntegers(one, bad)).toThrow("false is not an integer")
})
