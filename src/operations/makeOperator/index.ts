import type {
	Injector,
	InjectValueOperation,
	Operation,
} from "../../types/operations"

import { TypeOfOperator } from "../../types/enums"
import type { Value } from "../../types/values"

const makers = {
	[TypeOfOperator.ABSOLUTE_VALUE]: async () =>
		await import("./operators/makeAbsoluteValue"),
	[TypeOfOperator.AND]: async () => await import("./operators/makeNoOp"),
	[TypeOfOperator.AVERAGE]: async () => await import("./operators/makeNoOp"),
	[TypeOfOperator.CASE]: async () => await import("./operators/makeNoOp"),
	[TypeOfOperator.CONCATENATE]: async () =>
		await import("./operators/makeNoOp"),
	[TypeOfOperator.COSECANT]: async () => await import("./operators/makeNoOp"),
	[TypeOfOperator.COSINE]: async () => await import("./operators/makeNoOp"),
	[TypeOfOperator.COTANGENT]: async () => await import("./operators/makeNoOp"),
	[TypeOfOperator.DEFAULT]: async () => await import("./operators/makeNoOp"),
	[TypeOfOperator.DIVIDE]: async () => await import("./operators/makeDivide"),
	[TypeOfOperator.DURATION]: async () => await import("./operators/makeNoOp"),
	[TypeOfOperator.ELSE_IF]: async () => await import("./operators/makeNoOp"),
	[TypeOfOperator.ELSE]: async () => await import("./operators/makeNoOp"),
	[TypeOfOperator.EQUAL_TO_N]: async () => await import("./operators/makeNoOp"),
	[TypeOfOperator.EXPONENT]: async () => await import("./operators/makeNoOp"),
	[TypeOfOperator.FROM_PERCENT]: async () =>
		await import("./operators/makeNoOp"),
	[TypeOfOperator.GREATER_THAN_OR_EQUAL_TO_N]: async () =>
		await import("./operators/makeNoOp"),
	[TypeOfOperator.GREATER_THAN]: async () =>
		await import("./operators/makeNoOp"),
	[TypeOfOperator.IDENTITY]: async () => await import("./operators/makeNoOp"),
	[TypeOfOperator.IF]: async () => await import("./operators/makeNoOp"),
	[TypeOfOperator.INSTANT]: async () => await import("./operators/makeNoOp"),
	[TypeOfOperator.IS_DISJOINT]: async () =>
		await import("./operators/makeNoOp"),
	[TypeOfOperator.IS_EVEN]: async () => await import("./operators/makeIsEven"),
	[TypeOfOperator.IS_MEMBER_OF]: async () =>
		await import("./operators/makeNoOp"),
	[TypeOfOperator.IS_NEGATIVE]: async () =>
		await import("./operators/makeNoOp"),
	[TypeOfOperator.IS_ODD]: async () => await import("./operators/makeIsOdd"),
	[TypeOfOperator.IS_OVERLAPPING]: async () =>
		await import("./operators/makeNoOp"),
	[TypeOfOperator.IS_POSITIVE]: async () =>
		await import("./operators/makeNoOp"),
	[TypeOfOperator.IS_SUBSET]: async () => await import("./operators/makeNoOp"),
	[TypeOfOperator.IS_SUPERSET]: async () =>
		await import("./operators/makeNoOp"),
	[TypeOfOperator.JOIN]: async () => await import("./operators/makeNoOp"),
	[TypeOfOperator.LESS_THAN_OR_EQUAL_TO_N]: async () =>
		await import("./operators/makeNoOp"),
	[TypeOfOperator.LESS_THAN]: async () => await import("./operators/makeNoOp"),
	[TypeOfOperator.LOG]: async () => await import("./operators/makeNoOp"),
	[TypeOfOperator.MATCHING]: async () => await import("./operators/makeNoOp"),
	[TypeOfOperator.MAXIMUM]: async () => await import("./operators/makeMaximum"),
	[TypeOfOperator.MEAN]: async () => await import("./operators/makeNoOp"),
	[TypeOfOperator.MEDIAN]: async () => await import("./operators/makeNoOp"),
	[TypeOfOperator.MINIMUM]: async () => await import("./operators/makeMinimum"),
	[TypeOfOperator.MODE]: async () => await import("./operators/makeNoOp"),
	[TypeOfOperator.MODULO]: async () => await import("./operators/makeModulo"),
	[TypeOfOperator.MULTIPLY]: async () =>
		await import("./operators/makeMultiply"),
	[TypeOfOperator.NATURAL_LOG]: async () =>
		await import("./operators/makeNoOp"),
	[TypeOfOperator.NEGATE]: async () => await import("./operators/makeNegate"),
	[TypeOfOperator.NOT]: async () => await import("./operators/makeNoOp"),
	[TypeOfOperator.OR]: async () => await import("./operators/makeNoOp"),
	[TypeOfOperator.PAD]: async () => await import("./operators/makeNoOp"),
	[TypeOfOperator.POWER]: async () => await import("./operators/makeNoOp"),
	[TypeOfOperator.RADICAL]: async () => await import("./operators/makeNoOp"),
	[TypeOfOperator.RANDOM]: async () => await import("./operators/makeNoOp"),
	[TypeOfOperator.RECIPROCAL]: async () =>
		await import("./operators/makeReciprocal"),
	[TypeOfOperator.REMAINDER]: async () =>
		await import("./operators/makeRemainder"),
	[TypeOfOperator.ROUND_DOWN]: async () => await import("./operators/makeNoOp"),
	[TypeOfOperator.ROUND_UP]: async () => await import("./operators/makeNoOp"),
	[TypeOfOperator.ROUND]: async () => await import("./operators/makeNoOp"),
	[TypeOfOperator.SECANT]: async () => await import("./operators/makeNoOp"),
	[TypeOfOperator.SINE]: async () => await import("./operators/makeNoOp"),
	[TypeOfOperator.SPLIT]: async () => await import("./operators/makeNoOp"),
	[TypeOfOperator.STANDARD_DEVIATION]: async () =>
		await import("./operators/makeNoOp"),
	[TypeOfOperator.SUBTRACT]: async () =>
		await import("./operators/makeSubtract"),
	[TypeOfOperator.SUM]: async () => await import("./operators/makeSum"),
	[TypeOfOperator.SWITCH]: async () => await import("./operators/makeNoOp"),
	[TypeOfOperator.TANGENT]: async () => await import("./operators/makeNoOp"),
	[TypeOfOperator.TO_BOOLEAN]: async () => await import("./operators/makeNoOp"),
	[TypeOfOperator.TO_FRACTION]: async () =>
		await import("./operators/makeNoOp"),
	[TypeOfOperator.TO_INTEGER]: async () => await import("./operators/makeNoOp"),
	[TypeOfOperator.TO_LOWERCASE]: async () =>
		await import("./operators/makeNoOp"),
	[TypeOfOperator.TO_PERCENT]: async () => await import("./operators/makeNoOp"),
	[TypeOfOperator.TO_PRECISION_NUMBER]: async () =>
		await import("./operators/makeNoOp"),
	[TypeOfOperator.TO_REAL_NUMBER]: async () =>
		await import("./operators/makeNoOp"),
	[TypeOfOperator.TO_SENTENCE_CASE]: async () =>
		await import("./operators/makeNoOp"),
	[TypeOfOperator.TO_TITLE_CASE]: async () =>
		await import("./operators/makeNoOp"),
	[TypeOfOperator.TO_UPPERCASE]: async () =>
		await import("./operators/makeNoOp"),
	[TypeOfOperator.TRIM]: async () => await import("./operators/makeNoOp"),
	[TypeOfOperator.TRUNCATE]: async () => await import("./operators/makeNoOp"),
	[TypeOfOperator.UNEQUAL_TO_N]: async () =>
		await import("./operators/makeNoOp"),
	[TypeOfOperator.XOR]: async () => await import("./operators/makeNoOp"),
}

// FIXME
function getRenderer (): [
	boolean,
	{ makeInjector: (operation: Operation) => Injector },
] {
	return [
		false,
		{
			makeInjector: () => () => ({
				datatype: "integer",
				value: 0,
			}),
		},
	]
}

export default function makeOperator(
	operation: Operation,
	maker?: (operation: Operation) => Injector,
): () => Value {
	const [, { makeInjector }] = getRenderer() || [false, { makeInjector: maker }]

	const operator = operation.operatorType === TypeOfOperator.INJECT_VALUE
		? makeInjector
		: (makers[operation.operatorType as keyof typeof makers] as (
			operation: Operation,
		) => Injector)

	return operator(operation as InjectValueOperation)
}
