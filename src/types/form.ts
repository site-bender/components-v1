import type {
	AnchorTarget,
	Dataset,
	HTMLAttributes,
	Override,
	Validatable,
} from "./html"

import type { Temporal } from "@js-temporal/polyfill"

export type GenericFormAttributes = Override<
	HTMLAttributes,
	{
		class?: never | undefined | null
		dataset?: Dataset | undefined | null
		disabled?: boolean | string | undefined | null
		form: string
		name: string
		placeholder?: never | undefined | null
		readonly?: boolean | string | undefined | null
		required?: boolean | string | undefined | null
	}
>

// Use instead of input[type=button|reset|submit]
export type ButtonProps = Override<
	HTMLAttributes,
	{
		disabled?: boolean | string | undefined | null
		form: string | undefined | null
		formaction?: string | undefined | null
		formenctype?: string | undefined | null
		formmethod?: string | undefined | null
		formnovalidate?: boolean | string | undefined | null
		formtarget?: AnchorTarget | undefined | null
		label?: string | undefined | null
		popovertarget?: string | undefined | null // ID of target
		popovertargetaction?: "hide" | "show" | "toggle" | undefined | null
		type?: "button" | "reset" | "submit" | undefined | null
		value?: string | string[] | number | undefined | null
	}
>

export type FormValidation = "default" | "fallback" | "operations"

export type Form = Override<
	GenericFormAttributes,
	{
		"accept-charset"?: string | undefined | null
		action: string
		autocomplete?: "off" | "on" | undefined | null
		autocorrect?: never
		dataset?: Dataset
		enctype?: string | undefined | null
		form?: never
		labelledBy: string | undefined | null
		method?: "get" | "post" | undefined | null
		name?: string | undefined | null
		validator?: "full" | "fallback" | undefined | null
		novalidate?: boolean | string | undefined | null
		target?: AnchorTarget | undefined | null
		validation?: FormValidation | undefined | null
	}
>

export type Fieldset = Override<
	HTMLAttributes,
	{
		disabled?: boolean | string | undefined | null
		form: string
	}
>

// Non-textual inputs
export type CheckboxInput = Override<
	GenericFormAttributes,
	{
		checked?: boolean | string | undefined | null
		field?: string | undefined | null
		groupLabelId?: string | undefined | null
		label?: string | undefined | null
		labelledBy?: string | undefined | null
		type?: never
		value: string | number
		wrapper?: Partial<HTMLAttributes> | undefined | null
	} & Validatable
>

export type Option = {
	"alpha2"?: string | undefined | null
	"alpha3"?: string | undefined | null
	"checked"?: boolean | string | undefined | null
	"class:list"?:
		| Record<string, boolean>
		| Record<string | number | symbol, unknown>
		| Iterable<string>
		| Iterable<unknown>
		| string
	"form"?: string | undefined | null
	"groupLabelId"?: string | undefined | null
	"id"?: string | undefined | null
	"label": string
	"name"?: string | undefined | null
	"numeric"?: string | number | undefined | null
	"options"?: Options | undefined | null
	"readonly"?: boolean | string | undefined | null
	"required"?: boolean | string | undefined | null
	"type"?: never
	"value"?: string | number | undefined | null
	"wrapper"?: Partial<Label>
}

export type Options = Array<Option>

export type CheckboxGroup = Override<
	GenericFormAttributes,
	{
		field?: string | undefined | null
		form: string
		group?: Partial<HTMLAttributes> | undefined | null
		help?: Partial<Help> | undefined | null
		label?: string | undefined | null
		legend?: Partial<Label> | undefined | null
		message?: string | undefined | null
		name: string
		options: Options
		outer?: Partial<Fieldset> | undefined | null
		readonly?: boolean | string | undefined | null
		required?: boolean | string | undefined | null
		selected?: string | number | Array<string | number> | undefined | null
		tag?: Partial<HTMLAttributes> | undefined | null
		wrapper?: Partial<Fieldset> | undefined | null
	} & Validatable
>

export type ColorInput = Override<
	GenericFormAttributes,
	{
		autocomplete?: "off" | "on" | undefined | null
		datalist?: HTMLAttributes | undefined | null
		field?: string | undefined | null
		labelledBy?: string | undefined | null
		list?: Options | undefined | null
		type?: never
		value?: string | undefined | null
		wrapper?: Partial<HTMLAttributes> | undefined | null
	} & Validatable
>

export type FileInput = Override<
	GenericFormAttributes,
	{
		accept?: string | undefined | null
		capture?: "environment" | "user" | undefined | null
		field?: string | undefined | null
		labelledBy?: string | undefined | null
		multiple?: boolean | string | undefined | null
		type?: never
		value?: string | string[] | undefined | null
		wrapper?: Partial<HTMLAttributes> | undefined | null
	} & Validatable
>

export type HiddenInput = Override<
	GenericFormAttributes,
	{
		autocomplete?: "off" | "on" | undefined | null
		field?: string | undefined | null
		name: "_charset_" | string
		readonly?: never
		required?: never
		type?: never
		value?: string | number | undefined | null
	}
>

export type ImageInput = Override<
	GenericFormAttributes,
	{
		alt: string
		field?: string | undefined | null
		formaction?: string | undefined | null
		formenctype?: string | undefined | null
		formmethod?: string | undefined | null
		formnovalidate?: boolean | string | undefined | null
		formtarget?: AnchorTarget | undefined | null
		height?: number | string | undefined | null
		labelledBy?: string | undefined | null
		src: string
		type?: never
		width?: number | string | undefined | null
	}
>

export type RadioInput = Override<
	GenericFormAttributes,
	{
		checked?: boolean | string | undefined | null
		field?: string | undefined | null
		groupLabelId?: string | undefined | null
		label?: string | undefined | null
		labelledBy?: string | undefined | null
		type?: never
		value: string | number
		wrapper?: Partial<HTMLAttributes> | undefined | null
	} & Validatable
>

export type RadioGroup = Override<
	GenericFormAttributes,
	{
		field?: string | undefined | null
		form: string
		group?: Partial<HTMLAttributes> | undefined | null
		help?: Partial<Help> | undefined | null
		includeNull?: boolean | undefined | null
		label?: string | undefined | null
		legend?: Partial<Label> | undefined | null
		message?: string | undefined | null
		name: string
		options: Options
		outer?: Partial<Fieldset> | undefined | null
		readonly?: boolean | string | undefined | null
		required?: boolean | string | undefined | null
		selected?: string | number | Array<string | number> | undefined | null
		tag?: Partial<HTMLAttributes> | undefined | null
		wrapper?: Partial<Fieldset> | undefined | null
	} & Validatable
>

export type RangeInput = Override<
	GenericFormAttributes,
	{
		autocomplete?: "off" | "on" | undefined | null
		list?: Array<string> | undefined | null
		max?: number | string | undefined | null
		min?: number | string | undefined | null
		step?: number | string | undefined | null
		type?: "range"
		value?: string | number | undefined | null
	} & Validatable
>

export type DaySelect = Override<
	GenericFormAttributes,
	{
		autocomplete?: "off" | "on" | undefined | null
		days?: Array<number>
		calendar?: string | undefined | null
		field?: string | undefined | null
		includeNull?: boolean | undefined | null
		labelledBy?: string | undefined | null
		locales?: string | Array<string> | undefined | null
		readonly?: boolean | string | undefined | null
		required?: boolean | string | undefined | null
		selected?: string | undefined | null
		type?: never
		wrapper?: Partial<HTMLAttributes> | undefined | null
	} & Validatable
>

export type CallingCodeSelect = Override<
	GenericFormAttributes,
	{
		autocomplete?: "off" | "on" | undefined | null
		autocorrect?: never
		exclude?: Array<string | number> | undefined | null
		field?: string | undefined | null
		include?: Array<string | number> | undefined | null
		includeNull?: boolean | undefined | null
		labelledBy?: string | undefined | null
		readonly?: boolean | string | undefined | null
		required?: boolean | string | undefined | null
		options: Options
		selected?: string | number | Array<string | number> | undefined | null
		wrapper?: Partial<HTMLAttributes> | undefined | null
	} & Validatable
>

export type Select = Override<
	GenericFormAttributes,
	{
		autocomplete?: "off" | "on" | undefined | null
		autocorrect?: never
		field?: string | undefined | null
		includeNull?: boolean | undefined | null
		labelledBy?: string | undefined | null
		readonly?: boolean | string | undefined | null
		required?: boolean | string | undefined | null
		options: Options
		selected?: string | number | Array<string | number> | undefined | null
		wrapper?: Partial<HTMLAttributes> | undefined | null
	} & Validatable
>

export type Textarea = Override<
	GenericFormAttributes,
	{
		autocomplete?: "off" | "on" | undefined | null
		autocorrect?: never
		cols?: number | string | undefined | null
		field?: string | undefined | null
		labelledBy?: string | undefined | null
		maxlength?: number | string | undefined | null
		minlength?: number | string | undefined | null
		placeholder?: never
		readonly?: boolean | string | undefined | null
		required?: boolean | string | undefined | null
		rows?: number | string | undefined | null
		value?: string | Array<string> | number | undefined | null
		wrap?: string | undefined | null
		wrapper?: Partial<HTMLAttributes> | undefined | null
	} & Validatable
>

// Date and time
export type DateTimeInputTypeAttribute =
	| "date"
	| "datetime-local"
	| "month"
	| "time"
	| "week"

export type MonthFormat = "2-digit" | "short" | "numeric" | "long"

export type DateInput = Override<
	GenericFormAttributes,
	{
		autocomplete?: "off" | "on" | undefined | null
		field?: string | undefined | null
		includeNull?: boolean | undefined | null
		labelledBy?: string | undefined | null
		max?: string | undefined | null
		min?: string | undefined | null
		readonly?: boolean | string | undefined | null
		required?: boolean | string | undefined | null
		step?: number | undefined | null
		type?: never
		value?: string | undefined | null
		wrapper?: Partial<HTMLAttributes> | undefined | null
	} & Validatable
>

export type MonthInput = Override<
	GenericFormAttributes,
	{
		autocomplete?: "off" | "on" | undefined | null
		field?: string | undefined | null
		includeNull?: boolean | undefined | null
		labelledBy?: string | undefined | null
		max?: string | undefined | null
		min?: string | undefined | null
		readonly?: boolean | string | undefined | null
		required?: boolean | string | undefined | null
		step?: number | undefined | null
		type?: never
		value?: string | undefined | null
		wrapper?: Partial<HTMLAttributes> | undefined | null
	} & Validatable
>

export type MonthSelect = Override<
	GenericFormAttributes,
	{
		autocomplete?: "off" | "on" | undefined | null
		calendar?: string | undefined | null
		field?: string | undefined | null
		format?: MonthFormat | undefined | null
		includeNull?: boolean | undefined | null
		labelledBy?: string | undefined | null
		locales?: string | Array<string> | undefined | null
		months?: Array<number> | undefined | null
		readonly?: boolean | string | undefined | null
		required?: boolean | string | undefined | null
		selected?: string | undefined | null
		type?: never
		wrapper?: Partial<HTMLAttributes> | undefined | null
	} & Validatable
>

export type NumberSubfield = Override<
	GenericFormAttributes,
	{
		field?: string | undefined | null
		label?: string | undefined | null
		labelledBy?: string | undefined | null
		outer?: Partial<Label> | undefined | null
		parent?: string | undefined | null
		size?: number | string | undefined | null
		step?: number | string | undefined | null
		tag?: Partial<HTMLAttributes> | undefined | null
		value?: number | string | undefined | null
	} & Validatable
>

export type TimeInput = Override<
	GenericFormAttributes,
	{
		autocomplete?: "off" | "on" | undefined | null
		datalist?: HTMLAttributes | undefined | null
		field?: string | undefined | null
		includeNull?: boolean | undefined | null
		labelledBy?: string | undefined | null
		list?: Options | undefined | null
		max?: string | undefined | null
		min?: string | undefined | null
		readonly?: boolean | string | undefined | null
		required?: boolean | string | undefined | null
		step?: number | undefined | null
		type?: never
		value?: string | undefined | null
		wrapper?: Partial<HTMLAttributes> | undefined | null
	} & Validatable
>

export type TimeZoneSelect = Override<
	GenericFormAttributes,
	{
		autocomplete?: "off" | "on" | undefined | null
		countries?: Array<string> | undefined | null
		datalist?: HTMLAttributes | undefined | null
		exclude?: Array<string | number> | undefined | null
		field?: string | undefined | null
		include?: Array<string | number> | undefined | null
		includeNull?: boolean | undefined | null
		labelledBy?: string | undefined | null
		readonly?: boolean | string | undefined | null
		required?: boolean | string | undefined | null
		selected?: string | undefined | null
		type?: never
		useList?: boolean | undefined | null
		wrapper?: HTMLAttributes | undefined | null
	} & Validatable
>

export type WeekSelect = Override<
	GenericFormAttributes,
	{
		autocomplete?: "off" | "on" | undefined | null
		field?: string | undefined | null
		includeNull?: boolean | undefined | null
		labelledBy?: string | undefined | null
		max?: string | undefined | null
		min?: string | undefined | null
		readonly?: boolean | string | undefined | null
		required?: boolean | string | undefined | null
		step?: number | undefined | null
		selected?: number | string | undefined | null
		type?: never
		value?: string | undefined | null
		weeks?: Array<number> | undefined | null
		wrapper?: HTMLAttributes | undefined | null
	} & Validatable
>

export type YearInput = Override<
	GenericFormAttributes,
	{
		autocomplete?: "off" | "on" | undefined | null
		autocorrect?: never
		datalist?: HTMLAttributes | undefined | null
		field?: string | undefined | null
		labelledBy?: string | undefined | null
		list?: Options | undefined | null
		maxlength?: number | string | undefined | null
		minlength?: number | string | undefined | null
		pattern?: string | undefined | null
		placeholder?: never
		readonly?: boolean | string | undefined | null
		required?: boolean | string | undefined | null
		size?: number | string | undefined | null
		type?: never
		value?: string | undefined | null
		wrapper?: HTMLAttributes | undefined | null
		years?: Options | undefined | null
	} & Validatable
>

// Textual inputs
export type PasswordInput = Override<
	GenericFormAttributes,
	{
		allowUnmasked?: boolean | undefined | null
		autocomplete?:
			| "off"
			| "on"
			| "current-password"
			| "new-password"
			| undefined
			| null
		autocorrect?: never
		dirname?: string | undefined | null
		field?: string | undefined | null
		labelledBy?: string | undefined | null
		maxlength?: number | string | undefined | null
		minlength?: number | string | undefined | null
		pattern?: string | undefined | null
		placeholder?: never
		readonly?: boolean | string | undefined | null
		required?: boolean | string | undefined | null
		size?: number | string | undefined | null
		spellcheck?: never
		type?: never
		value?: string | undefined | null
		wrapper?: Partial<HTMLAttributes> | undefined | null
	} & Validatable
>

export type TextInput = Override<
	GenericFormAttributes,
	{
		autocomplete?: "off" | "on" | undefined | null
		autocorrect?: never | undefined | null
		datalist?: HTMLAttributes | undefined | null
		field?: string | undefined | null
		labelledBy?: string | undefined | null
		list?: Options | undefined | null
		maxlength?: number | string | undefined | null
		minlength?: number | string | undefined | null
		pattern?: string | undefined | null
		placeholder?: never | undefined | null
		readonly?: boolean | string | undefined | null
		required?: boolean | string | undefined | null
		size?: number | string | undefined | null
		type?: never | undefined | null
		value?: string | Array<string> | number | undefined | null
		wrapper?: Partial<HTMLAttributes> | undefined | null
	} & Validatable
>

// Numeric inputs
export type NumberInput = Override<
	GenericFormAttributes,
	{
		autocomplete?: "off" | "on" | undefined | null
		autocorrect?: never
		datalist?: HTMLAttributes | undefined | null
		field?: string | undefined | null
		isInteger?: boolean | undefined | null
		labelledBy?: string | undefined | null
		list?: Options | undefined | null
		max?: number | string | undefined | null
		min?: number | string | undefined | null
		placeholder?: never
		readonly?: boolean | string | undefined | null
		required?: boolean | string | undefined | null
		step?: number | string | undefined | null
		type?: never
		value?: number | string | undefined | null
		wrapper?: Partial<HTMLAttributes> | undefined | null
	} & Validatable
>

// Other
export type Help = Override<
	HTMLAttributes,
	{
		dataset?: Dataset
		for?: string | undefined | null
		form: string
		help?: string | undefined | null
		name?: string | undefined | null
	}
>

export type Label = Override<
	HTMLAttributes,
	{
		dataset?: Dataset
		for?: string | undefined | null
		form: string
		help?: string | undefined | null
		helpAttributes?: Help | undefined | null
		helpId?: string | undefined | null
		id: string
		label?: string | undefined | null
		name?: string | undefined | null
		required?: boolean | undefined | null
	}
>

// Fields

export type BooleanField = Override<
	GenericFormAttributes,
	{
		autocorrect?: never
		checked?: boolean | string | undefined | null
		field?: string | undefined | null
		help?: Partial<Help> | undefined | null
		label?: string | undefined | null
		legend?: Partial<Label> | undefined | null
		message?: string | undefined | null
		outer?: Partial<Fieldset> | undefined | null
		readonly?: boolean | string | undefined | null
		required?: boolean | string | undefined | null
		tag?: Partial<HTMLAttributes> | undefined | null
		type?: never
		value: string | number
		wrapper?: Partial<HTMLAttributes> | undefined | null
	} & Validatable
>

export type DurationField = Override<
	GenericFormAttributes,
	{
		field?: string | undefined | null
		form: string
		group?: Partial<HTMLAttributes> | undefined | null
		help?: Partial<Help> | undefined | null
		includeDays?: boolean | undefined | null
		includeHours?: boolean | undefined | null
		includeMicroseconds?: boolean | undefined | null
		includeMilliseconds?: boolean | undefined | null
		includeMinutes?: boolean | undefined | null
		includeMonths?: boolean | undefined | null
		includeNanoseconds?: boolean | undefined | null
		includeSeconds?: boolean | undefined | null
		includeYears?: boolean | undefined | null
		label?: string | undefined | null
		legend?: Partial<Label> | undefined | null
		message?: string | undefined | null
		name: string
		outer?: Partial<Fieldset> | undefined | null
		required?: boolean | undefined | null
		tag?: Partial<HTMLAttributes> | undefined | null
		value?: string | undefined | null
		wrapper?: Partial<HTMLAttributes> | undefined | null
	} & Validatable
>

export type EmailField = Override<
	GenericFormAttributes,
	{
		autocomplete?: "off" | "on" | undefined | null
		autocorrect?: never
		datalist?: HTMLAttributes | undefined | null
		field?: string | undefined | null
		help?: Partial<Help> | undefined | null
		label?: string | undefined | null
		legend?: Partial<Label> | undefined | null
		list?: Options | undefined | null
		maxlength?: number | string | undefined | null
		message?: string | undefined | null
		minlength?: number | string | undefined | null
		outer?: Partial<Fieldset> | undefined | null
		pattern?: string | undefined | null
		placeholder?: never
		readonly?: boolean | string | undefined | null
		required?: boolean | string | undefined | null
		size?: number | string | undefined | null
		tag?: Partial<HTMLAttributes> | undefined | null
		type?: never
		value?: string | undefined | null
		wrapper?: Partial<HTMLAttributes> | undefined | null
	} & Validatable
>

export type Honeypot =
	& Override<HTMLAttributes, {
		cLabel?: string | undefined | null
		cPlaceholder?: string | undefined | null
		confirmation?: string | undefined | null
		field?: string | undefined | null
		form: string
		password?: string | undefined | null
		pwLabel?: string | undefined | null
		pwPlaceholder?: string | undefined | null
		wrapper?: Partial<HTMLAttributes> | undefined | null
	}>
	& Validatable

export type InstantField = Override<
	GenericFormAttributes,
	{
		autocomplete?: "off" | "on" | undefined | null
		autocorrect?: never
		countries?: Array<string> | undefined | null
		date?: string | undefined | null
		dateAttrs?: Partial<DateInput> | undefined | null
		field?: string | undefined | null
		fractionalSeconds?: string | undefined | null
		fractionalSecondsAttrs?: Partial<HTMLAttributes> | undefined | null
		group?: Partial<HTMLAttributes> | undefined | null
		help?: Partial<HTMLAttributes> | undefined | null
		includeNull?: boolean | undefined | null
		label?: string | undefined | null
		legend?: Partial<Label> | undefined | null
		maxDate?: string | undefined | null
		maxTime?: string | undefined | null
		message?: string | undefined | null
		minDate?: string | undefined | null
		minTime?: string | undefined | null
		outer?: Partial<Fieldset> | undefined | null
		readonly?: boolean | string | undefined | null
		required?: boolean | string | undefined | null
		stepDate?: number | undefined | null
		stepTime?: number | undefined | null
		tag?: Partial<HTMLAttributes> | undefined | null
		time?: string | undefined | null
		timeAttrs?: Partial<TimeInput> | undefined | null
		timeZone?: string | undefined | null
		timeZoneAttrs?: Partial<TimeZoneSelect> | undefined | null
		type?: never
		useList?: boolean | undefined | null
	} & Validatable
>

export type FieldWrapper = Override<
	HTMLAttributes,
	{
		field?: string | undefined | null
		group?: Partial<HTMLAttributes> | undefined | null
		help?: Partial<Help> | undefined | null
		label?: string | undefined | null
		legend?: Partial<Label> | undefined | null
		message?: string | undefined | null
		outer?: Partial<Fieldset> | undefined | null
		required?: boolean | string | undefined | null
		tag?: Partial<HTMLAttributes> | undefined | null
	} & Validatable
>

export type FieldsetWrapper = Override<
	GenericFormAttributes,
	{
		field?: string | undefined | null
		group?: Partial<HTMLAttributes> | undefined | null
		help?: Partial<Help> | undefined | null
		hideClass?: string | undefined | null
		label?: string | undefined | null
		legend?: Partial<Label> | undefined | null
		message?: string | undefined | null
		name?: string | undefined | null
		outer?: Partial<Fieldset> | undefined | null
		tag?: Partial<HTMLAttributes> | undefined | null
	} & Validatable
>

export type MemberField = Override<
	GenericFormAttributes,
	{
		elementAttributes?: RadioGroup | Select
		field?: string | undefined | null
		form: string
		group?: Partial<HTMLAttributes> | undefined | null
		help?: Partial<HTMLAttributes> | undefined | null
		helpAttributes?: Partial<Help> | undefined
		id?: string | undefined | null
		includeNull?: boolean | undefined | null
		label?: string
		legend?: Partial<Label> | undefined | null
		message?: string | undefined | null
		name: string
		options: Options
		outer?: Partial<Fieldset> | undefined | null
		required?: boolean
		selected?: string | number | undefined | null
		tag?: Partial<HTMLAttributes> | undefined | null
		wrapper?: Partial<HTMLAttributes> | undefined | null
	} & Validatable
>

// Numeric inputs
export type NumberField = Override<
	GenericFormAttributes,
	{
		autocomplete?: "off" | "on" | undefined | null
		autocorrect?: never
		datalist?: HTMLAttributes | undefined | null
		field?: string | undefined | null
		help?: Partial<Help> | undefined | null
		list?: Options | undefined | null
		max?: number | string | undefined | null
		min?: number | string | undefined | null
		placeholder?: never
		readonly?: boolean | string | undefined | null
		required?: boolean | string | undefined | null
		step?: number | string | undefined | null
		type?: never
		value?: number | string | undefined | null
		wrapper?: Partial<HTMLAttributes> | undefined | null
	} & Validatable
>

export type PasswordField = Override<
	HTMLAttributes,
	{
		allowAutocomplete?: boolean | undefined | null
		allowUnmasked?: boolean | undefined | null
		dataset?: Dataset
		field?: string | undefined | null
		form: string
		help?: Partial<Help> | undefined | null
		isNewPassword?: boolean | undefined | null
		label?: string | undefined | null
		legend?: Partial<Label> | undefined | null
		message?: string | undefined | null
		name: string
		outer?: Partial<Fieldset> | undefined | null
		required?: boolean | undefined | null
		tag?: Partial<HTMLAttributes> | undefined | null
		value?: string | undefined | null
		wrapper?: Partial<HTMLAttributes> | undefined | null
	} & Validatable
>

export type PlainDateField = Override<
	GenericFormAttributes,
	{
		autocomplete?: "off" | "on" | undefined | null
		datalist?: HTMLAttributes | undefined | null
		field?: string | undefined | null
		help?: Partial<HTMLAttributes> | undefined | null
		label?: string | undefined | null
		legend?: Partial<Label> | undefined | null
		list?: Options | undefined | null
		message?: string | undefined | null
		max?: string | undefined | null
		min?: string | undefined | null
		outer?: Partial<HTMLAttributes> | undefined | null
		readonly?: boolean | string | undefined | null
		required?: boolean | string | undefined | null
		step?: number | undefined | null
		tag?: Partial<HTMLAttributes> | undefined | null
		type?: never
		value?: string | undefined | null
		wrapper?: Partial<HTMLAttributes> | undefined | null
	} & Validatable
>

export type PlainDateTimeField = Override<
	GenericFormAttributes,
	{
		date?: string | undefined | null
		dateAttrs?: Partial<DateInput> | undefined | null
		field?: string | undefined | null
		group?: Partial<HTMLAttributes> | undefined | null
		help?: Partial<HTMLAttributes> | undefined | null
		label?: string | undefined | null
		legend?: Partial<Label> | undefined | null
		maxDate?: string | undefined | null
		maxTime?: string | undefined | null
		message?: string | undefined | null
		minDate?: string | undefined | null
		minTime?: string | undefined | null
		outer?: Partial<Fieldset> | undefined | null
		readonly?: boolean | string | undefined | null
		required?: boolean | string | undefined | null
		stepDate?: number | undefined | null
		stepTime?: number | undefined | null
		tag?: Partial<HTMLAttributes> | undefined | null
		time?: string | undefined | null
		timeAttrs?: Partial<TimeInput> | undefined | null
		type?: never
		value?: string | undefined | null
	} & Validatable
>

export type PlainMonthDayField = Override<
	GenericFormAttributes,
	{
		days?: Array<number> | undefined | null
		dayAttrs?: Partial<DateInput> | undefined | null
		calendar?: string | undefined | null
		field?: string | undefined | null
		format?: MonthFormat | undefined | null
		group?: Partial<HTMLAttributes> | undefined | null
		help?: Partial<HTMLAttributes> | undefined | null
		label?: string | undefined | null
		legend?: Partial<Label> | undefined | null
		locales?: string | Array<string> | undefined | null
		message?: string | undefined | null
		monthAttrs?: Partial<DateInput> | undefined | null
		months?: Array<number> | undefined | null
		outer?: Partial<Fieldset> | undefined | null
		readonly?: boolean | string | undefined | null
		required?: boolean | string | undefined | null
		tag?: Partial<HTMLAttributes> | undefined | null
		type?: never
		value?: string | Temporal.PlainMonthDayLike
	} & Validatable
>

export type PlainTimeField = Override<
	GenericFormAttributes,
	{
		autocomplete?: "off" | "on" | undefined | null
		datalist?: HTMLAttributes | undefined | null
		field?: string | undefined | null
		help?: Partial<HTMLAttributes> | undefined | null
		label?: string | undefined | null
		legend?: Partial<Label> | undefined | null
		list?: Options | undefined | null
		message?: string | undefined | null
		max?: string | undefined | null
		min?: string | undefined | null
		outer?: Partial<HTMLAttributes> | undefined | null
		readonly?: boolean | string | undefined | null
		required?: boolean | string | undefined | null
		step?: number | undefined | null
		tag?: Partial<HTMLAttributes> | undefined | null
		type?: never
		value?: string | undefined | null
		wrapper?: Partial<HTMLAttributes> | undefined | null
	} & Validatable
>

export type PlainYearMonthField = Override<
	GenericFormAttributes,
	{
		calendar?: string | undefined | null
		era?: string | undefined | null
		eraYear?: string | undefined | null
		field?: string | undefined | null
		format?: MonthFormat | undefined | null
		group?: Partial<HTMLAttributes> | undefined | null
		help?: Partial<HTMLAttributes> | undefined | null
		includeNull?: boolean | string | undefined | null
		label?: string | undefined | null
		legend?: Partial<Label> | undefined | null
		message?: string | undefined | null
		month?: number | string | undefined | null
		monthAttrs?: Partial<DateInput> | undefined | null
		monthCode?: string | undefined | null
		months?: Array<number | string> | undefined | null
		outer?: Partial<Fieldset> | undefined | null
		plainYearMonth?: string | Temporal.PlainYearMonthLike | undefined | null
		readonly?: boolean | string | undefined | null
		required?: boolean | string | undefined | null
		tag?: Partial<HTMLAttributes> | undefined | null
		type?: never
		year?: string | undefined | null
		yearAttrs?: Partial<TimeInput> | undefined | null
		years?: Array<number | string> | undefined | null
	} & Validatable
>

export type YearWeekField = Override<
	GenericFormAttributes,
	{
		field?: string | undefined | null
		group?: Partial<HTMLAttributes> | undefined | null
		help?: Partial<HTMLAttributes> | undefined | null
		includeNull?: boolean | string | undefined | null
		label?: string | undefined | null
		legend?: Partial<Label> | undefined | null
		message?: string | undefined | null
		outer?: Partial<Fieldset> | undefined | null
		readonly?: boolean | string | undefined | null
		required?: boolean | string | undefined | null
		tag?: Partial<HTMLAttributes> | undefined | null
		type?: never
		value?: string | undefined | null
		week?: number | string | undefined | null
		weekAttrs?: Partial<DateInput> | undefined | null
		weeks?: Array<number | string> | undefined | null
		year?: string | undefined | null
		yearAttrs?: Partial<TimeInput> | undefined | null
		years?: Array<number | string> | undefined | null
	} & Validatable
>

export type ZonedDateTimeField = Override<
	GenericFormAttributes,
	{
		autocomplete?: "off" | "on" | undefined | null
		autocorrect?: never
		countries?: Array<string> | undefined | null
		date?: string | undefined | null
		dateAttrs?: Partial<HTMLAttributes> | undefined | null
		field?: string | undefined | null
		group?: Partial<HTMLAttributes> | undefined | null
		help?: Partial<HTMLAttributes> | undefined | null
		includeNull?: boolean | undefined | null
		label?: string | undefined | null
		legend?: Partial<Label> | undefined | null
		maxDate?: string | undefined | null
		maxTime?: string | undefined | null
		message?: string | undefined | null
		minDate?: string | undefined | null
		minTime?: string | undefined | null
		outer?: Partial<Fieldset> | undefined | null
		readonly?: boolean | string | undefined | null
		required?: boolean | string | undefined | null
		stepDate?: number | undefined | null
		stepTime?: number | undefined | null
		tag?: Partial<HTMLAttributes> | undefined | null
		time?: string | undefined | null
		timeAttrs?: Partial<HTMLAttributes> | undefined | null
		timeZone?: string | undefined | null
		timeZoneAttrs?: Partial<HTMLAttributes> | undefined | null
		type?: never
		useList?: boolean | undefined | null
	} & Validatable
>

export type StringField = Override<
	GenericFormAttributes,
	{
		autocomplete?: "off" | "on" | undefined | null
		autocorrect?: never
		cols?: number | string | undefined | null
		datalist?: HTMLAttributes | undefined | null
		dirname?: string | undefined | null
		field?: string | undefined | null
		help?: Partial<Help> | undefined | null
		list?: Options | undefined | null
		label?: string | undefined | null
		legend?: Partial<Label> | undefined | null
		maxlength?: number | string | undefined | null
		message?: string | undefined | null
		minlength?: number | string | undefined | null
		outer?: Partial<Fieldset> | undefined | null
		pattern?: string | undefined | null
		placeholder?: never
		readonly?: boolean | string | undefined | null
		required?: boolean | string | undefined | null
		rows?: number | string | undefined | null
		size?: number | string | undefined | null
		tag?: Partial<HTMLAttributes> | undefined | null
		type?: never
		value?: string | Array<string> | number | undefined | null
		wrap?: string | undefined | null
		wrapper?: Partial<HTMLAttributes> | undefined | null
	} & Validatable
>

export type TimeZoneField = Override<
	GenericFormAttributes,
	{
		autocomplete?: "off" | "on" | undefined | null
		autocorrect?: never
		countries?: Array<string> | undefined | null
		datalist?: HTMLAttributes | undefined | null
		field?: string | undefined | null
		help?: Partial<HTMLAttributes> | undefined | null
		includeNull?: boolean | undefined | null
		label?: string | undefined | null
		legend?: Partial<Label> | undefined | null
		message?: string | undefined | null
		outer?: Partial<Fieldset> | undefined | null
		readonly?: boolean | string | undefined | null
		required?: boolean | string | undefined | null
		tag?: Partial<HTMLAttributes> | undefined | null
		type?: never
		useList?: boolean | undefined | null
		value?: string | undefined | null
		wrapper?: Partial<HTMLAttributes> | undefined | null
	} & Validatable
>

export type SubsetField = Override<
	GenericFormAttributes,
	{
		field?: string | undefined | null
		form: string
		group?: Partial<HTMLAttributes> | undefined | null
		help?: Partial<Help> | undefined | null
		label?: string | undefined | null
		legend?: Partial<Label> | undefined | null
		message?: string | undefined | null
		name: string
		options: Options
		readonly?: boolean | string | undefined | null
		required?: boolean | string | undefined | null
		selected?: string | number | Array<string | number> | undefined | null
		tag?: Partial<HTMLAttributes> | undefined | null
		wrapper?: Partial<Fieldset> | undefined | null
	} & Validatable
>

export type TelField = Override<
	GenericFormAttributes,
	{
		autocomplete?: "off" | "on" | undefined | null
		autocorrect?: never
		code?: Partial<CallingCodeSelect> | undefined | null
		codeWrapper?: Partial<HTMLAttributes> | undefined | null
		datalist?: HTMLAttributes | undefined | null
		exclude?: Array<string | number> | undefined | null
		field?: string | undefined | null
		group?: Partial<HTMLAttributes> | undefined | null
		help?: Partial<Help> | undefined | null
		include?: Array<string | number> | undefined | null
		includeCode?: boolean | undefined | null
		includeNull?: boolean | undefined | null
		label?: string | undefined | null
		legend?: Partial<Label> | undefined | null
		line?: Partial<TextInput> | undefined | null
		lineWrapper?: Partial<HTMLAttributes> | undefined | null
		list?: Options | undefined | null
		maxlength?: number | string | undefined | null
		message?: string | undefined | null
		minlength?: number | string | undefined | null
		outer?: Partial<Fieldset> | undefined | null
		pattern?: string | undefined | null
		placeholder?: never
		readonly?: boolean | string | undefined | null
		required?: boolean | string | undefined | null
		size?: number | string | undefined | null
		tag?: Partial<HTMLAttributes> | undefined | null
		type?: never
		value?: string | undefined | null
	} & Validatable
>

export type UrlField = Override<
	GenericFormAttributes,
	{
		autocomplete?: "off" | "on" | undefined | null
		autocorrect?: never
		datalist?: HTMLAttributes | undefined | null
		field?: string | undefined | null
		help?: Partial<Help> | undefined | null
		label?: string | undefined | null
		legend?: Partial<Label> | undefined | null
		list?: Options | undefined | null
		maxlength?: number | string | undefined | null
		message?: string | undefined | null
		minlength?: number | string | undefined | null
		outer?: Partial<Fieldset> | undefined | null
		pattern?: string | undefined | null
		placeholder?: never
		readonly?: boolean | string | undefined | null
		required?: boolean | string | undefined | null
		size?: number | string | undefined | null
		tag?: Partial<HTMLAttributes> | undefined | null
		type?: never
		value?: string | undefined | null
		wrapper?: Partial<HTMLAttributes> | undefined | null
	} & Validatable
>
