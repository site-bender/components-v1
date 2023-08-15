import type { Constraint, Validation } from "../../types/constraints"

import { TypeOfConstraint } from "../../types/enums"
import not from "../../utilities/not"

const validators = {
	[TypeOfConstraint.AFTER_ALPHABETICALLY]: async () =>
		await import("./validators/alphabetical/makeAfterAlphabetically"),
	[TypeOfConstraint.AFTER_DATE]: async () =>
		await import("./validators/date/makeAfterDate"),
	[TypeOfConstraint.AFTER_DATE_TIME]: async () =>
		await import("./validators/datetime/makeAfterDateTime"),
	[TypeOfConstraint.AND]: async () =>
		await import("./validators/composers/makeAnd"),
	[TypeOfConstraint.AT_LEAST_N]: async () =>
		await import("./validators/number/makeAtLeastN"),
	[TypeOfConstraint.AT_LEAST_N_CHARACTERS]: async () =>
		await import("./validators/length/makeAtLeastNCharacters"),
	[TypeOfConstraint.AT_MOST_N]: async () =>
		await import("./validators/number/makeAtMostN"),
	[TypeOfConstraint.AT_MOST_N_CHARACTERS]: async () =>
		await import("./validators/length/makeAtMostNCharacters"),
	[TypeOfConstraint.BEFORE_ALPHABETICALLY]: async () =>
		await import("./validators/alphabetical/makeBeforeAlphabetically"),
	[TypeOfConstraint.BEFORE_DATE]: async () =>
		await import("./validators/date/makeBeforeDate"),
	[TypeOfConstraint.BEFORE_DATE_TIME]: async () =>
		await import("./validators/datetime/makeBeforeDateTime"),
	[TypeOfConstraint.CONFIRMED]: async () =>
		await import("./validators/other/makeConfirmation"),
	[TypeOfConstraint.DISJOINT_SET]: async () =>
		await import("./validators/set/makeDisjointSet"),
	[TypeOfConstraint.EQUAL_TO_N]: async () =>
		await import("./validators/number/makeEqualToN"),
	[TypeOfConstraint.EXACTLY_N_CHARACTERS]: async () =>
		await import("./validators/length/makeExactlyNCharacters"),
	[TypeOfConstraint.FEWER_THAN_N_CHARACTERS]: async () =>
		await import("./validators/length/makeFewerThanNCharacters"),
	[TypeOfConstraint.IS_ARRAY]: async () =>
		await import("./validators/static/makeIsArray"),
	[TypeOfConstraint.IS_BOOLEAN]: async () =>
		await import("./validators/static/makeIsBoolean"),
	[TypeOfConstraint.IS_DATE]: async () =>
		await import("./validators/static/makeIsDate"),
	[TypeOfConstraint.IS_DATE_TIME]: async () =>
		await import("./validators/static/makeIsDateTime"),
	[TypeOfConstraint.IS_DURATION]: async () =>
		await import("./validators/static/makeIsDuration"),
	[TypeOfConstraint.IS_FRACTION]: async () =>
		await import("./validators/static/makeIsFraction"),
	[TypeOfConstraint.IS_INSTANT]: async () =>
		await import("./validators/static/makeIsInstant"),
	[TypeOfConstraint.IS_INTEGER]: async () =>
		await import("./validators/static/makeIsInteger"),
	[TypeOfConstraint.IS_LIST]: async () =>
		await import("./validators/static/makeIsList"),
	[TypeOfConstraint.IS_MAP]: async () =>
		await import("./validators/static/makeIsMap"),
	[TypeOfConstraint.IS_MEMBER]: async () =>
		await import("./validators/static/makeIsMember"),
	[TypeOfConstraint.IS_MONTH_DAY]: async () =>
		await import("./validators/static/makeIsMonthDay"),
	[TypeOfConstraint.IS_PRECISION]: async () =>
		await import("./validators/static/makeIsPrecision"),
	[TypeOfConstraint.IS_REAL]: async () =>
		await import("./validators/static/makeIsReal"),
	[TypeOfConstraint.IS_SET]: async () =>
		await import("./validators/static/makeIsSet"),
	[TypeOfConstraint.IS_STRING]: async () =>
		await import("./validators/static/makeIsString"),
	[TypeOfConstraint.IS_TIME_ZONE]: async () =>
		await import("./validators/static/makeIsTimeZone"),
	[TypeOfConstraint.IS_YEAR_MONTH]: async () =>
		await import("./validators/static/makeIsYearMonth"),
	[TypeOfConstraint.IS_ZONED_DATE_TIME]: async () =>
		await import("./validators/static/makeIsZonedDateTime"),
	[TypeOfConstraint.LESS_THAN_N]: async () =>
		await import("./validators/number/makeLessThanN"),
	[TypeOfConstraint.MATCHING]: async () =>
		await import("./validators/other/makeMatch"),
	[TypeOfConstraint.MEMBER]: async () =>
		await import("./validators/set/makeMember"),
	[TypeOfConstraint.MORE_THAN_N]: async () =>
		await import("./validators/number/makeMoreThanN"),
	[TypeOfConstraint.MORE_THAN_N_CHARACTERS]: async () =>
		await import("./validators/length/makeMoreThanNCharacters"),
	[TypeOfConstraint.NOT_AFTER_ALPHABETICALLY]: async () =>
		await import("./validators/alphabetical/makeNotAfterAlphabetically"),
	[TypeOfConstraint.NOT_BEFORE_ALPHABETICALLY]: async () =>
		await import("./validators/alphabetical/makeNotBeforeAlphabetically"),
	[TypeOfConstraint.NOT_EQUAL_TO_N]: async () =>
		await import("./validators/number/makeNotEqualToN"),
	[TypeOfConstraint.ON_OR_AFTER_DATE]: async () =>
		await import("./validators/date/makeOnOrAfterDate"),
	[TypeOfConstraint.ON_OR_BEFORE_DATE]: async () =>
		await import("./validators/date/makeOnOrBeforeDate"),
	[TypeOfConstraint.OR]: async () =>
		await import("./validators/composers/makeOr"),
	[TypeOfConstraint.ORDERED_LIST]: async () =>
		await import("./validators/sequence/makeIsOrderedList"),
	[TypeOfConstraint.OVERLAPPING_SET]: async () =>
		await import("./validators/set/makeOverlappingSet"),
	[TypeOfConstraint.REVERSED_LIST]: async () =>
		await import("./validators/sequence/makeIsReversedList"),
	[TypeOfConstraint.SUBSET]: async () =>
		await import("./validators/set/makeSubset"),
	[TypeOfConstraint.SUPERSET]: async () =>
		await import("./validators/set/makeSuperset"),
	[TypeOfConstraint.XOR]: async () =>
		await import("./validators/composers/makeXor"),
}

function noOp (validation: Validation): Validation {
	return validation
}

export default async function composeValidators(
	constraint: Constraint,
): Promise<(validation: Validation) => Validation> {
	if (not(constraint)) {
		return noOp
	}

	const importer = validators[
		constraint.constraintType as keyof typeof TypeOfConstraint
	]

	const { default: makeValidator } = await importer()

	return makeValidator ? makeValidator(constraint) : () => ({} as Validation)
}
