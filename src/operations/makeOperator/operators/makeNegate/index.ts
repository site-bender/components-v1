import type {
	Injector,
	NegateOperation,
	Operation,
} from "../../types/operations"

import type { NumberValue } from "../../types/values"
import makeOperator from "../"
import doNegation from "./doNegation"

export default function makeNegate(operation: NegateOperation): Injector {
	const { operand } = operation as NegateOperation

	const injector = (
		typeof operand === "object" && "operatorType" in operand
			? makeOperator(operand as Operation)
			: () => operand
	) as Injector

	return function negate() {
		return doNegation(injector() as NumberValue | number)
	}
}
