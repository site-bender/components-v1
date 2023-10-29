import type * as htmlTypes from "./html-types"

export type Dataset = Record<string, string | number | boolean>

export type Override<T1, T2> = Omit<T1, keyof T2> & T2

export type GenericFormAttributes = Override<
	htmlTypes.HTMLAttributes,
	{
		dataset?: Dataset
		disabled?: boolean | string | undefined | null
		form: string
		label?: string | undefined | null
		labelAttributes?: Partial<Label>
		name: string
	}
>

export type Form = Override<
	GenericFormAttributes,
	{
		"accept-charset"?: string | undefined | null
		action: string
		autocomplete?: "off" | "on" | undefined | null
		autocorrect?: never
		dataset?: Dataset
		enctype?: string | undefined | null
		form?: undefined
		labelledBy: string | undefined | null
		method?: "GET" | "POST" | undefined | null
		name?: string | undefined | null
		novalidate?: boolean | string | undefined | null
		target?: string | undefined | null
	}
>

// Use instead of input[type=button|reset|submit]
export type Button = Override<
	GenericFormAttributes,
	{
		disabled?: boolean | string | undefined | null
		form: string | undefined | null
		formaction?: string | undefined | null
		formenctype?: string | undefined | null
		formmethod?: string | undefined | null
		formnovalidate?: boolean | string | undefined | null
		formtarget?: string | undefined | null
		type?: "submit" | "reset" | "button"
		value?: string | string[] | number | undefined | null
	}
>

// Non-textual inputs
export type CheckboxInput = Override<
	GenericFormAttributes,
	{
		checked?: boolean | string | undefined | null
		legendId?: string | undefined | null
		required?: boolean | string | undefined | null
		type?: "checkbox" | undefined | null
		value: string | number
	}
>

export type CheckboxGroupOption = {
	checked?: boolean | string | undefined | null
	form?: string | undefined | null
	id?: string | undefined | null
	label: string
	labelAttributes?: Partial<Label>
	legendId?: string | undefined | null
	name?: string | undefined | null
	required?: boolean | string | undefined | null
	type?: "checkbox" | undefined | null
	value: string | number
}

export type CheckboxGroup = Override<
	htmlTypes.HTMLAttributes,
	{
		dataset?: Dataset | undefined | null
		form: string
		help?: string | undefined | null
		helpAttributes?: Partial<Help> | undefined
		id?: string | undefined | null
		label?: string | undefined | null
		labelAttributes?: Partial<Label> | undefined | null
		name: string
		options: Array<CheckboxGroupOption>
		required?: boolean
		selected?: Array<string | number> | undefined | null
	}
>

export type ColorInput = Override<
	GenericFormAttributes,
	{
		autocomplete?: "off" | "on" | undefined | null
		list?: string | undefined | null
		type?: "color"
		value?: string | undefined | null
	}
>

export type FileInput = Override<
	GenericFormAttributes,
	{
		accept?: string | undefined | null
		capture?: "environment" | "user" | undefined | null
		multiple?: boolean | string | undefined | null
		required?: boolean | string | undefined | null
		type?: "file"
		value?: string | string[] | undefined | null
	}
>

export type HiddenInput = Override<
	GenericFormAttributes,
	{
		autocomplete?: "off" | "on" | undefined | null
		name: "_charset_" | string
		type?: "hidden"
		value?: string | number | undefined | null
	}
>

export type ImageInput = Override<
	GenericFormAttributes,
	{
		alt: string
		formaction?: string | undefined | null
		formenctype?: string | undefined | null
		formmethod?: string | undefined | null
		formnovalidate?: boolean | string | undefined | null
		formtarget?: string | undefined | null
		height?: number | string | undefined | null
		src: string
		type?: "image"
		width?: number | string | undefined | null
	}
>

export type RadioInput = Override<
	GenericFormAttributes,
	{
		checked?: boolean | string | undefined | null
		legendId?: string | undefined | null
		required?: boolean | string | undefined | null
		type?: "radio" | undefined | null
		value: string | number
	}
>

export type RadioGroupOption = {
	dataset?: Dataset | undefined | null
	form?: string | undefined | null
	help?: string | undefined | null
	helpAttributes?: Partial<Help> | undefined
	id?: string | undefined | null
	label?: string | undefined | null
	labelAttributes?: Partial<Label> | undefined
	legendId?: string | undefined | null
	name?: string | undefined | null
	options?: Array<RadioGroupOption> | undefined
	required?: boolean | string | undefined | null
	selected?: Array<string | number> | undefined | null
	type?: "radio" | undefined | null
	value: string | number
}

export type RadioGroup = Override<
	htmlTypes.HTMLAttributes,
	{
		dataset?: Dataset
		form: string
		help?: string | undefined | null
		helpAttributes?: Partial<Help> | undefined
		id?: string | undefined | null
		includeNull?: boolean | undefined | null
		label?: string
		labelAttributes?: Partial<Label> | undefined
		name: string
		options: Array<RadioGroupOption>
		required?: boolean
		selected?: string | number | undefined | null
	}
>

export type RangeInput = Override<
	GenericFormAttributes,
	{
		autocomplete?: "off" | "on" | undefined | null
		list?: string | undefined | null
		max?: number | string | undefined | null
		min?: number | string | undefined | null
		readonly?: boolean | string | undefined | null
		required?: boolean | string | undefined | null
		step?: number | string | undefined | null
		type?: "range"
		value?: string | number | undefined | null
	}
>

export type Options = {
	options: Array<RadioGroupOption>
	selected?: string | number | undefined | null
}

export type Select = Override<
	GenericFormAttributes,
	{
		autocomplete?: "off" | "on" | undefined | null
		autocorrect?: never
		includeNull?: boolean | undefined | null
		options: Array<RadioGroupOption>
		selected?: string | number | undefined | null
	}
>

export type Textarea = Override<
	GenericFormAttributes,
	{
		autocomplete?: "off" | "on" | undefined | null
		autocorrect?: never
		cols?: number | string | undefined | null
		dirname?: string | undefined | null
		maxlength?: number | string | undefined | null
		minlength?: number | string | undefined | null
		placeholder?: never
		required?: boolean | string | undefined | null
		rows?: number | string | undefined | null
		value?: string | string[] | number | undefined | null
		wrap?: string | undefined | null
	}
>

type DateTimeInputTypeAttribute =
	| "date"
	| "datetime-local"
	| "month"
	| "time"
	| "week"

// Date and time
export type DateTimeInput = Override<
	GenericFormAttributes,
	{
		autocomplete?: "off" | "on" | undefined | null
		list?: string | undefined | null
		max?: number | string | undefined | null
		min?: number | string | undefined | null
		readonly?: boolean | string | undefined | null
		required?: boolean | string | undefined | null
		step?: number | string | undefined | null
		type?: DateTimeInputTypeAttribute
		value?: string | undefined | null
	}
>

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
		maxlength?: number | string | undefined | null
		minlength?: number | string | undefined | null
		pattern?: string | undefined | null
		placeholder?: never
		readonly?: boolean | string | undefined | null
		required?: boolean | string | undefined | null
		size?: number | string | undefined | null
		type?: "password"
		value?: string | undefined | null
	}
>

type TextInputTypeAttribute = "email" | "search" | "tel" | "text" | "url"

export type TextInput = Override<
	GenericFormAttributes,
	{
		autocomplete?: "off" | "on" | undefined | null
		autocorrect?: never
		list?: string | undefined | null
		maxlength?: number | string | undefined | null
		minlength?: number | string | undefined | null
		pattern?: string | undefined | null
		placeholder?: never
		readonly?: boolean | string | undefined | null
		required?: boolean | string | undefined | null
		size?: number | string | undefined | null
		type?: TextInputTypeAttribute
		value?: string | undefined | null
	}
>

// Numeric inputs
export type NumberInput = Override<
	GenericFormAttributes,
	{
		autocomplete?: "off" | "on" | undefined | null
		autocorrect?: never
		list?: string | undefined | null
		max?: number | string | undefined | null
		min?: number | string | undefined | null
		placeholder?: never
		readonly?: boolean | string | undefined | null
		required?: boolean | string | undefined | null
		step?: number | string | undefined | null
		type?: "number"
		value?: number | string | undefined | null
	}
>

export type Help = Override<
	htmlTypes.HTMLAttributes,
	{
		dataset?: Dataset
		for?: string | undefined | null
		form: string
		help?: string | undefined | null
		id?: string | undefined | null
		name?: string | undefined | null
	}
>

export type Label = Override<
	htmlTypes.HTMLAttributes,
	{
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
	}
>

export type ElementAttributes = Partial<DateTimeInput | NumberInput | TextInput>

// Fields
export type Field = Override<
	htmlTypes.HTMLAttributes,
	{
		dataset?: Dataset | undefined | null
		elementAttributes?: ElementAttributes | undefined
		form: string
		help?: string | undefined | null
		helpAttributes?: Partial<Help> | undefined
		id?: string | undefined | null
		label?: string | undefined | null
		labelAttributes?: Partial<Label> | undefined | null
		name: string
		required?: boolean
	}
>

export type MemberField = Override<
	htmlTypes.HTMLAttributes,
	{
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
	}
>

export type PasswordField = Override<
	htmlTypes.HTMLAttributes,
	{
		allowAutocomplete?: boolean | undefined | null
		allowUnmasked?: boolean | undefined | null
		dataset?: Dataset
		elementAttributes?: Override<
			PasswordInput,
			{
				autocomplete?: never
				type?: never
				value?: never
			}
		>
		form: string
		help?: string | undefined | null
		helpAttributes?: Partial<Help> | undefined
		id?: string | undefined | null
		isNewPassword?: boolean | undefined | null
		label?: string
		labelAttributes?: Partial<Label>
		name: string
		required?: boolean
		value?: string | undefined | null
	}
>

export type StringField = Override<
	Field,
	{
		elementAttributes?: Override<
			htmlTypes.HTMLAttributes,
			{
				autocomplete?: "off" | "on" | undefined | null
				autocorrect?: never
				cols?: number | string | undefined | null
				dirname?: string | undefined | null
				list?: string | undefined | null
				maxlength?: number | string | undefined | null
				minlength?: number | string | undefined | null
				pattern?: string | undefined | null
				placeholder?: never
				readonly?: boolean | string | undefined | null
				required?: boolean | string | undefined | null
				rows?: number | string | undefined | null
				size?: number | string | undefined | null
				type?: TextInputTypeAttribute
				value?: never
				wrap?: string | undefined | null
			}
		>
		value?: string | string[] | number | undefined | null
	}
>

export type SubsetField = Override<
	htmlTypes.HTMLAttributes,
	{
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
	}
>
