import type { Temporal } from "@js-temporal/polyfill"

export type Arrays =
	| Array<Arrays>
	| Array<Maps>
	| Array<number>
	| Array<Records>
	| Array<Sets>
	| Array<string>
	| Array<Temporal.Calendar>
	| Array<Temporal.Duration>
	| Array<Temporal.PlainDate>
	| Array<Temporal.PlainDateTime>
	| Array<Temporal.ZonedDateTime>

export type Maps =
	| Map<string, Arrays>
	| Map<string, Maps>
	| Map<string, number>
	| Map<string, Records>
	| Map<string, Sets>
	| Map<string, string>
	| Map<string, Temporal.Calendar>
	| Map<string, Temporal.Duration>
	| Map<string, Temporal.PlainDate>
	| Map<string, Temporal.PlainDateTime>
	| Map<string, Temporal.ZonedDateTime>

export type Records =
	| Record<string, { [key: string]: string | Records }>
	| Record<string, Arrays>
	| Record<string, Maps>
	| Record<string, number>
	| Record<string, Sets>
	| Record<string, string>
	| Record<string, Temporal.Calendar>
	| Record<string, Temporal.Duration>
	| Record<string, Temporal.PlainDate>
	| Record<string, Temporal.PlainDateTime>
	| Record<string, Temporal.ZonedDateTime>

export type Sets =
	| Set<Arrays>
	| Set<Maps>
	| Set<number>
	| Set<Records>
	| Set<Sets>
	| Set<string>
	| Set<Temporal.Calendar>
	| Set<Temporal.Duration>
	| Set<Temporal.PlainDate>
	| Set<Temporal.PlainDateTime>
	| Set<Temporal.ZonedDateTime>

export type State = Record<
	string,
	{
		name: string
		path?: Array<string> | undefined
		value?: Value | undefined
	}
>

export type FormState = Record<
	string,
	{
		name: string
		path?: Array<string> | undefined
		value?: Value | undefined
		touched: boolean
		dirty: boolean
	}
>

/*
	===== String sorting =====
*/
export type LanguageType = "en" | "fr"

export type LocaleCompareOptions = {
	language?: LanguageType | Array<LanguageType> | undefined
	options?:
		| {
				ignorePunctuation?: boolean | undefined
				usage?: "search" | "sort" | undefined
				sensitivity?: "base" | "accent" | "case" | "variant" | undefined
				numeric?: boolean | undefined
				caseFirst?: "upper" | "lower" | "false" | undefined
		  }
		| undefined
}

export type Fraction = {
	denominator: number
	numerator: number
}

export type NumberDatatype = "integer" | "floatingPoint" | "precision"

export type NumberFormat = typeof Intl.NumberFormat

export type DurationOptions = {
	years?: number | undefined
	months?: number | undefined
	weeks?: number | undefined
	days?: number | undefined
	hours?: number | undefined
	minutes?: number | undefined
	seconds?: number | undefined
	milliseconds?: number | undefined
	microseconds?: number | undefined
	nanoseconds?: number | undefined
}

/*
	===== Value types =====
*/
export type ArrayValue = {
	readonly datatype: "array"
	value: Arrays | string
	separator?: string | RegExp | undefined
}

export type BooleanValue = {
	readonly datatype: "boolean"
	value: boolean
	permitIndeterminate?: boolean | undefined
}

export type CalendarValue = {
	readonly datatype: "calendar"
	value: Temporal.Calendar | string
}

export type DurationValue = {
	readonly datatype: "duration"
	value: Temporal.Duration | DurationOptions | string
}

export type EmptyValue = {
	readonly datatype: "empty"
	value: []
}

export type FractionValue = {
	readonly datatype: "fraction"
	value: Fraction
	numberType?: "integer" | "bigint" | undefined
}

export type InstantValue = {
	readonly datatype: "instant"
	value: Temporal.Instant | Date | string
}

export type IntegerValue = {
	readonly datatype: "integer"
	value: number
	numberType?: "integer" | "bigint" | undefined
	format?: NumberFormat | undefined
}

export type ListValue = {
	readonly datatype: "list"
	value: Arrays | string
	separator?: string | RegExp | undefined
}

export type MemberValue = {
	readonly datatype: "member"
	value: unknown
}

export type MapValue = {
	readonly datatype: "map"
	value: Maps | Records | string
	keyValueSeparator?: string | RegExp | undefined
	separator?: string | RegExp | undefined
}

export type MonthDayValue = {
	readonly datatype: "monthDay"
	value: Temporal.PlainMonthDay | string
}

export type PlainDateValue = {
	readonly datatype: "plainDate"
	value: Temporal.PlainDate | string | Date
}

export type PlainDateTimeValue = {
	readonly datatype: "plainDateTime"
	value: Temporal.PlainDateTime | string | Date
}

export type PrecisionNumberValue = {
	readonly datatype: "precision"
	value: number
	precision?: number | undefined
	format?: NumberFormat | undefined
}

export type RadianValue = {
	readonly datatype: "radian"
	value: number
}

export type RealNumberValue = {
	readonly datatype: "real"
	value: number
	format?: NumberFormat | undefined
	decimalPlaces?: number | undefined
}

export type RecordValue = {
	readonly datatype: "record"
	value: Records | string
	keyValueSeparator?: string | RegExp | undefined
	separator?: string | RegExp | undefined
}

export type RegularExpressionValue = {
	readonly datatype: "string"
	value: string
	flags?: string | undefined
	message?: string | undefined
}

export type SetValue = {
	readonly datatype: "set"
	value: Sets | Arrays | string
	separator?: string | RegExp | undefined
}

export type StringValue = {
	readonly datatype: "string"
	value: string
	matches?: RegExp | undefined
}

export type TimeZoneValue = {
	readonly datatype: "timeZone"
	value: Temporal.TimeZone | string
}

export type YearMonthValue = {
	readonly datatype: "yearMonth"
	value: Temporal.PlainYearMonth | string
}

export type ZonedDateTimeValue = {
	readonly datatype: "zonedDateTime"
	value: Temporal.ZonedDateTime | string | Date
	timeZone?: Temporal.TimeZone | string | undefined
}

export type NonFractionValue =
	| PrecisionNumberValue
	| RealNumberValue
	| IntegerValue

export type NumberValue = NonFractionValue | FractionValue

export type DateTimeValue =
	| InstantValue
	| PlainDateTimeValue
	| PlainDateValue
	| ZonedDateTimeValue

export type Value =
	| ArrayValue
	| BooleanValue
	| CalendarValue
	| DateTimeValue
	| DurationValue
	| EmptyValue
	| ListValue
	| MapValue
	| MemberValue
	| NumberValue
	| RadianValue
	| RecordValue
	| RegularExpressionValue
	| SetValue
	| StringValue
	| TimeZoneValue

export type DateType = PlainDateValue | Date | string

export type DateTimeType = PlainDateTimeValue | Date | string

export type DateTimeWithTimeZoneType =
	| ZonedDateTimeValue
	| InstantValue
	| Date
	| string

export type AnyDateTimeValue = DateTimeType | DateTimeWithTimeZoneType
export type AnyDateValue = DateType | AnyDateTimeValue

export type ValueType =
	| string
	| boolean
	| number
	| Date
	| Temporal.PlainDate
	| Temporal.PlainDateTime
	| Temporal.PlainTime
	| Temporal.PlainYearMonth
	| Temporal.Instant
	| Temporal.Duration
	| Temporal.Calendar
	| Records
	| Arrays
	| Sets
	| Maps
