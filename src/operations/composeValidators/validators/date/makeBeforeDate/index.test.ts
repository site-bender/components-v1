import type {
	BeforeDateConstraint,
	Validation,
} from "../../../../types/constraints"

import beforeDate from "."
import type { TypeOfConstraint } from "../../../../types/enums"

const constraint: BeforeDateConstraint = {
	constraintType: TypeOfConstraint.BEFORE_DATE,
	operand: "2001-01-01",
}

test("[beforeDate] returns correct validation if date before constraint value", () => {
	const validation: Validation = {
		datatype: "plainDate",
		value: "1999-01-01",
	}

	expect(beforeDate(constraint)(validation)).toEqual(validation)
})

test("[beforeDate] returns error if date after constraint value", () => {
	const validation: Validation = {
		datatype: "plainDate",
		value: "2001-09-11",
	}

	expect(beforeDate(constraint)(validation)).toEqual({
		...validation,
		errors: [
			{
				constraint,
				error: TypeOfConstraint.BEFORE_DATE,
			},
		],
		isInvalid: true,
	})
})

test("[beforeDate] returns error if bad date", () => {
	const validation: Validation = {
		datatype: "plainDate",
		value: "2001-09-31",
	}

	expect(beforeDate(constraint)(validation)).toEqual({
		...validation,
		errors: [
			{
				constraint,
				error: TypeOfConstraint.BEFORE_DATE,
				errorMessage: "RangeError: value out of range: 1 <= 31 <= 30",
			},
		],
		isInvalid: true,
	})
})
