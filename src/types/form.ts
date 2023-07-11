import type {
	AnchorTarget,
	BaseAttributes,
	Dataset,
	HTMLAttributes,
	Override,
} from "./html"

export type GenericFormAttributes = Override<BaseAttributes, {
	class?: never
	dataset?: Dataset
	disabled?: boolean | string | undefined | null
	form: string
	name: string
	placeholder?: never
	readonly?: boolean | string | undefined | null
	required?: boolean | string | undefined | null
}>

// Use instead of input[type=button|reset|submit]
export type Button = Override<BaseAttributes, {
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
}>

export type Form = Override<GenericFormAttributes, {
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
	novalidate?: boolean | string | undefined | null
	target?: AnchorTarget | undefined | null
}>

export type Fieldset = Override<BaseAttributes, {
	disabled?: boolean | string | undefined | null
	form: string
}>

// Non-textual inputs
export type CheckboxInput = Override<GenericFormAttributes, {
	checked?: boolean | string | undefined | null
	field?: string | undefined | null
	groupLabelId?: string | undefined | null
	label?: string | undefined | null
	type?: never
	value: string | number
	wrapper?: BaseAttributes | undefined | null
}>

export type CheckboxGroupOption = {
	checked?: boolean | string | undefined | null
	"class:list"?:
		| Record<string, boolean>
		| Record<unknown, unknown>
		| Iterable<string>
		| Iterable<unknown>
		| string
	form?: string | undefined | null
	groupLabelId?: string | undefined | null
	id?: string | undefined | null
	label: string
	name?: string | undefined | null
	readonly?: boolean | string | undefined | null
	required?: boolean | string | undefined | null
	type?: never
	value: string | number
	wrapper?: Partial<Label>
}

export type CheckboxGroup = Override<HTMLAttributes, {
	"aria-live"?: "off" | "assertive" | "polite" | undefined | null
	dataset?: Dataset
	form: string
	group?: Partial<HTMLAttributes> | undefined | null
	help?: Partial<Help> | undefined | null
	label?: string | undefined | null
	legend?: Partial<Label> | undefined | null
	message?: string | undefined | null
	name: string
	options: Array<CheckboxGroupOption>
	readonly?: boolean | string | undefined | null
	required?: boolean | string | undefined | null
	selected?: Array<string | number> | undefined | null
	wrapper?: Partial<Fieldset> | undefined | null
}>

export type DatalistOption = {
	value: string
}

export type ColorInput = Override<GenericFormAttributes, {
	autocomplete?: "off" | "on" | undefined | null
	datalist?: BaseAttributes | undefined | null
	field?: string | undefined | null
	labelledBy?: string | undefined | null
	list?: Array<DatalistOption> | undefined | null
	type?: never
	value?: string | undefined | null
	wrapper?: BaseAttributes | undefined | null
}>

export type FileInput = Override<GenericFormAttributes, {
	accept?: string | undefined | null
	capture?: "environment" | "user" | undefined | null
	field?: string | undefined | null
	labelledBy?: string | undefined | null
	multiple?: boolean | string | undefined | null
	type?: never
	value?: string | string[] | undefined | null
	wrapper?: BaseAttributes | undefined | null
}>

export type HiddenInput = Override<GenericFormAttributes, {
	autocomplete?: "off" | "on" | undefined | null
	field?: string | undefined | null
	name: "_charset_" | string
	readonly?: never
	required?: never
	type?: never
	value?: string | number | undefined | null
}>

export type ImageInput = Override<GenericFormAttributes, {
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
}>

export type RadioInput = Override<GenericFormAttributes, {
	checked?: boolean | string | undefined | null
	field?: string | undefined | null
	groupLabelId?: string | undefined | null
	label?: string | undefined | null
	type?: never
	value: string | number
	wrapper?: BaseAttributes | undefined | null
}>

export type RadioGroupOption = {
	"class:list"?:
		| Record<string, boolean>
		| Record<unknown, unknown>
		| Iterable<string>
		| Iterable<unknown>
		| string
	dataset?: Dataset
	id?: string | undefined | null
	label?: string | undefined | null
	value?: string | number
}

export type RadioGroup = Override<HTMLAttributes, {
	"aria-live"?: "off" | "assertive" | "polite" | undefined | null
	dataset?: Dataset
	form: string
	group?: Partial<HTMLAttributes> | undefined | null
	help?: Partial<Help> | undefined | null
	includeNull?: boolean | undefined | null
	label?: string | undefined | null
	legend?: Partial<Label> | undefined | null
	message?: string | undefined | null
	name: string
	options: Array<CheckboxGroupOption>
	readonly?: boolean | string | undefined | null
	required?: boolean | string | undefined | null
	selected?: Array<string | number> | undefined | null
	wrapper?: Partial<Fieldset> | undefined | null
}>

export type RangeInput = Override<GenericFormAttributes, {
	autocomplete?: "off" | "on" | undefined | null
	list?: Array<string> | undefined | null
	max?: number | string | undefined | null
	min?: number | string | undefined | null
	step?: number | string | undefined | null
	type?: "range"
	value?: string | number | undefined | null
}>

export type SelectOption = {
	label?: string | undefined | null
	value: string | number
}

export type Select = Override<GenericFormAttributes, {
	autocomplete?: "off" | "on" | undefined | null
	autocorrect?: never
	includeNull?: boolean | undefined | null
	labelledBy?: string | undefined | null
	readonly?: boolean | string | undefined | null
	required?: boolean | string | undefined | null
	options: Array<SelectOption>
	selected?: string | number | undefined | null
	wrapper?: BaseAttributes | undefined | null
}>

export type Textarea = Override<GenericFormAttributes, {
	autocomplete?: "off" | "on" | undefined | null
	autocorrect?: never
	cols?: number | string | undefined | null
	labelledBy?: string | undefined | null
	maxlength?: number | string | undefined | null
	minlength?: number | string | undefined | null
	placeholder?: never
	readonly?: boolean | string | undefined | null
	required?: boolean | string | undefined | null
	rows?: number | string | undefined | null
	value?: string | string[] | number | undefined | null
	wrap?: string | undefined | null
}>

// Date and time
type DateTimeInputTypeAttribute =
	| "date"
	| "datetime-local"
	| "month"
	| "time"
	| "week"

export type MonthFormat = "2-digit" | "short" | "numeric" | "long"

export type DateInput = Override<GenericFormAttributes, {
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
	wrapper?: BaseAttributes | undefined | null
}>

export type MonthInput = Override<GenericFormAttributes, {
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
	wrapper?: BaseAttributes | undefined | null
}>

export type MonthSelect = Override<GenericFormAttributes, {
	autocomplete?: "off" | "on" | undefined | null
	calendar?: string | undefined | null
	field?: string | undefined | null
	format?: MonthFormat | undefined | null
	includeNull?: boolean | undefined | null
	labelledBy?: string | undefined | null
	locales?: Array<string> | undefined | null
	months?: Array<number>
	readonly?: boolean | string | undefined | null
	required?: boolean | string | undefined | null
	selected?: string | undefined | null
	type?: never
	wrapper?: BaseAttributes | undefined | null
}>

export type TimeInput = Override<GenericFormAttributes, {
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
	wrapper?: BaseAttributes | undefined | null
}>

export type TimeZoneSelect = Override<GenericFormAttributes, {
	autocomplete?: "off" | "on" | undefined | null
	countries?: Array<string> | undefined | null
	field?: string | undefined | null
	includeNull?: boolean | undefined | null
	labelledBy?: string | undefined | null
	readonly?: boolean | string | undefined | null
	required?: boolean | string | undefined | null
	selected?: string | undefined | null
	type?: never
	useList?: boolean | undefined | null
	wrapper?: BaseAttributes | undefined | null
}>

export type WeekSelect = Override<GenericFormAttributes, {
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
	wrapper?: BaseAttributes | undefined | null
}>

export type YearInput = Override<GenericFormAttributes, {
	autocomplete?: "off" | "on" | undefined | null
	autocorrect?: never
	datalist?: BaseAttributes | undefined | null
	field?: string | undefined | null
	labelledBy?: string | undefined | null
	maxlength?: number | string | undefined | null
	minlength?: number | string | undefined | null
	pattern?: string | undefined | null
	placeholder?: never
	readonly?: boolean | string | undefined | null
	required?: boolean | string | undefined | null
	size?: number | string | undefined | null
	type?: never
	value?: string | undefined | null
	wrapper?: BaseAttributes | undefined | null
	years?: Array<DatalistOption> | undefined | null
}>

// Textual inputs
export type PasswordInput = Override<GenericFormAttributes, {
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
	wrapper?: BaseAttributes | undefined | null
}>

export type TextInput = Override<GenericFormAttributes, {
	autocomplete?: "off" | "on" | undefined | null
	autocorrect?: never
	datalist?: BaseAttributes | undefined | null
	field?: string | undefined | null
	labelledBy?: string | undefined | null
	list?: Array<DatalistOption> | undefined | null
	maxlength?: number | string | undefined | null
	minlength?: number | string | undefined | null
	pattern?: string | undefined | null
	placeholder?: never
	readonly?: boolean | string | undefined | null
	required?: boolean | string | undefined | null
	size?: number | string | undefined | null
	type?: never
	value?: string | undefined | null
	wrapper?: BaseAttributes | undefined | null
}>

// Numeric inputs
export type NumberInput = Override<GenericFormAttributes, {
	autocomplete?: "off" | "on" | undefined | null
	autocorrect?: never
	datalist?: BaseAttributes | undefined | null
	field?: string | undefined | null
	labelledBy?: string | undefined | null
	list?: Array<DatalistOption> | undefined | null
	max?: number | string | undefined | null
	min?: number | string | undefined | null
	placeholder?: never
	readonly?: boolean | string | undefined | null
	required?: boolean | string | undefined | null
	step?: number | string | undefined | null
	type?: never
	value?: number | string | undefined | null
	wrapper?: BaseAttributes | undefined | null
}>

// Other
export type Help = Override<HTMLAttributes, {
	dataset?: Dataset
	for?: string | undefined | null
	form: string
	help?: string | undefined | null
	name?: string | undefined | null
}>

export type Label = Override<HTMLAttributes, {
	dataset?: Dataset
	for?: string | undefined | null
	form: string
	help?: string | undefined | null
	helpAttributes?: Partial<Help>
	helpId?: string | undefined | null
	id: string
	label?: string | undefined | null
	name?: string | undefined | null
	required?: boolean | undefined | null
}>

// Fields

export type DurationField = Override<GenericFormAttributes, {
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
}>

export type EmailField = Override<GenericFormAttributes, {
	autocomplete?: "off" | "on" | undefined | null
	autocorrect?: never
	datalist?: BaseAttributes | undefined | null
	field?: string | undefined | null
	help?: Partial<Help> | undefined | null
	label?: string | undefined | null
	legend?: Partial<Label> | undefined | null
	list?: Array<DatalistOption> | undefined | null
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
	wrapper?: BaseAttributes | undefined | null
}>

export type InstantField = Override<GenericFormAttributes, {
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
	type?: never
	useList?: boolean | undefined | null
}>

// Old TODO: remove
export type Field = unknown

export type MemberField = Override<HTMLAttributes, {
	dataset?: Dataset
	elementAttributes?: RadioGroup | Select
	form: string
	help?: string | undefined | null
	helpAttributes?: Partial<Help> | undefined
	id?: string | undefined | null
	includeNull?: boolean | undefined | null
	label?: string
	labelAttributes?: Partial<Label>
	name: string
	options: Array<RadioGroupOption>
	required?: boolean
	selected?: string | number | undefined | null
}>

// Numeric inputs
export type NumberField = Override<GenericFormAttributes, {
	autocomplete?: "off" | "on" | undefined | null
	autocorrect?: never
	datalist?: BaseAttributes | undefined | null
	field?: string | undefined | null
	help?: Partial<Help> | undefined | null
	list?: Array<DatalistOption> | undefined | null
	max?: number | string | undefined | null
	min?: number | string | undefined | null
	placeholder?: never
	readonly?: boolean | string | undefined | null
	required?: boolean | string | undefined | null
	step?: number | string | undefined | null
	type?: never
	value?: number | string | undefined | null
	wrapper?: BaseAttributes | undefined | null
}>

export type PasswordField = Override<HTMLAttributes, {
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
}>

export type PlainDateField = Override<GenericFormAttributes, {
	autocomplete?: "off" | "on" | undefined | null
	datalist?: BaseAttributes | undefined | null
	field?: string | undefined | null
	help?: Partial<HTMLAttributes> | undefined | null
	label?: string | undefined | null
	legend?: Partial<Label> | undefined | null
	list?: Array<DatalistOption> | undefined | null
	message?: string | undefined | null
	max?: string | undefined | null
	min?: string | undefined | null
	outer?: Partial<HTMLAttributes> | undefined | null
	readonly?: boolean | string | undefined | null
	required?: boolean | string | undefined | null
	step?: number | undefined | null
	type?: never
	value?: string | undefined | null
	wrapper?: BaseAttributes | undefined | null
}>

export type PlainDateTimeField = Override<GenericFormAttributes, {
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
}>

export type PlainTimeField = Override<GenericFormAttributes, {
	autocomplete?: "off" | "on" | undefined | null
	datalist?: BaseAttributes | undefined | null
	field?: string | undefined | null
	help?: Partial<HTMLAttributes> | undefined | null
	label?: string | undefined | null
	legend?: Partial<Label> | undefined | null
	list?: Array<DatalistOption> | undefined | null
	message?: string | undefined | null
	max?: string | undefined | null
	min?: string | undefined | null
	outer?: Partial<HTMLAttributes> | undefined | null
	readonly?: boolean | string | undefined | null
	required?: boolean | string | undefined | null
	step?: number | undefined | null
	type?: never
	value?: string | undefined | null
	wrapper?: BaseAttributes | undefined | null
}>

export type PlainYearMonthField = Override<GenericFormAttributes, {
	calendar?: string | undefined | null
	field?: string | undefined | null
	format?: MonthFormat | undefined | null
	group?: Partial<HTMLAttributes> | undefined | null
	help?: Partial<HTMLAttributes> | undefined | null
	label?: string | undefined | null
	legend?: Partial<Label> | undefined | null
	locales?: Array<string> | undefined | null
	message?: string | undefined | null
	month?: string | undefined | null
	monthAttrs?: Partial<DateInput> | undefined | null
	outer?: Partial<Fieldset> | undefined | null
	readonly?: boolean | string | undefined | null
	required?: boolean | string | undefined | null
	tag?: Partial<HTMLAttributes> | undefined | null
	type?: never
	year?: string | undefined | null
	yearAttrs?: Partial<TimeInput> | undefined | null
}>

export type ZonesDateTimeField = Override<GenericFormAttributes, {
	autocomplete?: "off" | "on" | undefined | null
	autocorrect?: never
	countries?: Array<string> | undefined | null
	date?: string | undefined | null
	dateAttrs?: Partial<DateInput> | undefined | null
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
	timeAttrs?: Partial<TimeInput> | undefined | null
	timeZone?: string | undefined | null
	type?: never
	useList?: boolean | undefined | null
}>

export type StringField = Override<HTMLAttributes, {
	autocomplete?: "off" | "on" | undefined | null
	autocorrect?: never
	cols?: number | string | undefined | null
	dirname?: string | undefined | null
	list?: Array<string> | undefined | null
	maxlength?: number | string | undefined | null
	minlength?: number | string | undefined | null
	pattern?: string | undefined | null
	placeholder?: never
	readonly?: boolean | string | undefined | null
	required?: boolean | string | undefined | null
	rows?: number | string | undefined | null
	size?: number | string | undefined | null
	type?: never
	value?: string | string[] | number | undefined | null
	wrap?: string | undefined | null
}>

export type TimeZoneField = Override<GenericFormAttributes, {
	autocomplete?: "off" | "on" | undefined | null
	autocorrect?: never
	countries?: Array<string> | undefined | null
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
	wrapper?: BaseAttributes | undefined | null
}>

export type SubsetField = Override<HTMLAttributes, {
	dataset?: Dataset
	form: string
	help?: string | undefined | null
	helpAttributes?: Partial<Help> | undefined
	id?: string | undefined | null
	label?: string
	labelAttributes?: Partial<Label>
	name: string
	options: Array<CheckboxGroupOption>
	required?: boolean
	selected?: Array<string | number> | undefined | null
}>

export type TelField = Override<GenericFormAttributes, {
	autocomplete?: "off" | "on" | undefined | null
	autocorrect?: never
	datalist?: BaseAttributes | undefined | null
	field?: string | undefined | null
	help?: Partial<Help> | undefined | null
	label?: string | undefined | null
	legend?: Partial<Label> | undefined | null
	list?: Array<DatalistOption> | undefined | null
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
	wrapper?: BaseAttributes | undefined | null
}>

export type UrlField = Override<GenericFormAttributes, {
	autocomplete?: "off" | "on" | undefined | null
	autocorrect?: never
	datalist?: BaseAttributes | undefined | null
	field?: string | undefined | null
	help?: Partial<Help> | undefined | null
	label?: string | undefined | null
	legend?: Partial<Label> | undefined | null
	list?: Array<DatalistOption> | undefined | null
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
	wrapper?: BaseAttributes | undefined | null
}>
