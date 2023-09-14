import type {
	ConfirmationConstraint,
	Validation,
} from "../../../../../types/constraints"

import confirmed from "."
import type { TypeOfConstraint } from "../../../../types/enums"

const constraint: ConfirmationConstraint = {
	constraintType: TypeOfConstraint.CONFIRMED,
}

test("[confirmed] returns correct validation when the value is true", () => {
	const validation: Validation = {
		datatype: "boolean",
		value: true,
	}
	expect(confirmed(constraint)(validation)).toEqual(validation)
})

test("[confirmed] returns error when the value is not true", () => {
	const validation: Validation = {
		datatype: "boolean",
		value: false,
	}
	expect(confirmed(constraint)(validation)).toEqual({
		...validation,
		isInvalid: true,
		errors: [
			{
				error: TypeOfConstraint.CONFIRMED,
				constraint,
			},
		],
	})
})
