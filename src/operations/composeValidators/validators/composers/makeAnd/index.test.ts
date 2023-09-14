import type { AndConstraint, Validation } from "../../../../types/constraints"

import and from "."
import type { TypeOfConstraint } from "../../../../types/enums"

const constraint: AndConstraint = {
	constraintType: "and",
	tests: [
		{
			constraintType: TypeOfConstraint.AT_LEAST_N,
			operand: 25,
		},
		{
			constraintType: TypeOfConstraint.AT_MOST_N,
			operand: 75,
		},
	],
}

const validate = and(constraint)

test("[and] passes when all constraint checks pass", () => {
	const validation: Validation = {
		numberType: "integer",
		datatype: "integer",
		value: 50,
	}

	expect(validate(validation)).toEqual(validation)
})

test("[and] fails when any constraint checks fails", () => {
	const validation: Validation = {
		numberType: "integer",
		datatype: "integer",
		value: 0,
	}

	expect(validate(validation)).toEqual({
		...validation,
		isInvalid: true,
		errors: [
			{
				constraint: {
					constraintType: "and",
					tests: [
						{
							constraintType: TypeOfConstraint.AT_LEAST_N,
							datatype: "integer",
							operand: 25,
						},
						{
							constraintType: TypeOfConstraint.AT_MOST_N,
							datatype: "integer",
							operand: 75,
						},
					],
				},
				error: "and",
				errors: [
					{
						error: TypeOfConstraint.AT_LEAST_N,
						constraint: {
							constraintType: TypeOfConstraint.AT_LEAST_N,
							datatype: "integer",
							operand: 25,
						},
					},
				],
			},
		],
	})

	const validation2: Validation = {
		numberType: "integer",
		datatype: "integer",
		value: 100,
	}

	expect(validate(validation2)).toEqual({
		...validation2,
		isInvalid: true,
		errors: [
			{
				constraint: {
					constraintType: "and",
					tests: [
						{
							constraintType: TypeOfConstraint.AT_LEAST_N,
							datatype: "integer",
							operand: 25,
						},
						{
							constraintType: TypeOfConstraint.AT_MOST_N,
							datatype: "integer",
							operand: 75,
						},
					],
				},
				error: "and",
				errors: [
					{
						error: TypeOfConstraint.AT_MOST_N,
						constraint: {
							constraintType: TypeOfConstraint.AT_MOST_N,
							datatype: "integer",
							operand: 75,
						},
					},
				],
			},
		],
	})
})

test("[and] fails when both constraint checks fail", () => {
	const validate = and({
		constraintType: "and",
		tests: [
			{
				constraintType: TypeOfConstraint.AT_LEAST_N,
				operand: 75,
			},
			{
				constraintType: TypeOfConstraint.AT_MOST_N,
				operand: 25,
			},
		],
	})

	const validation: Validation = {
		numberType: "integer",
		datatype: "integer",
		value: 50,
	}

	expect(validate(validation)).toEqual({
		...validation,
		isInvalid: true,
		errors: [
			{
				constraint: {
					constraintType: "and",
					tests: [
						{
							constraintType: TypeOfConstraint.AT_LEAST_N,
							datatype: "integer",
							operand: 75,
						},
						{
							constraintType: TypeOfConstraint.AT_MOST_N,
							datatype: "integer",
							operand: 25,
						},
					],
				},
				error: "and",
				errors: [
					{
						error: TypeOfConstraint.AT_LEAST_N,
						constraint: {
							constraintType: TypeOfConstraint.AT_LEAST_N,
							datatype: "integer",
							operand: 75,
						},
					},
					{
						error: TypeOfConstraint.AT_MOST_N,
						constraint: {
							constraintType: TypeOfConstraint.AT_MOST_N,
							datatype: "integer",
							operand: 25,
						},
					},
				],
			},
		],
	})
})
