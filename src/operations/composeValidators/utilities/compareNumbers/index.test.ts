import compareIntegers from "."

test("[compareIntegers] returns -1 if left is greater than right", () => {
	expect(compareIntegers(1, 2)).toBe(-1)
})

test("[compareIntegers] returns 0 if left is equal to right", () => {
	expect(compareIntegers(2, 2)).toBe(0)
})

test("[compareIntegers] returns -1 if left is less than right", () => {
	expect(compareIntegers(2, 1)).toBe(1)
})

test("[compareIntegers] throws an error if left argument is not an integer", () => {
	// @ts-expect-error override for testing purposes
	expect(() => compareIntegers(true, 1)).toThrow("true is not an integer")
})

test("[compareIntegers] throws an error if right argument is not an integer", () => {
	// @ts-expect-error override for testing purposes
	expect(() => compareIntegers(1, false)).toThrow("false is not an integer")
})
