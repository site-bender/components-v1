import { expect, test } from "vitest"
import compact from "./"

test("[compact] removes null or undefined items from array", function() {
	expect(compact([
		null,
		0,
		1,
		2,
		undefined,
		3,
		4,
		null,
		5,
		undefined,
		"",
		false,
		null,
	])).toMatchObject([0, 1, 2, 3, 4, 5, "", false])
})

test("[compact] returns empty array for empty array", function() {
	expect(compact([])).toMatchObject([])
})
