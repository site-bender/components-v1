import type { Constraint, ValidationError } from "./constraints"
import {
	ButtonLayout,
	DateFormat,
	DateTimeFormat,
	StringFormat,
	TabStyle,
	TruncationMethod,
	TypeOfBoolean,
	TypeOfButton,
	TypeOfChoice,
	TypeOfColor,
	TypeOfComponent,
	TypeOfIcon,
	TypeOfTrigger,
	TypeOfTruncation,
	TypeOfUpdate,
} from "./enums"
import type { Action, EventProps } from "./events"
import type {
	BooleanValue,
	IntegerValue,
	ListValue,
	MemberValue,
	NumberValue,
	PlainDateTimeValue,
	PlainDateValue,
	PrecisionNumberValue,
	RealNumberValue,
	SetValue,
	StringValue,
} from "./values"

import { Operation } from "./operations"

export type Option = {
	value: string | number
	label?: string | undefined | null
}

export type OptionGroup = {
	label: string
	options: Array<Option>
}

export type AriaAttributes = {
	ariaDescribedby?: string
	ariaDetails?: string
	ariaLabel?: string
	ariaLabelledby?: string
}

export type Update = {
	updateType: keyof typeof TypeOfUpdate
	path: Array<string>
	changes: (Interface & GeneratedProps) | Operation
}

export type Condition = {
	constraint: Constraint
	whenMet: Update
	whenUnmet: Update
}

export type IconStyleAttributes = {
	fill?: keyof typeof TypeOfColor
	height?: string | number
	stroke?: keyof typeof TypeOfColor
	width?: string | number
	margin?: string
}

export type StyleAttributes = {
	backgroundColor?: keyof typeof TypeOfColor
	color?: keyof typeof TypeOfColor
	fill?: keyof typeof TypeOfColor
	height?: string | number
	margin?: string | number
	maxHeight?: string | number
	maxLength?: number
	maxWidth?: string | number
	minHeight?: string | number
	minLength?: number
	minWidth?: string | number
	padding?: string | number
	stroke?: keyof typeof TypeOfColor
	width?: string | number
}

export type BranchProps = {
	children?: Array<Interface>
	readonly isBranch: true
}

export type ChoiceProps = {
	options: Array<Option> | Array<OptionGroup>
}

export type CommonProps = {
	actions?: Partial<Record<keyof typeof TypeOfTrigger, Action>>
	conditions?: Array<Condition>
	id: string
	isDisabled?: boolean
	isHidden?: boolean
	name?: string
	style?: StyleAttributes
}

export type DateProps = {
	noDayOfMonth?: boolean
	noMonth?: boolean
	noYear?: boolean
}

export type FieldProps = {
	autoFocus?: boolean
	defaultValue?: string
	label?: string
	name: string
	isReadOnly?: boolean
}

export type GeneratedProps = {
	disabled?: boolean
	form?: string
	handlers?: EventProps
	path?: Array<string>
}

export type MatchProps = {
	pattern?: string | RegExp
}

export type NumberProps = {
	max?: number
	min?: number
	step?: number
	truncationMethod?: keyof typeof TruncationMethod
}

export type TextProps = {
	maxLength?: number
	minLength?: number
	truncateAt?: number
	truncateType?: keyof typeof TypeOfTruncation
}

export type TimeProps = {
	noHours?: boolean
	noMinutes?: boolean
	noSeconds?: boolean
	includeMilliseconds?: boolean
}

export type ValidityProps = {
	constraint: Constraint
	errors: Array<ValidationError>
	help?: string
	placeholder?: string
	required?: boolean
	value?: string
}

// ===== Components =====

export type AddressFieldType = CommonProps &
	FieldProps &
	MatchProps &
	TextProps &
	ValidityProps & {
		readonly componentType: (typeof TypeOfComponent)["ADDRESS_FIELD"]
		useLookup?: boolean
	} & StringValue

export type AutocompleteFieldType = CommonProps &
	FieldProps &
	MatchProps &
	TextProps &
	ValidityProps & {
		autoComplete?: boolean
		format?: keyof typeof StringFormat
		readonly componentType: (typeof TypeOfComponent)["AUTOCOMPLETE_FIELD"]
	} & StringValue

export type ButtonType = CommonProps &
	FieldProps & {
		buttonLayout?: keyof typeof ButtonLayout
		buttonType: keyof typeof TypeOfButton
		icon?: keyof typeof TypeOfIcon
		iconStyle?: IconStyleAttributes
		readonly componentType: (typeof TypeOfComponent)["BUTTON"]
	}

export type ButtonBarType = BranchProps &
	CommonProps & {
		buttonLayout?: keyof typeof ButtonLayout
		buttonType: keyof typeof TypeOfButton
		icon?: keyof typeof TypeOfIcon
		iconStyle?: IconStyleAttributes
		readonly componentType: (typeof TypeOfComponent)["BUTTON_BAR"]
		title?: string
	}

export type ChooseOneFieldType = ChoiceProps &
	CommonProps &
	FieldProps &
	ValidityProps & {
		autoComplete?: boolean
		choiceType: keyof typeof TypeOfChoice
		columns?: number
		readonly componentType: (typeof TypeOfComponent)["CHOOSE_ONE_FIELD"]
		selected?: Option
	} & MemberValue

export type ChooseSomeFieldType = ChoiceProps &
	CommonProps &
	FieldProps &
	ValidityProps & {
		autoComplete?: boolean
		choiceType: keyof typeof TypeOfChoice
		columns?: number
		readonly componentType: (typeof TypeOfComponent)["CHOOSE_SOME_FIELD"]
		selected?: Array<Option>
	} & SetValue

export type CompositeFieldType = BranchProps &
	CommonProps & {
		datatype: string
		readonly componentType: (typeof TypeOfComponent)["COMPOSITE_FIELD"]
		title?: string
	}

export type DateFieldType = CommonProps &
	DateProps &
	FieldProps &
	ValidityProps & {
		format?: keyof typeof DateFormat
		readonly componentType: (typeof TypeOfComponent)["DATE_FIELD"]
	} & PlainDateValue

export type DateRangeFieldType = CommonProps &
	DateProps &
	FieldProps &
	ValidityProps & {
		format?: keyof typeof DateFormat
		readonly componentType: (typeof TypeOfComponent)["DATE_RANGE_FIELD"]
		readonly datatype: "range"
		value: {
			end: PlainDateValue
			start: PlainDateValue
		}
	}

export type DateTimeFieldType = CommonProps &
	DateProps &
	FieldProps &
	TimeProps &
	ValidityProps & {
		format?: keyof typeof DateTimeFormat
		readonly componentType: (typeof TypeOfComponent)["DATE_TIME_FIELD"]
	} & PlainDateTimeValue

export type DateTimeRangeFieldType = CommonProps &
	DateProps &
	FieldProps &
	TimeProps &
	ValidityProps & {
		format?: keyof typeof DateTimeFormat
		readonly componentType: (typeof TypeOfComponent)["DATE_TIME_RANGE_FIELD"]
		readonly datatype: "range"
		value: {
			end: PlainDateTimeValue
			start: PlainDateTimeValue
		}
	}

export type EmailFieldType = CommonProps &
	FieldProps &
	MatchProps &
	TextProps &
	ValidityProps & {
		readonly format: (typeof StringFormat)["EMAIL_ADDRESS"]
		readonly componentType: (typeof TypeOfComponent)["EMAIL_FIELD"]
		validate?: boolean
	} & StringValue

export type FieldsetType = BranchProps &
	CommonProps & {
		readonly componentType: (typeof TypeOfComponent)["FIELDSET"]
		title?: string
	}

export type HiddenFieldType = CommonProps &
	FieldProps &
	ValidityProps & {
		autoGenerateId?: boolean
		readonly componentType: (typeof TypeOfComponent)["HIDDEN_FIELD"]
	} & StringValue

export type IntegerFieldType = CommonProps &
	FieldProps &
	NumberProps &
	ValidityProps & {
		readonly componentType: (typeof TypeOfComponent)["INTEGER_FIELD"]
	} & IntegerValue

export type MenuType = BranchProps &
	CommonProps & {
		children: Array<MenuItemType | MenuFlyoutType>
		readonly componentType: (typeof TypeOfComponent)["MENU"]
	}

export type MenuFlyoutType = BranchProps &
	CommonProps & {
		children: Array<MenuItemType | MenuFlyoutType>
		readonly componentType: (typeof TypeOfComponent)["MENU_FLYOUT"]
	}

export type MenuItemType = CommonProps & {
	autoGenerateId?: boolean
	icon?: keyof typeof TypeOfIcon
	label: string
	readonly componentType: (typeof TypeOfComponent)["HIDDEN_FIELD"]
} & StringValue

export type MoneyFieldType = CommonProps &
	FieldProps &
	NumberProps &
	ValidityProps & {
		currency: Option
		readonly componentType: (typeof TypeOfComponent)["MONEY_FIELD"]
	} & PrecisionNumberValue

export type NoteType = CommonProps &
	FieldProps &
	MatchProps &
	TextProps & {
		autoGenerateId?: boolean
		readonly componentType: (typeof TypeOfComponent)["NOTE"]
	} & StringValue

export type NumberRangeFieldType = CommonProps &
	FieldProps &
	NumberProps &
	ValidityProps & {
		readonly componentType: (typeof TypeOfComponent)["PRECISION_NUMBER_FIELD"]
		value?: {
			end: NumberValue
			start: NumberValue
		}
	} & PrecisionNumberValue

export type OrdinalFieldType = CommonProps &
	FieldProps &
	ValidityProps & {
		readonly componentType: (typeof TypeOfComponent)["ORDINAL_FIELD"]
	} & ListValue

export type PageType = BranchProps &
	CommonProps & {
		readonly componentType: (typeof TypeOfComponent)["PAGE"]
	}

export type PhoneFieldType = CommonProps &
	FieldProps &
	MatchProps &
	TextProps &
	ValidityProps & {
		readonly format: (typeof StringFormat)["TELEPHONE_NUMBER"]
		readonly componentType: (typeof TypeOfComponent)["PHONE_FIELD"]
		verify?: boolean
	} & StringValue

export type PrecisionNumberFieldType = CommonProps &
	FieldProps &
	NumberProps &
	ValidityProps & {
		readonly componentType: (typeof TypeOfComponent)["PRECISION_NUMBER_FIELD"]
	} & PrecisionNumberValue

export type ReadOnlyFieldType = CommonProps &
	FieldProps &
	TextProps & {
		readonly componentType: (typeof TypeOfComponent)["READ_ONLY_FIELD"]
	} & StringValue

export type RealNumberFieldType = CommonProps &
	FieldProps &
	NumberProps &
	ValidityProps & {
		readonly componentType: (typeof TypeOfComponent)["REAL_NUMBER_FIELD"]
	} & RealNumberValue

export type SelectorFieldType = ChoiceProps &
	CommonProps &
	FieldProps &
	ValidityProps & {
		autoComplete?: boolean
		readonly componentType: (typeof TypeOfComponent)["SELECTOR_FIELD"]
		selected?: Option
	} & MemberValue

export type SeparatorType = BranchProps &
	CommonProps & {
		readonly componentType: (typeof TypeOfComponent)["SEPARATOR"]
	}

export type TabType = CommonProps & {
	description?: string
	icon?: keyof typeof TypeOfIcon
	iconStyle?: IconStyleAttributes
	readonly componentType: (typeof TypeOfComponent)["TAB"]
	tabStyle: keyof typeof TabStyle
	title: string
}

export type TabSetType = BranchProps &
	CommonProps & {
		readonly componentType: (typeof TypeOfComponent)["TAB_SET"]
		selected?: string
		tab: TabType
		tabName: string
	}

export type TabsType = BranchProps &
	CommonProps & {
		children?: Array<TabSetType>
		readonly componentType: (typeof TypeOfComponent)["TABS"]
		selected?: string
	}

export type TextFieldType = CommonProps &
	FieldProps &
	MatchProps &
	TextProps &
	ValidityProps & {
		autoExpand?: boolean
		readonly format: keyof typeof StringFormat
		readonly componentType: (typeof TypeOfComponent)["TEXT_FIELD"]
		rows?: number | string
	} & StringValue

export type ToolbarType = BranchProps &
	CommonProps & {
		buttonLayout?: keyof typeof ButtonLayout
		children?: Array<ToolbarButtonType | SeparatorType | ToolbarGroupType>
		readonly componentType: (typeof TypeOfComponent)["TOOLBAR"]
	}

export type ToolbarGroupType = BranchProps &
	CommonProps & {
		buttonLayout?: keyof typeof ButtonLayout
		children?: Array<ToolbarButtonType | SeparatorType>
		title?: string
		readonly componentType: (typeof TypeOfComponent)["TOOLBAR_GROUP"]
	}

export type ToolbarButtonType = CommonProps &
	FieldProps & {
		buttonLayout?: keyof typeof ButtonLayout
		buttonType: keyof typeof TypeOfButton
		icon?: keyof typeof TypeOfIcon
		iconStyle?: IconStyleAttributes
		readonly componentType: (typeof TypeOfComponent)["TOOLBAR_BUTTON"]
	}

export type UrlFieldType = CommonProps &
	FieldProps &
	MatchProps &
	TextProps &
	ValidityProps & {
		readonly format: (typeof StringFormat)["URL"]
		readonly componentType: (typeof TypeOfComponent)["URL_FIELD"]
	} & StringValue

export type YesNoFieldType = CommonProps &
	FieldProps &
	ValidityProps & {
		booleanType?: keyof typeof TypeOfBoolean
		readonly componentType: (typeof TypeOfComponent)["YES_NO_FIELD"]
	} & BooleanValue

export type BranchType =
	| ButtonBarType
	| CompositeFieldType
	| FieldsetType
	| MenuType
	| MenuFlyoutType
	| PageType
	| SeparatorType
	| TabSetType
	| TabsType
	| ToolbarType
	| ToolbarGroupType

export type InputFieldType =
	| AddressFieldType
	| AutocompleteFieldType
	| ChooseOneFieldType
	| ChooseSomeFieldType
	| CompositeFieldType
	| DateFieldType
	| DateRangeFieldType
	| DateTimeFieldType
	| DateTimeRangeFieldType
	| EmailFieldType
	| HiddenFieldType
	| IntegerFieldType
	| MoneyFieldType
	| NumberRangeFieldType
	| OrdinalFieldType
	| PhoneFieldType
	| PrecisionNumberFieldType
	| RealNumberFieldType
	| SelectorFieldType
	| TextFieldType
	| UrlFieldType
	| YesNoFieldType

export type Interface =
	| BranchType
	| InputFieldType
	| ButtonBarType
	| MenuItemType
	| NoteType
	| ReadOnlyFieldType
	| TabType
	| ToolbarButtonType

export type Configuration = {
	createdAt: string
	id: string
	name: string
	children: Array<Interface>
}
