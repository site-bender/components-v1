import type {
	Constraint,
	OrConstraint,
	Validation,
	ValidationError,
} from "../../../../../types/constraints"

import composeValidators from "../../../"
import pipeAsync from "../../../../../utilities/pipeAsync"

const orFormatter = new Intl.ListFormat("en", {
	style: "long",
	type: "disjunction",
})

export default async function makeOr(
	constraint: OrConstraint,
): Promise<(validation: Validation) => Promise<Validation>> {
	const { tests }: { tests: Array<Constraint> } = constraint
	const validators = tests.map((test: Constraint) => composeValidators(test))
	const validateOr = await pipeAsync(...validators)

	return async function or(validation: Validation): Promise<Validation> {
		const validated: Validation = await validateOr(validation)

		const { ors, others }: OrSplitter = (
			validated.errors || ([] as Array<ValidationError>)
		).reduce(
			(acc, error) =>
				error.error === "OR_ERROR"
					? { ...acc, ors: [...acc.ors, error] }
					: { ...acc, others: [...acc.others, error] },
			{ ors: [], others: [] } as OrSplitter,
		)
		const output = validated.isInvalid
			? {
					...(await validation),
					isInvalid: true,
					errors: [
						...ors,
						{
							constraint,
							error: "OR_ERROR",
							errors: others,
							errorMessage: orFormatter.format(
								others
									.map(({ errorMessage }) => errorMessage)
									.filter((value) => value) as Array<string>,
							),
						} as ValidationError,
					],
			  }
			: { isInvalid: validated.isInvalid, errors: validated.errors }

		return ((validated.errors || []) as Array<ValidationError>).length <
			constraint.tests.length
			? validation
			: {
					...validation,
					...output,
			  }
	}
}

type OrSplitter = {
	ors: Array<ValidationError>
	others: Array<ValidationError>
}
