import type {
	SubsetConstraint,
	Validation,
} from "../../../../types/constraints"

import subset from "."
import type { TypeOfConstraint } from "../../../../types/enums"

const constraint: SubsetConstraint = {
	constraintType: TypeOfConstraint.SUBSET,
	operand: "red,yellow,green,cyan,blue,magenta",
}

test("[subset] returns correct validation if value set is a subset of the constraint set", () => {
	const validation: Validation = {
		datatype: "set",
		value: "cyan,red,yellow,blue",
	}

	expect(subset(constraint)(validation)).toEqual(validation)
})

test("[subset] returns correct validation with arrays", () => {
	const validation: Validation = {
		datatype: "set",
		value: ["red", "yellow", "blue"],
	}

	expect(
		subset({
			...constraint,
			operand: ["cyan", "red", "yellow", "blue"],
		})(validation),
	).toEqual(validation)
})

test("[subset] returns correct validation with sets", () => {
	const validation: Validation = {
		datatype: "set",
		value: new Set(["cyan", "magenta", "blue"]),
	}

	expect(
		subset({
			...constraint,
			operand: new Set(["cyan", "magenta", "yellow", "blue"]),
		})(validation),
	).toEqual(validation)
})

test("[subset] returns correct validation if value set has no members (is empty)", () => {
	const validation: Validation = {
		datatype: "set",
		value: [],
	}

	expect(subset(constraint)(validation)).toEqual(validation)
})

test("[subset] returns error if value set has members not in constraint set", () => {
	const validation: Validation = {
		datatype: "set",
		value: "cyan,magenta,yellow,black",
	}

	expect(subset(constraint)(validation)).toEqual({
		...validation,
		errors: [
			{
				constraint,
				error: TypeOfConstraint.SUBSET,
			},
		],
		isInvalid: true,
	})
})

test("[subset] returns error if value set is identical to constraint set", () => {
	const validation: Validation = {
		datatype: "set",
		value: "cyan,blue,magenta,red,yellow,green",
	}

	expect(subset(constraint)(validation)).toEqual({
		...validation,
		errors: [
			{
				constraint,
				error: TypeOfConstraint.SUBSET,
			},
		],
		isInvalid: true,
	})
})
