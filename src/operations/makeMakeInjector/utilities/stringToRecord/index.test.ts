import stringToRecord from "."

test("[stringToRecord] creates record from valid string", () => {
	expect(stringToRecord("red:f00,green:0f0,blue:00f")).toEqual({
		red: "f00",
		green: "0f0",
		blue: "00f",
	})
})

test("[stringToRecord] creates record from valid string with specified separators", () => {
	expect(stringToRecord("red=f00&green=0f0&blue=00f", "&", "=")).toEqual({
		red: "f00",
		green: "0f0",
		blue: "00f",
	})
})

test("[stringToRecord] handles missing values", () => {
	expect(stringToRecord("red:f00,green:0f0,cyan,blue:00f")).toEqual({
		red: "f00",
		green: "0f0",
		cyan: undefined,
		blue: "00f",
	})
})

test("[stringToRecord] handles duplicate keys (last wins)", () => {
	expect(stringToRecord("red:f30,green:0f0,red:f00,blue:00f")).toEqual({
		red: "f00",
		green: "0f0",
		blue: "00f",
	})
})

test("[stringToRecord] handles missing keys (not included)", () => {
	expect(stringToRecord("red:f00,green:0f0,:fff,blue:00f")).toEqual({
		red: "f00",
		green: "0f0",
		blue: "00f",
	})
})
