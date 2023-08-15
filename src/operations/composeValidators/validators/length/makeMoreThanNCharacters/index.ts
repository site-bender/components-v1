import type {
	MoreThanNCharactersConstraint,
	Validation,
} from "../../../../../types/constraints"

import type { Operation } from "../../../../../types/operations"
import type { IntegerValue } from "../../../../../types/values"
import makeOperator from "../../../../makeOperator"
import makeError from "../../../utilities/makeError"

export default function makeMoreThanNCharacters(
	constraint: MoreThanNCharactersConstraint,
): (validation: Validation) => Validation {
	const { match, operand } = constraint
	const matcher = typeof match === "string" ? new RegExp(match) : match
	const injector = typeof operand === "object" && "operatorType" in operand
		? makeOperator(operand as Operation)
		: () => operand

	return function moreThanNCharacters(validation: Validation): Validation {
		const injected = injector() as IntegerValue | number
		const testValue: number =
			typeof injected === "object" && "value" in injected
				? injected.value
				: injected

		const value: string | Array<string> = (matcher
			? (validation.value as string).match(matcher)
			: (validation.value as string)) || ""

		return value.length > testValue
			? validation
			: makeError(validation, constraint)
	}
}
