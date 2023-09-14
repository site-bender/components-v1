import type {
	MapTypeConstraint,
	Validation,
} from "../../../../../types/constraints"

import makeIsMap from "."
import type { MapValue } from "../../../../../types/values"
import type { TypeOfConstraint } from "../../../../types/enums"

const constraint: MapTypeConstraint = {
	constraintType: TypeOfConstraint.IS_MAP,
}

test("[makeIsMap] returns correct validation when value is a map", () => {
	const stringValidation: Validation = {
		datatype: "map",
		value: "red:f00,green:0f0,blue:00f",
	}

	expect(makeIsMap(constraint)(stringValidation)).toEqual(stringValidation)

	const objectValidation: Validation = {
		datatype: "map",
		value: {
			red: "f00",
			green: "0f0",
			blue: "00f",
		},
	}

	expect(makeIsMap(constraint)(objectValidation)).toEqual(objectValidation)

	const mapValidation: Validation = {
		datatype: "map",
		value: new Map([
			["red", "f00"],
			["green", "0f0"],
			["blue", "00f"],
		]),
	}

	expect(makeIsMap(constraint)(mapValidation)).toEqual(mapValidation)
})

test("[makeIsMap] returns error when value is not a map", () => {
	const validation: Validation & MapValue = {
		datatype: "map",
		// @ts-expect-error override for testing purposes
		value: 666,
	}

	expect(makeIsMap(constraint)(validation)).toEqual({
		...validation,
		isInvalid: true,
		errors: [
			{
				error: TypeOfConstraint.IS_MAP,
				constraint,
				errorMessage:
					"TypeError: Cannot use 'in' operator to search for 'entries' in 666",
			},
		],
	})
})
