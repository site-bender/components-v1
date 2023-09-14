import type {
	AfterDateConstraint,
	Validation,
} from "../../../../types/constraints"

import afterDate from "."
import type { TypeOfConstraint } from "../../../../types/enums"

const constraint: AfterDateConstraint = {
	constraintType: TypeOfConstraint.AFTER_DATE,
	operand: "2001-01-01",
}

test("[afterDate] returns correct validation if date after constraint value", () => {
	const validation: Validation = {
		datatype: "plainDate",
		value: "2001-09-11",
	}

	expect(afterDate(constraint)(validation)).toEqual(validation)
})

test("[afterDate] returns error if date before constraint value", () => {
	const validation: Validation = {
		datatype: "plainDate",
		value: "1999-01-01",
	}

	expect(afterDate(constraint)(validation)).toEqual({
		...validation,
		errors: [
			{
				constraint,
				error: TypeOfConstraint.AFTER_DATE,
			},
		],
		isInvalid: true,
	})
})

test("[afterDate] returns error if bad date", () => {
	const validation: Validation = {
		datatype: "plainDate",
		value: "2001-09-31",
	}

	expect(afterDate(constraint)(validation)).toEqual({
		...validation,
		errors: [
			{
				constraint,
				error: TypeOfConstraint.AFTER_DATE,
				errorMessage: "RangeError: value out of range: 1 <= 31 <= 30",
			},
		],
		isInvalid: true,
	})
})
