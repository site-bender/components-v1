import isDisjoint from "."

const s1 = new Set(["red", "green", "blue"])

const s2 = new Set(["cyan", "magenta", "yellow", "black"])

const s3 = new Set(["cyan", "magenta", "yellow", "blue"])

test("[isDisjoint] returns true if both sets passed have no members in common", () => {
	expect(isDisjoint(s1, s2)).toBe(true)
})

test("[isDisjoint] works regardless of argument order", () => {
	expect(isDisjoint(s2, s1)).toBe(true)
})

test("[isDisjoint] returns false if both sets have one or more shared members", () => {
	expect(isDisjoint(s1, s3)).toBe(false)
})

test("[isDisjoint] works with empty set", () => {
	expect(isDisjoint(s2, new Set())).toBe(true)
})

test("[isDisjoint] works with empty set flipped", () => {
	expect(isDisjoint(new Set(), s1)).toBe(true)
})

test("[isDisjoint] returns false if both sets have one or more shared members (flipped)", () => {
	expect(isDisjoint(s3, s1)).toBe(false)
})
