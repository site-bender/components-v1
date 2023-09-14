import {
	OnOrAfterDateConstraint,
	Validation,
} from "../../../../../types/constraints"

import onOrAfterDate from "."
import type { TypeOfConstraint } from "../../../../types/enums"

const constraint: OnOrAfterDateConstraint = {
	constraintType: TypeOfConstraint.ON_OR_AFTER_DATE,
	operand: "2001-01-01",
}

test("[onOrAfterDate] returns correct validation if date after constraint value", () => {
	const validation: Validation = {
		datatype: "plainDate",
		value: "2001-09-11",
	}

	expect(onOrAfterDate(constraint)(validation)).toEqual(validation)
})

test("[onOrAfterDate] returns correct validation if date equals constraint value", () => {
	const validation: Validation = {
		datatype: "plainDate",
		value: "2001-01-01",
	}

	expect(onOrAfterDate(constraint)(validation)).toEqual(validation)
})

test("[onOrAfterDate] returns error if date before constraint value", () => {
	const validation: Validation = {
		datatype: "plainDate",
		value: "1999-01-01",
	}

	expect(onOrAfterDate(constraint)(validation)).toEqual({
		...validation,
		errors: [
			{
				constraint,
				error: TypeOfConstraint.ON_OR_AFTER_DATE,
			},
		],
		isInvalid: true,
	})
})

test("[onOrAfterDate] returns error if bad date", () => {
	const validation: Validation = {
		datatype: "plainDate",
		value: "2001-09-31",
	}

	expect(onOrAfterDate(constraint)(validation)).toEqual({
		...validation,
		errors: [
			{
				constraint,
				error: TypeOfConstraint.ON_OR_AFTER_DATE,
				errorMessage: "RangeError: value out of range: 1 <= 31 <= 30",
			},
		],
		isInvalid: true,
	})
})
