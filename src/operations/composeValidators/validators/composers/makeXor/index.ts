import type {
	Constraint,
	Validation,
	ValidationError,
	XorConstraint,
} from "../../../../../types/constraints"

import pipeAsync from "../../../../../utilities/pipeAsync"
import composeValidators from "../../../"

const xorFormatter = new Intl.ListFormat("en", {
	style: "long",
	type: "unit",
})

export default async function makeXor(
	constraint: XorConstraint,
): Promise<(validation: Validation) => Promise<Validation>> {
	const { tests }: { tests: Array<Constraint> } = constraint
	const validators = tests.map((test: Constraint) => composeValidators(test))
	const validateXor = await pipeAsync(...validators)

	return async function xor(validation: Validation): Promise<Validation> {
		const validated: Validation = await validateXor(validation)

		const { xors, others }: XorSplitter = (
			validated.errors || ([] as Array<ValidationError>)
		).reduce(
			(acc, error) =>
				error.error === "XOR_ERROR"
					? { ...acc, xors: [...acc.xors, error] }
					: { ...acc, others: [...acc.others, error] },
			{ xors: [], others: [] } as XorSplitter,
		)

		return validated.errors?.length === constraint.tests.length - 1
			? validation
			: {
				...(await validation),
				isInvalid: true,
				errors: [
					...xors,
					{
						constraint,
						error: "XOR_ERROR",
						errors: others,
						errorMessage: xorFormatter.format(
							others
								.map(({ errorMessage }) => errorMessage)
								.filter((value) => value) as Array<string>,
						),
					} as ValidationError,
				],
			}
	}
}

type XorSplitter = {
	xors: Array<ValidationError>
	others: Array<ValidationError>
}
