import type {
	SupersetConstraint,
	Validation,
} from "../../../../types/constraints"

import type { TypeOfConstraint } from "../../../../types/enums"
import superset from "."

const constraint: SupersetConstraint = {
	constraintType: TypeOfConstraint.SUPERSET,
	operand: "cyan,red,yellow,blue",
}

test("[superset] returns correct validation if value set is a superset of the constraint set", () => {
	const validation: Validation = {
		datatype: "set",
		value: "red,yellow,green,cyan,blue,magenta",
	}

	expect(superset(constraint)(validation)).toEqual(validation)
})

test("[superset] returns correct validation with arrays", () => {
	const validation: Validation = {
		datatype: "set",
		value: ["cyan", "red", "yellow", "blue"],
	}

	expect(
		superset({
			...constraint,
			operand: ["red", "yellow", "blue"],
		})(validation),
	).toEqual(validation)
})

test("[superset] returns correct validation with sets", () => {
	const validation: Validation = {
		datatype: "set",
		value: new Set(["cyan", "magenta", "yellow", "blue"]),
	}

	expect(
		superset({
			...constraint,
			operand: new Set(["cyan", "magenta", "blue"]),
		})(validation),
	).toEqual(validation)
})

test("[superset] returns correct validation if constraint set has no members (is empty)", () => {
	const validation: Validation = {
		datatype: "set",
		value: "cyan,red,yellow,blue",
	}

	expect(
		superset({
			...constraint,
			operand: [],
		})(validation),
	).toEqual(validation)
})

test("[superset] returns error if constraint set has members not in value set", () => {
	const validation: Validation = {
		datatype: "set",
		value: "cyan,red,yellow,black",
	}

	expect(superset(constraint)(validation)).toEqual({
		...validation,
		errors: [
			{
				constraint,
				error: TypeOfConstraint.SUPERSET,
			},
		],
		isInvalid: true,
	})
})

test("[superset] returns error if value set is identical to constraint set", () => {
	const validation: Validation = {
		datatype: "set",
		value: "cyan,red,yellow,blue",
	}

	expect(superset(constraint)(validation)).toEqual({
		...validation,
		errors: [
			{
				constraint,
				error: TypeOfConstraint.SUPERSET,
			},
		],
		isInvalid: true,
	})
})
