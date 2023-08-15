import type {
	SetTypeConstraint,
	Validation,
} from "../../../../../types/constraints"

import type { SetValue } from "../../../../../types/values"
import type { TypeOfConstraint } from "../../../../types/enums"
import makeIsSet from "."

const constraint: SetTypeConstraint = {
	constraintType: TypeOfConstraint.IS_SET,
}

test("[makeIsSet] returns correct validation when value is a set", () => {
	const stringValidation: Validation = {
		datatype: "set",
		value: "red,green,blue",
	}

	expect(makeIsSet(constraint)(stringValidation)).toEqual(stringValidation)

	const arrayValidation: Validation = {
		datatype: "set",
		value: [1, 4, 9, 16, 25],
	}

	expect(makeIsSet(constraint)(arrayValidation)).toEqual(arrayValidation)

	const setValidation: Validation = {
		datatype: "set",
		value: new Set([3.3, 4.4, 5.5]),
	}

	expect(makeIsSet(constraint)(setValidation)).toEqual(setValidation)
})

test("[makeIsSet] returns error when value is not a set", () => {
	const validation: Validation & SetValue = {
		datatype: "set",
		// @ts-expect-error override for testing purposes
		value: 666,
	}

	expect(makeIsSet(constraint)(validation)).toEqual({
		...validation,
		isInvalid: true,
		errors: [
			{
				error: TypeOfConstraint.IS_SET,
				constraint,
				errorMessage: "Cannot use 'in' operator to search for 'size' in 666",
			},
		],
	})

	const unsetValidation: Validation = {
		datatype: "set",
		value: "red,green,blue,red,green",
	}

	expect(makeIsSet(constraint)(unsetValidation)).toEqual({
		...unsetValidation,
		isInvalid: true,
		errors: [
			{
				error: TypeOfConstraint.IS_SET,
				constraint,
			},
		],
	})
})
