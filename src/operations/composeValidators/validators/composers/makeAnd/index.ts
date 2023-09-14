import type {
	AndConstraint,
	Constraint,
	Validation,
	ValidationError,
} from "../../../../../types/constraints"

import pipeAsync from "../../../../../utilities/pipeAsync"
import composeValidators from "../../../../composeValidators"

const andFormatter = new Intl.ListFormat("en", {
	style: "long",
	type: "conjunction",
})

export default async function makeAnd(
	constraint: AndConstraint,
): Promise<(validation: Validation) => Promise<Validation>> {
	const { tests }: { tests: Array<Constraint> } = constraint
	const validators = tests.map((test: Constraint) => composeValidators(test))
	const validateAnd = await pipeAsync(...validators)

	return async function and(validation: Validation): Promise<Validation> {
		const validated: Validation = await validateAnd(validation)

		const { ands, others }: AndSplitter = (
			validated.errors || ([] as Array<ValidationError>)
		).reduce(
			(acc, error) => {
				return error.error === "AND_ERROR"
					? { ...acc, ands: [...acc.ands, error] }
					: { ...acc, others: [...acc.others, error] }
			},
			{ ands: [], others: [] } as AndSplitter,
		)
		const output = validated.isInvalid
			? {
					...(await validation),
					isInvalid: true,
					errors: [
						...ands,
						{
							constraint,
							error: "AND_ERROR",
							errors: others,
							errorMessage: andFormatter.format(
								others
									.map(({ errorMessage }) => errorMessage)
									.filter((value) => value) as Array<string>,
							),
						} as ValidationError,
					],
			  }
			: { isInvalid: validated.isInvalid, errors: validated.errors }

		return {
			...validation,
			...output,
		}
	}
}

type AndSplitter = {
	ands: Array<ValidationError>
	others: Array<ValidationError>
}
