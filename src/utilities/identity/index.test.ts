import identity from "."

test("[identity] returns what it is passed", () => {
	expect(identity(1)).toBe(1)
	expect(identity(-1)).toBe(-1)
	expect(identity(true)).toBe(true)
	expect(identity(false)).toBe(false)
	expect(identity([])).toEqual([])
	expect(identity({})).toEqual({})
})
