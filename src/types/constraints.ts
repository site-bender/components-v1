import type { TypeOfConstraint, TypeOfSource } from "./enums"
import type {
	AnyDateTimeValue,
	AnyDateValue,
	Arrays,
	IntegerValue,
	ListValue,
	LocaleCompareOptions,
	NumberValue,
	RegularExpressionValue,
	SetValue,
	Sets,
	StringValue,
	Value,
} from "./values"

import type { Operation } from "./operations"

export type TestValues<T> = {
	valueToTest: {
		source: keyof typeof TypeOfSource | Array<keyof typeof TypeOfSource>
		path: Array<string>
		value?: T
	}
	valueToTestAgainst?: {
		source: keyof typeof TypeOfSource | Array<keyof typeof TypeOfSource>
		path: Array<string>
		value?: T
	}
}

export type MessageCollector = (messages: Array<string>) => Array<string>

/*
		===== Alphabetical constraints =====
	*/
export type AfterAlphabeticallyConstraint = {
	readonly constraintType: (typeof TypeOfConstraint)["AFTER_ALPHABETICALLY"]
	operand: Operation | StringValue | string
} & LocaleCompareOptions

export type BeforeAlphabeticallyConstraint = {
	readonly constraintType: (typeof TypeOfConstraint)["BEFORE_ALPHABETICALLY"]
	operand: Operation | StringValue | string
} & LocaleCompareOptions

export type NotAfterAlphabeticallyConstraint = {
	readonly constraintType: (typeof TypeOfConstraint)["NOT_AFTER_ALPHABETICALLY"]
	operand: Operation | StringValue | string
} & LocaleCompareOptions

export type NotBeforeAlphabeticallyConstraint = {
	readonly constraintType: (typeof TypeOfConstraint)["NOT_BEFORE_ALPHABETICALLY"]
	operand: Operation | StringValue | string
} & LocaleCompareOptions

/*
	===== Relative to date constraints =====
 */
export type AfterDateConstraint = {
	readonly constraintType: (typeof TypeOfConstraint)["AFTER_DATE"]
	operand: Operation | AnyDateValue
}

export type BeforeDateConstraint = {
	readonly constraintType: (typeof TypeOfConstraint)["BEFORE_DATE"]
	operand: Operation | AnyDateValue
}

export type OnOrAfterDateConstraint = {
	readonly constraintType: (typeof TypeOfConstraint)["ON_OR_AFTER_DATE"]
	operand: Operation | AnyDateValue
}

export type OnOrBeforeDateConstraint = {
	readonly constraintType: (typeof TypeOfConstraint)["ON_OR_BEFORE_DATE"]
	operand: Operation | AnyDateValue
}

/*
		===== Relative to date-time constraints =====
	*/
export type AfterDateTimeConstraint = {
	readonly constraintType: (typeof TypeOfConstraint)["AFTER_DATE_TIME"]
	operand: Operation | AnyDateTimeValue
}

export type BeforeDateTimeConstraint = {
	readonly constraintType: (typeof TypeOfConstraint)["BEFORE_DATE_TIME"]
	operand: Operation | AnyDateTimeValue
}

/*
		===== Character count =====
	*/
export type AtLeastNCharactersConstraint = {
	match?: string | RegExp
	operand: Operation | IntegerValue | number
	readonly constraintType: (typeof TypeOfConstraint)["AT_LEAST_N_CHARACTERS"]
}

export type AtMostNCharactersConstraint = {
	match?: string | RegExp
	operand: Operation | IntegerValue | number
	readonly constraintType: (typeof TypeOfConstraint)["AT_MOST_N_CHARACTERS"]
}

export type ExactlyNCharactersConstraint = {
	match?: string | RegExp
	operand: Operation | IntegerValue | number
	readonly constraintType: (typeof TypeOfConstraint)["EXACTLY_N_CHARACTERS"]
}

export type FewerThanNCharactersConstraint = {
	match?: string | RegExp
	operand: Operation | IntegerValue | number
	readonly constraintType: (typeof TypeOfConstraint)["FEWER_THAN_N_CHARACTERS"]
}

export type MoreThanNCharactersConstraint = {
	match?: string | RegExp
	operand: Operation | IntegerValue | number
	readonly constraintType: (typeof TypeOfConstraint)["MORE_THAN_N_CHARACTERS"]
}

/*
		===== Number GT/GTE/LT/LTE constraints =====
	*/
export type AtLeastNConstraint = {
	operand: Operation | NumberValue | number
	readonly constraintType: (typeof TypeOfConstraint)["AT_LEAST_N"]
}

export type AtMostNConstraint = {
	operand: Operation | NumberValue | number
	readonly constraintType: (typeof TypeOfConstraint)["AT_MOST_N"]
}

export type EqualToNConstraint = {
	operand: Operation | NumberValue | number
	readonly constraintType: (typeof TypeOfConstraint)["EQUAL_TO_N"]
}

export type LessThanNConstraint = {
	operand: Operation | NumberValue | number
	readonly constraintType: (typeof TypeOfConstraint)["LESS_THAN_N"]
}

export type MoreThanNConstraint = {
	operand: Operation | NumberValue | number
	readonly constraintType: (typeof TypeOfConstraint)["MORE_THAN_N"]
}

export type NotEqualToNConstraint = {
	operand: Operation | NumberValue | number
	readonly constraintType: (typeof TypeOfConstraint)["NOT_EQUAL_TO_N"]
}

/*
		===== Confirmation constraint =====
	*/
export type ConfirmationConstraint = {
	readonly constraintType: (typeof TypeOfConstraint)["CONFIRMED"]
}

/*
		===== RegExp match =====
	*/
export type MatchConstraint = {
	operand: Operation | RegularExpressionValue | StringValue | string | RegExp
	readonly constraintType: (typeof TypeOfConstraint)["MATCHING"]
	flags?: string
}

/*
		===== Set constraints =====
	*/
export type DisjointSetConstraint = {
	operand: Operation | SetValue | Sets | Arrays | string
	readonly constraintType: (typeof TypeOfConstraint)["DISJOINT_SET"]
	separator?: string | RegExp
}

export type MemberConstraint = {
	operand: Operation | SetValue | Sets | Arrays | string
	readonly constraintType: (typeof TypeOfConstraint)["MEMBER"]
	separator?: string | RegExp
}

export type OverlappingSetConstraint = {
	operand: Operation | SetValue | Sets | Arrays | string
	readonly constraintType: (typeof TypeOfConstraint)["OVERLAPPING_SET"]
	separator?: string | RegExp
}

export type SubsetConstraint = {
	operand: Operation | SetValue | Sets | Arrays | string
	readonly constraintType: (typeof TypeOfConstraint)["SUBSET"]
	separator?: string | RegExp
}

export type SupersetConstraint = {
	operand: Operation | SetValue | Sets | Arrays | string
	readonly constraintType: (typeof TypeOfConstraint)["SUPERSET"]
	separator?: string | RegExp
}

/*
		===== Ordering constraints =====
	*/
export type OrderedListConstraint = {
	operand: Operation | ListValue | Arrays | string
	readonly constraintType: (typeof TypeOfConstraint)["ORDERED_LIST"]
	separator?: string | RegExp
}

export type ReversedListConstraint = {
	operand: Operation | ListValue | Arrays | string
	readonly constraintType: (typeof TypeOfConstraint)["REVERSED_LIST"]
	separator?: string | RegExp
}

/*
		===== Static type constraints =====
	*/
export type ArrayTypeConstraint = {
	readonly constraintType: (typeof TypeOfConstraint)["IS_ARRAY"]
	readonly datatype: "array"
	separator?: string | RegExp
}

export type TypeOfBooleanConstraint = {
	readonly constraintType: (typeof TypeOfConstraint)["IS_BOOLEAN"]
}

export type DateTypeConstraint = {
	readonly constraintType: (typeof TypeOfConstraint)["IS_DATE"]
}

export type DateTimeTypeConstraint = {
	readonly constraintType: (typeof TypeOfConstraint)["IS_DATE_TIME"]
}

export type DurationTypeConstraint = {
	readonly constraintType: (typeof TypeOfConstraint)["IS_DURATION"]
}

export type FractionTypeConstraint = {
	readonly constraintType: (typeof TypeOfConstraint)["IS_FRACTION"]
}

export type InstantTypeConstraint = {
	readonly constraintType: (typeof TypeOfConstraint)["IS_INSTANT"]
}

export type IntegerTypeConstraint = {
	readonly constraintType: (typeof TypeOfConstraint)["IS_INTEGER"]
}

export type ListTypeConstraint = {
	readonly constraintType: (typeof TypeOfConstraint)["IS_LIST"]
	separator?: string | RegExp
}

export type MapTypeConstraint = {
	readonly constraintType: (typeof TypeOfConstraint)["IS_MAP"]
	separator?: string | RegExp
	keyValueSeparator?: string | RegExp
}

export type MemberTypeConstraint = {
	readonly constraintType: (typeof TypeOfConstraint)["IS_MEMBER"]
}

export type MonthDayConstraint = {
	readonly constraintType: (typeof TypeOfConstraint)["IS_MONTH_DAY"]
}

export type PrecisionTypeConstraint = {
	readonly constraintType: (typeof TypeOfConstraint)["IS_PRECISION"]
	decimalPlaces: number
}

export type RealTypeConstraint = {
	readonly constraintType: (typeof TypeOfConstraint)["IS_REAL"]
}

export type SetTypeConstraint = {
	readonly constraintType: (typeof TypeOfConstraint)["IS_SET"]
}

export type StringTypeConstraint = {
	readonly constraintType: (typeof TypeOfConstraint)["IS_STRING"]
	match?: string
}

export type TimeZoneTypeConstraint = {
	readonly constraintType: (typeof TypeOfConstraint)["IS_TIME_ZONE"]
}

export type YearMonthConstraint = {
	readonly constraintType: (typeof TypeOfConstraint)["IS_YEAR_MONTH"]
}

export type ZonedDateTimeTypeConstraint = {
	readonly constraintType: (typeof TypeOfConstraint)["IS_ZONED_DATE_TIME"]
}

/*
		===== Add 'em up =====
	*/
export type StaticConstraint =
	| ArrayTypeConstraint
	| TypeOfBooleanConstraint
	| DateTimeTypeConstraint
	| DateTypeConstraint
	| FractionTypeConstraint
	| InstantTypeConstraint
	| IntegerTypeConstraint
	| ListTypeConstraint
	| MapTypeConstraint
	| MemberTypeConstraint
	| MonthDayConstraint
	| PrecisionTypeConstraint
	| RealTypeConstraint
	| SetTypeConstraint
	| StringTypeConstraint
	| TimeZoneTypeConstraint
	| YearMonthConstraint
	| ZonedDateTimeTypeConstraint

export type RelationalConstraint =
	| AfterAlphabeticallyConstraint
	| AfterDateConstraint
	| AfterDateTimeConstraint
	| AtLeastNConstraint
	| AtLeastNCharactersConstraint
	| AtMostNConstraint
	| AtMostNCharactersConstraint
	| BeforeAlphabeticallyConstraint
	| BeforeDateConstraint
	| BeforeDateTimeConstraint
	| ConfirmationConstraint
	| DisjointSetConstraint
	| EqualToNConstraint
	| ExactlyNCharactersConstraint
	| LessThanNConstraint
	| FewerThanNCharactersConstraint
	| MemberConstraint
	| MoreThanNConstraint
	| MoreThanNCharactersConstraint
	| NotAfterAlphabeticallyConstraint
	| NotBeforeAlphabeticallyConstraint
	| NotEqualToNConstraint
	| OnOrAfterDateConstraint
	| OnOrBeforeDateConstraint
	| OrderedListConstraint
	| OverlappingSetConstraint
	| ReversedListConstraint
	| MatchConstraint
	| SubsetConstraint
	| SupersetConstraint

export type LeafConstraint = RelationalConstraint | StaticConstraint

export type AndConstraint = {
	readonly constraintType: (typeof TypeOfConstraint)["AND"]
	tests: Array<Constraint>
}

export type OrConstraint = {
	readonly constraintType: (typeof TypeOfConstraint)["OR"]
	tests: Array<Constraint>
}

export type XorConstraint = {
	readonly constraintType: (typeof TypeOfConstraint)["XOR"]
	tests: Array<Constraint>
}

export type BranchConstraint = AndConstraint | OrConstraint | XorConstraint

export type Constraint = BranchConstraint | LeafConstraint

export type ValidationErrorType = `${keyof typeof TypeOfConstraint}_ERROR`

export type ArrayInfer<A> = A extends (infer I)[] ? I : never

/*
	===== Validation types =====
*/
export type ValidationError = {
	error: ValidationErrorType
	errorMessage?: string
	constraint: Constraint
	errors?: Array<ValidationError>
}

export type Validation = {
	isInvalid?: boolean | undefined
	errors?: Array<ValidationError> | undefined
} & Value
