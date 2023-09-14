import type {
	Constraint,
	Validation,
	ValidationError,
	ValidationErrorType,
} from "../../../../types/constraints"

export default async function makeError<
	V extends Validation,
	C extends Constraint,
>(v: V, constraint: C, errorMessage?: string): Promise<V> {
	const validation = await v
	const errors = validation.errors || []
	const wrappedErrors = Array.isArray(errors) ? errors : [errors]

	return {
		...validation,
		isInvalid: true,
		errors: [
			...wrappedErrors,
			{
				error: constraint.constraintType as ValidationErrorType,
				constraint: constraint as C,
				...(errorMessage ? { errorMessage } : {}),
			},
		] as Array<ValidationError>,
	}
}
