import stringToMap from "."

test("[stringToMap] creates map from valid string", () => {
	expect(stringToMap("red:f00,green:0f0,blue:00f")).toEqual(
		new Map([
			["red", "f00"],
			["green", "0f0"],
			["blue", "00f"],
		]),
	)
})

test("[stringToMap] creates map from valid string with specified separators", () => {
	expect(stringToMap("red=f00&green=0f0&blue=00f", "&", "=")).toEqual(
		new Map([
			["red", "f00"],
			["green", "0f0"],
			["blue", "00f"],
		]),
	)
})

test("[stringToMap] handles missing values", () => {
	expect(stringToMap("red:f00,green:0f0,cyan,blue:00f")).toEqual(
		new Map([
			["red", "f00"],
			["green", "0f0"],
			["cyan", undefined],
			["blue", "00f"],
		]),
	)
})

test("[stringToMap] handles duplicate keys (last wins)", () => {
	expect(stringToMap("red:f30,green:0f0,red:f00,blue:00f")).toEqual(
		new Map([
			["red", "f00"],
			["green", "0f0"],
			["blue", "00f"],
		]),
	)
})

test("[stringToMap] handles missing keys (not included)", () => {
	expect(stringToMap("red:f00,green:0f0,:fff,blue:00f")).toEqual(
		new Map([
			["red", "f00"],
			["green", "0f0"],
			["blue", "00f"],
		]),
	)
})
