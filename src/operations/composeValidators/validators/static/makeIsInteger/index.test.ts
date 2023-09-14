import {
	IntegerTypeConstraint,
	Validation,
} from "../../../../../types/constraints"

import makeIsInteger from "."
import type { TypeOfConstraint } from "../../../../types/enums"

const constraint: IntegerTypeConstraint = {
	constraintType: TypeOfConstraint.IS_INTEGER,
}

test("[makeIsInteger] returns correct validation when value is an integer", () => {
	const validation: Validation = {
		datatype: "integer",
		value: 3,
	}

	expect(makeIsInteger(constraint)(validation)).toEqual(validation)
})

test("[makeIsInteger] returns error when value is not an integer", () => {
	const validation: Validation = {
		datatype: "integer",
		value: 3.1415,
	}

	expect(makeIsInteger(constraint)(validation)).toEqual({
		...validation,
		isInvalid: true,
		errors: [
			{
				error: TypeOfConstraint.IS_INTEGER,
				constraint,
			},
		],
	})
})
