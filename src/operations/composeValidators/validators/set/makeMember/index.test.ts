import type {
	MemberConstraint,
	Validation,
} from "../../../../types/constraints"

import type { TypeOfConstraint } from "../../../../types/enums"
import member from "."

const constraint: MemberConstraint = {
	constraintType: TypeOfConstraint.MEMBER,
	operand: ["red", "green", "blue"],
}

test("[member] returns correct validation when value is a member of constraint set", () => {
	const validation: Validation = {
		datatype: "member",
		value: "green",
	}

	expect(member(constraint)(validation)).toEqual(validation)
})

test("[member] works when constraint set is a string", () => {
	const validation: Validation = {
		datatype: "member",
		value: "green",
	}

	expect(
		member({
			...constraint,
			operand: "red,green,blue",
		})(validation),
	).toEqual(validation)
})

test("[member] works when constraint set is a Set", () => {
	const validation: Validation = {
		datatype: "member",
		value: "green",
	}

	expect(
		member({
			...constraint,
			operand: new Set(["red", "green", "blue"]),
		})(validation),
	).toEqual(validation)
})

test("[disjointSet] returns error if value is not a member of the constraint set", () => {
	const validation: Validation = {
		datatype: "member",
		value: "orange",
	}

	expect(member(constraint)(validation)).toEqual({
		...validation,
		errors: [
			{
				constraint,
				error: TypeOfConstraint.MEMBER,
			},
		],
		isInvalid: true,
	})
})
