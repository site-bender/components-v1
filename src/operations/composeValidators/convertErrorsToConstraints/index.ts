import type { Constraint, ValidationError } from "../../types/constraints"

export default function convertConstraintsToConstraints(
	errors: Array<ValidationError>,
): Array<Constraint> {
	return errors.reduce((acc, err) => {
		const { constraint, error, errors, errorMessage } = err
		const { constraintType, ...rest } = constraint as Constraint

		return ["and", "or", "xor"].includes(error)
			? [
					...acc,
					{
						constraintType: error,
						tests: convertConstraintsToConstraints(
							errors as Array<ValidationError>,
						),
						...(errorMessage ? { errorMessage } : {}),
					} as Constraint,
			  ]
			: [
					...acc,
					{
						constraintType,
						...rest,
					} as Constraint,
			  ]
	}, [] as Array<Constraint>)
}
