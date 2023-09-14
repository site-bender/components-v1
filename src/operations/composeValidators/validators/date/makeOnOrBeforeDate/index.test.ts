import {
	OnOrBeforeDateConstraint,
	Validation,
} from "../../../../../types/constraints"

import onOrBeforeDate from "."
import type { TypeOfConstraint } from "../../../../types/enums"

const constraint: OnOrBeforeDateConstraint = {
	constraintType: TypeOfConstraint.ON_OR_BEFORE_DATE,
	operand: "2001-01-01",
}

test("[onOrBeforeDate] returns correct validation if date before constraint value", () => {
	const validation: Validation = {
		datatype: "plainDate",
		value: "1999-01-01",
	}

	expect(onOrBeforeDate(constraint)(validation)).toEqual(validation)
})

test("[onOrBeforeDate] returns correct validation if date equals constraint value", () => {
	const validation: Validation = {
		datatype: "plainDate",
		value: "2001-01-01",
	}

	expect(onOrBeforeDate(constraint)(validation)).toEqual(validation)
})

test("[onOrBeforeDate] returns error if date after constraint value", () => {
	const validation: Validation = {
		datatype: "plainDate",
		value: "2001-09-11",
	}

	expect(onOrBeforeDate(constraint)(validation)).toEqual({
		...validation,
		errors: [
			{
				constraint,
				error: TypeOfConstraint.ON_OR_BEFORE_DATE,
			},
		],
		isInvalid: true,
	})
})

test("[onOrBeforeDate] returns error if bad date", () => {
	const validation: Validation = {
		datatype: "plainDate",
		value: "2001-09-31",
	}

	expect(onOrBeforeDate(constraint)(validation)).toEqual({
		...validation,
		errors: [
			{
				constraint,
				error: TypeOfConstraint.ON_OR_BEFORE_DATE,
				errorMessage: "RangeError: value out of range: 1 <= 31 <= 30",
			},
		],
		isInvalid: true,
	})
})
