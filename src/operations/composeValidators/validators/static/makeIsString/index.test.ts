import type {
	StringTypeConstraint,
	Validation,
} from "../../../../../types/constraints"

import type { StringValue } from "../../../../../types/values"
import type { TypeOfConstraint } from "../../../../types/enums"
import makeIsString from "."

const constraint: StringTypeConstraint = {
	constraintType: TypeOfConstraint.IS_STRING,
}

test("[makeIsString] returns correct validation when value is a string", () => {
	const validation: Validation = {
		datatype: "string",
		value: "",
	}

	expect(makeIsString(constraint)(validation)).toEqual(validation)
})

test("[makeIsString] returns error when value is not a string", () => {
	const validation: Validation & StringValue = {
		datatype: "string",
		// @ts-expect-error override for testing purposes
		value: 86,
	}

	expect(makeIsString(constraint)(validation)).toEqual({
		...validation,
		isInvalid: true,
		errors: [
			{
				error: TypeOfConstraint.IS_STRING,
				constraint,
			},
		],
	})
})
