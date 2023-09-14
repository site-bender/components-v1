import type { OrConstraint, Validation } from "../../../../types/constraints"

import or from "."
import type { TypeOfConstraint } from "../../../../types/enums"

const constraint: OrConstraint = {
	constraintType: "or",
	tests: [
		{
			constraintType: TypeOfConstraint.MEMBER,
			operand: ["red", "green", "blue"],
		},
		{
			constraintType: TypeOfConstraint.MEMBER,
			operand: ["cyan", "magenta", "yellow", "blue"],
		},
	],
}

const validate = or(constraint)

test("[or] passes when both or either constraint check passes", () => {
	const validation: Validation = {
		datatype: "member",
		value: "blue",
	}

	expect(validate(validation)).toEqual(validation)

	const validation2: Validation = {
		datatype: "member",
		value: "red",
	}

	expect(validate(validation2)).toEqual(validation2)

	const validation3: Validation = {
		datatype: "member",
		value: "yellow",
	}

	expect(validate(validation3)).toEqual(validation3)
})

test("[or] fails when both constraint checks fail", () => {
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
					constraintType: "or",
					tests: [
						{
							constraintType: TypeOfConstraint.MEMBER,
							datatype: "set",
							value: ["red", "green", "blue"],
						},
						{
							constraintType: TypeOfConstraint.MEMBER,
							datatype: "set",
							value: ["cyan", "magenta", "yellow", "blue"],
						},
					],
				},
				error: "or",
				errors: [
					{
						error: TypeOfConstraint.MEMBER,
						constraint: {
							constraintType: TypeOfConstraint.MEMBER,
							datatype: "set",
							value: ["red", "green", "blue"],
						},
					},
					{
						error: TypeOfConstraint.MEMBER,
						constraint: {
							constraintType: TypeOfConstraint.MEMBER,
							datatype: "set",
							value: ["cyan", "magenta", "yellow", "blue"],
						},
					},
				],
			},
		],
	})
})
