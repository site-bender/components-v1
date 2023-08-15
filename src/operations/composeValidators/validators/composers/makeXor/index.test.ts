import type { Validation, XorConstraint } from "../../../../types/constraints"

import type { TypeOfConstraint } from "../../../../types/enums"
import xor from "."

const constraint: XorConstraint = {
	constraintType: "xor",
	tests: [
		{
			constraintType: TypeOfConstraint.MEMBER,
			operand: ["red", "green", "blue"],
		},
		{
			constraintType: TypeOfConstraint.MEMBER,
			operand: ["cyan", "magenta", "yellow", "blue"],
		},
		{
			constraintType: TypeOfConstraint.MEMBER,
			operand: ["chartreuse", "mauve", "yellow", "blue"],
		},
	],
}

const validate = xor(constraint)

test("[xor] passes when one constraint check passes", () => {
	const validation: Validation = {
		datatype: "member",
		value: "red",
	}

	expect(validate(validation)).toEqual(validation)
})

test("[xor] fails when more than one constraint check passes", () => {
	const validation: Validation = {
		datatype: "member",
		value: "yellow",
	}

	expect(validate(validation)).toEqual({
		...validation,
		isInvalid: true,
		errors: [
			{
				constraint: {
					constraintType: TypeOfConstraint.XOR,
					tests: [
						{
							constraintType: TypeOfConstraint.MEMBER,
							operand: ["red", "green", "blue"],
						},
						{
							constraintType: TypeOfConstraint.MEMBER,
							operand: ["cyan", "magenta", "yellow", "blue"],
						},
						{
							constraintType: TypeOfConstraint.MEMBER,
							operand: ["chartreuse", "mauve", "yellow", "blue"],
						},
					],
				},
				error: TypeOfConstraint.XOR,
				errors: [
					{
						error: TypeOfConstraint.MEMBER,
						constraint: {
							constraintType: TypeOfConstraint.MEMBER,
							operand: ["red", "green", "blue"],
						},
					},
				],
			},
		],
	})
})

test("[xor] fails when all constraint checks pass", () => {
	const validation: Validation = {
		datatype: "member",
		value: "blue",
	}

	expect(validate(validation)).toEqual({
		...validation,
		isInvalid: true,
		errors: [
			{
				constraint: {
					constraintType: TypeOfConstraint.XOR,
					tests: [
						{
							constraintType: TypeOfConstraint.MEMBER,
							operand: ["red", "green", "blue"],
						},
						{
							constraintType: TypeOfConstraint.MEMBER,
							operand: ["cyan", "magenta", "yellow", "blue"],
						},
						{
							constraintType: TypeOfConstraint.MEMBER,
							operand: ["chartreuse", "mauve", "yellow", "blue"],
						},
					],
				},
				error: TypeOfConstraint.XOR,
				errors: [],
			},
		],
	})
})

test("[xor] fails when all constraint checks fail", () => {
	const validation: Validation = {
		datatype: "member",
		value: "orange",
	}

	expect(validate(validation)).toEqual({
		...validation,
		isInvalid: true,
		errors: [
			{
				constraint: {
					constraintType: TypeOfConstraint.XOR,
					tests: [
						{
							constraintType: TypeOfConstraint.MEMBER,
							operand: ["red", "green", "blue"],
						},
						{
							constraintType: TypeOfConstraint.MEMBER,
							operand: ["cyan", "magenta", "yellow", "blue"],
						},
						{
							constraintType: TypeOfConstraint.MEMBER,
							operand: ["chartreuse", "mauve", "yellow", "blue"],
						},
					],
				},
				error: TypeOfConstraint.XOR,
				errors: [
					{
						error: TypeOfConstraint.MEMBER,
						constraint: {
							constraintType: TypeOfConstraint.MEMBER,
							operand: ["red", "green", "blue"],
						},
					},
					{
						error: TypeOfConstraint.MEMBER,
						constraint: {
							constraintType: TypeOfConstraint.MEMBER,
							operand: ["cyan", "magenta", "yellow", "blue"],
						},
					},
					{
						error: TypeOfConstraint.MEMBER,
						constraint: {
							constraintType: TypeOfConstraint.MEMBER,
							operand: ["chartreuse", "mauve", "yellow", "blue"],
						},
					},
				],
			},
		],
	})
})
