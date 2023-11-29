import { expect, test } from "vitest"

import not from "./"

test("[not] returns boolean negating truthiness", () => {
	// truthy
	expect(not(true)).toBe(false)
	expect(not("hello")).toBe(false)
	expect(not(1)).toBe(false)
	expect(not(0.0001)).toBe(false)
	expect(not([])).toBe(false)
	expect(not({})).toBe(false)

	// falsy
	expect(not(false)).toBe(true)
	expect(not("")).toBe(true)
	expect(not(0)).toBe(true)
	expect(not(undefined)).toBe(true)
	expect(not(null)).toBe(true)
})
