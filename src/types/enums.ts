export const AjaxTrigger = {
	onAbort: "onabort",
	onError: "onerror",
	onLoad: "onload",
	onLoadEnd: "onloadend",
	onLoadStart: "onloadstart",
	onProgress: "onprogress",
	onTimeout: "ontimeout",
} as const

export const ButtonLayout = {
	ICON_ON_LEFT: "ICON_ON_LEFT",
	ICON_ON_RIGHT: "ICON_ON_RIGHT",
	ICON_ONLY: "ICON_ONLY",
	ICON_OVER: "ICON_OVER",
	ICON_UNDER: "ICON_UNDER",
	TEXT_ONLY: "TEXT_ONLY",
} as const

export const ClipboardTrigger = {
	onClipboardData: "onclipboarddata",
} as const

export const DateFormat = {
	CUSTOM_DATE: "CUSTOM_DATE",
	DATE: "DATE",
	LONG_DATE: "LONG_DATE",
	SHORT_DATE: "SHORT_DATE",
} as const

export const DateTimeFormat = {
	CUSTOM_DATE_TIME: "CUSTOM_DATE_TIME",
	DATE_TIME: "DATE_TIME",
	LONG_DATE_TIME: "LONG_DATE_TIME",
	SHORT_DATE_TIME: "SHORT_DATE_TIME",
} as const

export const DocumentLoadingTrigger = {
	onDocumentContentLoaded: "ondocumentcontentloaded",
	onReadyStateChange: "onreadystatechange",
	onKeyUp: "onkeyup",
} as const

export const ElementFocusTrigger = {
	onBlur: "onblur",
	onFocus: "onfocus",
	onFocusIn: "onfocusin",
	onFocusOut: "onfocusout",
} as const

export const FileReaderTrigger = {
	onAbort: "onabort",
	onError: "onerror",
	onLoad: "onload",
	onLoadEnd: "onloadend",
	onLoadStart: "onloadstart",
	onProgress: "onprogress",
} as const

export const FormTrigger = {
	onFormData: "onformdata",
	onReset: "onreset",
	onSubmit: "onsubmit",
} as const

export const FullScreenTrigger = {
	onFullScreenChange: "onfullscreenchange",
	onFullScreenError: "onfullscreenerror",
} as const

export const HistoryTrigger = {
	onHashChange: "onhashchange",
	onPageHide: "onpagehide",
	onPageShow: "onpageshow",
	onPopState: "onpopstate",
} as const

export const InputElementTrigger = {
	onInput: "oninput",
	onInvalid: "oninvalid",
	onSearch: "onsearch",
} as const

export const InputTrigger = {
	onBeforeInput: "onbeforeinput",
	onInput: "oninput",
	onChange: "onchange",
} as const

export const InterfaceEditMode = {
	EDIT_ONLY: "EDIT_ONLY",
	VIEW_ONLY: "VIEW_ONLY",
	VIEW_AND_EDIT: "VIEW_AND_EDIT",
} as const

export const KeyboardTrigger = {
	onKeyDown: "onkeydown",
	onKeyPress: "onkeypress",
	onKeyUp: "onkeyup",
} as const

export const MouseTrigger = {
	onAuxClick: "onauxclick",
	onClick: "onclick",
	onContextMenu: "oncontextmenu",
	onDblClick: "ondblclick",
	onMouseDown: "onmousedown",
	onMouseEnter: "onmouseenter",
	onMouseLeave: "onmouseleave",
	onMouseMove: "onmousemove",
	onMouseOut: "onmouseout",
	onMouseOver: "onmouseover",
	onMouseUp: "onmouseup",
} as const

export const StringFormat = {
	CAMEL_CASE: "CAMEL_CASE",
	CREDIT_CARD_NUMBER: "CREDIT_CARD_NUMBER",
	DOTTED_PATH: "DOTTED_PATH",
	EMAIL_ADDRESS: "EMAIL_ADDRESS",
	IPV4: "IPV4",
	IPV6: "IPV6",
	LOWERCASE: "LOWERCASE",
	PASCAL_CASE: "PASCAL_CASE",
	SCREAMING_SNAKE_CASE: "SCREAMING_SNAKE_CASE",
	SENTENCE_CASE: "SENTENCE_CASE",
	SNAKE_CASE: "SNAKE_CASE",
	TELEPHONE_NUMBER: "TELEPHONE_NUMBER",
	TITLE_CASE: "TITLE_CASE",
	TRAIN_CASE: "TRAIN_CASE",
	UPPERCASE: "UPPERCASE",
	URL: "URL",
	URN: "URN",
} as const

export const TimeFormat = {
	CUSTOM_TIME: "CUSTOM_TIME",
	TIME: "TIME",
	LONG_TIME: "LONG_TIME",
	SHORT_TIME: "SHORT_TIME",
} as const

export const TabStyle = {
	CARDS: "CARDS",
	ICON_TABS: "ICON_TABS",
	TEXT_TABS: "TEXT_TABS",
	TEXT_AND_ICON_TABS: "TEXT_AND_ICON_TABS",
} as const

export const TruncationMethod = {
	ROUND_UP: "ROUND_UP",
	ROUND_DOWN: "ROUND_DOWN",
	ROUND: "ROUND",
} as const

export const TypeOfAction = {
	BLOCK_DEFAULT: "BLOCK_DEFAULT",
	LOAD_DATA: "LOAD_DATA",
	SHOW_MODAL: "SHOW_MODAL",
	LOG: "LOG",
	MUTATE: "MUTATE",
	QUERY: "QUERY",
	SHOW_CONTEXT_MENU: "SHOW_CONTEXT_MENU",
	UPDATE_STATE: "UPDATE_STATE",
} as const

export const TypeOfBoolean = {
	ALLOW_INDETERMINATE: "ALLOW_INDETERMINATE",
	ALLOW_MAYBE: "ALLOW_MAYBE",
	FORCED_CHOICE: "FORCED_CHOICE",
	INDETERMINATE_UNTIL_CHOSEN: "INDETERMINATE_UNTIL_CHOSEN",
} as const

export const TypeOfButton = {
	ADD: "ADD",
	CLEAR: "CLEAR",
	CUSTOM: "CUSTOM",
	REMOVE: "REMOVE",
	RESET: "RESET",
	SUBMIT: "SUBMIT",
	TOGGLE: "TOGGLE",
} as const

export const TypeOfChoice = {
	AUTO: "AUTO",
	CHECKBOXES: "CHECKBOXES",
	COMBOBOX: "COMBOBOX",
	RADIO_BUTTONS: "RADIO_BUTTONS",
	TAGS: "TAGS",
	TOGGLES: "TOGGLES",
} as const

export const TypeOfColor = {
	BRAND_PRIMARY: "#208365",
	BRAND_SECONDARY: "#364f38",
	BRAND_TERTIARY: "#e37371",
	BLACK: "#27323f",
	BASE_DARK: "#393d42",
	BASE_NEUTRAL: "#687079",
	BASE_LIGHT: "#9ca3ab",
	BORDER_DARK: "#a0a1a1",
	BORDER_NEUTRAL: "#dddddd",
	BORDER_LIGHT: "#f4f5f6",
	SHADOW_DARK: "#bababa40",
	SHADOW_NEUTRAL: "#cacbcc",
	SHADOW_LIGHT: "#3e434933",
	WHITE: "#fff",
} as const

export const TypeOfComponent = {
	ADDRESS_FIELD: "ADDRESS_FIELD",
	AUTOCOMPLETE_FIELD: "AUTOCOMPLETE_FIELD",
	BUTTON: "BUTTON",
	BUTTON_BAR: "BUTTON_BAR",
	CHOOSE_ONE_FIELD: "CHOOSE_ONE_FIELD",
	CHOOSE_SOME_FIELD: "CHOOSE_SOME_FIELD",
	COMPOSITE_FIELD: "COMPOSITE_FIELD",
	DATE_FIELD: "DATE_FIELD",
	DATE_RANGE_FIELD: "DATE_RANGE_FIELD",
	DATE_TIME_FIELD: "DATE_TIME_FIELD",
	DATE_TIME_RANGE_FIELD: "DATE_TIME_RANGE_FIELD",
	EMAIL_FIELD: "EMAIL_FIELD",
	FIELDSET: "FIELDSET",
	HIDDEN_FIELD: "HIDDEN_FIELD",
	INTEGER_FIELD: "INTEGER_FIELD",
	MENU: "MENU",
	MENU_FLYOUT: "MENU_FLYOUT",
	MENU_ITEM: "MENU_ITEM",
	MONEY_FIELD: "MONEY_FIELD",
	NOTE: "NOTE",
	NUMBER_RANGE_FIELD: "NUMBER_RANGE_FIELD",
	ORDINAL_FIELD: "ORDINAL_FIELD",
	PAGE: "PAGE",
	PHONE_FIELD: "PHONE_FIELD",
	PRECISION_NUMBER_FIELD: "PRECISION_NUMBER_FIELD",
	READ_ONLY_FIELD: "READ_ONLY_FIELD",
	REAL_NUMBER_FIELD: "REAL_NUMBER_FIELD",
	SELECTOR_FIELD: "SELECTOR_FIELD",
	SEPARATOR: "SEPARATOR",
	TAB: "TAB",
	TAB_SET: "TAB_SET",
	TABS: "TABS",
	TEXT_FIELD: "TEXT_FIELD",
	TOOLBAR: "TOOLBAR",
	TOOLBAR_BUTTON: "TOOLBAR_BUTTON",
	TOOLBAR_GROUP: "TOOLBAR_GROUP",
	URL_FIELD: "URL_FIELD",
	YES_NO_FIELD: "YES_NO_FIELD",
} as const

export const TypeOfConstraint = {
	AFTER_ALPHABETICALLY: "AFTER_ALPHABETICALLY",
	AFTER_DATE: "AFTER_DATE",
	AFTER_DATE_TIME: "AFTER_DATE_TIME",
	AND: "AND",
	AT_LEAST_N: "AT_LEAST_N",
	AT_LEAST_N_CHARACTERS: "AT_LEAST_N_CHARACTERS",
	AT_MOST_N: "AT_MOST_N",
	AT_MOST_N_CHARACTERS: "AT_MOST_N_CHARACTERS",
	BEFORE_ALPHABETICALLY: "BEFORE_ALPHABETICALLY",
	BEFORE_DATE: "BEFORE_DATE",
	BEFORE_DATE_TIME: "BEFORE_DATE_TIME",
	CONFIRMED: "CONFIRMED",
	DISJOINT_SET: "DISJOINT_SET",
	EQUAL_TO_N: "EQUAL_TO_N",
	EXACTLY_N_CHARACTERS: "EXACTLY_N_CHARACTERS",
	FEWER_THAN_N_CHARACTERS: "FEWER_THAN_N_CHARACTERS",
	IS_ARRAY: "IS_ARRAY",
	IS_BOOLEAN: "IS_BOOLEAN",
	IS_DATE: "IS_DATE",
	IS_DATE_TIME: "IS_DATE_TIME",
	IS_DURATION: "IS_DURATION",
	IS_FRACTION: "IS_FRACTION",
	IS_INSTANT: "IS_INSTANT",
	IS_INTEGER: "IS_INTEGER",
	IS_LIST: "IS_LIST",
	IS_MAP: "IS_MAP",
	IS_MEMBER: "IS_MEMBER",
	IS_MONTH_DAY: "IS_MONTH_DAY",
	IS_PRECISION: "IS_PRECISION",
	IS_REAL: "IS_REAL",
	IS_SET: "IS_SET",
	IS_STRING: "IS_STRING",
	IS_TIME_ZONE: "IS_TIME_ZONE",
	IS_YEAR_MONTH: "IS_YEAR_MONTH",
	IS_ZONED_DATE_TIME: "IS_ZONED_DATE_TIME",
	LESS_THAN_N: "LESS_THAN_N",
	MATCHING: "MATCHING",
	MEMBER: "MEMBER",
	MORE_THAN_N: "MORE_THAN_N",
	MORE_THAN_N_CHARACTERS: "MORE_THAN_N_CHARACTERS",
	NOT_AFTER_ALPHABETICALLY: "NOT_AFTER_ALPHABETICALLY",
	NOT_BEFORE_ALPHABETICALLY: "NOT_BEFORE_ALPHABETICALLY",
	NOT_EQUAL_TO_N: "NOT_EQUAL_TO_N",
	ON_OR_AFTER_DATE: "ON_OR_AFTER_DATE",
	ON_OR_BEFORE_DATE: "ON_OR_BEFORE_DATE",
	OR: "OR",
	ORDERED_LIST: "ORDERED_LIST",
	OVERLAPPING_SET: "OVERLAPPING_SET",
	REVERSED_LIST: "REVERSED_LIST",
	SUBSET: "SUBSET",
	SUPERSET: "SUPERSET",
	XOR: "XOR",
} as const

export const TypeOfIcon = {
	ADD: "ADD",
	CUT: "CUT",
	COPY: "COPY",
	PASTE: "PASTE",
	EDIT: "EDIT",
	DELETE: "DELETE",
	PERSONAL: "PERSONAL",
	SECURITY: "SECURITY",
	TAX: "TAX",
} as const

export const TypeOfMatch = {
	REGEXP: "REGEXP",
	STRING: "STRING",
} as const

export const TypeOfOperator = {
	ABSOLUTE_VALUE: "ABSOLUTE_VALUE",
	AND: "AND",
	AVERAGE: "AVERAGE",
	CASE: "CASE",
	CONCATENATE: "CONCATENATE",
	COSECANT: "COSECANT",
	COSINE: "COSINE",
	COTANGENT: "COTANGENT",
	DEFAULT: "DEFAULT",
	DIVIDE: "DIVIDE",
	DURATION: "DURATION",
	ELSE: "ELSE",
	ELSE_IF: "ELSE_IF",
	EQUAL_TO_N: "EQUAL_TO_N",
	EXPONENT: "EXPONENT",
	FROM_PERCENT: "FROM_PERCENT",
	GREATER_THAN: "GREATER_THAN",
	GREATER_THAN_OR_EQUAL_TO_N: "GREATER_THAN_OR_EQUAL_TO_N",
	IDENTITY: "IDENTITY",
	IF: "IF",
	INJECT_VALUE: "INJECT_VALUE",
	INSTANT: "INSTANT",
	IS_DISJOINT: "IS_DISJOINT",
	IS_EVEN: "IS_EVEN",
	IS_MEMBER_OF: "IS_MEMBER_OF",
	IS_NEGATIVE: "IS_NEGATIVE",
	IS_ODD: "IS_ODD",
	IS_OVERLAPPING: "IS_OVERLAPPING",
	IS_POSITIVE: "IS_POSITIVE",
	IS_SUBSET: "IS_SUBSET",
	IS_SUPERSET: "IS_SUPERSET",
	JOIN: "JOIN",
	LESS_THAN: "LESS_THAN",
	LESS_THAN_OR_EQUAL_TO_N: "LESS_THAN_OR_EQUAL_TO_N",
	LOG: "LOG",
	MATCHING: "MATCHING",
	MAXIMUM: "MAXIMUM",
	MEAN: "MEAN",
	MEDIAN: "MEDIAN",
	MINIMUM: "MINIMUM",
	MODE: "MODE",
	MODULO: "MODULO",
	MULTIPLY: "MULTIPLY",
	NATURAL_LOG: "NATURAL_LOG",
	NEGATE: "NEGATE",
	NOT: "NOT",
	OR: "OR",
	PAD: "PAD",
	POWER: "POWER",
	RADICAL: "RADICAL",
	RANDOM: "RANDOM",
	RECIPROCAL: "RECIPROCAL",
	REMAINDER: "REMAINDER",
	ROOT_MEAN_SQUARE: "ROOT_MEAN_SQUARE",
	ROUND: "ROUND",
	ROUND_DOWN: "ROUND_DOWN",
	ROUND_UP: "ROUND_UP",
	SECANT: "SECANT",
	SINE: "SINE",
	SPLIT: "SPLIT",
	STANDARD_DEVIATION: "STANDARD_DEVIATION",
	SUBTRACT: "SUBTRACT",
	SUM: "SUM",
	SWITCH: "SWITCH",
	TANGENT: "TANGENT",
	TO_BOOLEAN: "TO_BOOLEAN",
	TO_FRACTION: "TO_FRACTION",
	TO_INTEGER: "TO_INTEGER",
	TO_LOWERCASE: "TO_LOWERCASE",
	TO_PERCENT: "TO_PERCENT",
	TO_PRECISION_NUMBER: "TO_PRECISION_NUMBER",
	TO_REAL_NUMBER: "TO_REAL_NUMBER",
	TO_SENTENCE_CASE: "TO_SENTENCE_CASE",
	TO_TITLE_CASE: "TO_TITLE_CASE",
	TO_UPPERCASE: "TO_UPPERCASE",
	TRIM: "TRIM",
	TRUNCATE: "TRUNCATE",
	UNEQUAL_TO_N: "UNEQUAL_TO_N",
	XOR: "XOR",
} as const

export const TypeOfReturn = {
	ARRAY: "ARRAY",
	BOOLEAN: "BOOLEAN",
	CALENDAR: "CALENDAR",
	DURATION: "DURATION",
	FRACTION: "FRACTION",
	INSTANT: "INSTANT",
	INTEGER: "INTEGER",
	MAP: "MAP",
	PLAIN_DATE: "PLAIN_DATE",
	PLAIN_DATE_TIME: "PLAIN_DATE_TIME",
	PRECISION_NUMBER: "PRECISION_NUMBER",
	REAL_NUMBER: "REAL_NUMBER",
	RECORD: "RECORD",
	SET: "SET",
	STRING: "STRING",
	ZONED_DATE_TIME: "ZONED_DATE_TIME",
} as const

export const TypeOfSource = {
	COOKIE_STORAGE: "COOKIE_STORAGE",
	FETCH: "FETCH",
	LOCAL_STORAGE: "LOCAL_STORAGE",
	QUERY_STRING: "QUERY_STRING",
	SESSION_STORAGE: "SESSION_STORAGE",
	STATE: "STATE",
	URL_PARAMS: "URL_PARAMS",
} as const

export const TypeOfTrigger = {
	onAbort: "onAbort",
	onAuxClick: "onAuxClick",
	onBeforeInput: "onBeforeInput",
	onBeforeUnload: "onBeforeUnload",
	onBlur: "onBlur",
	onChange: "onChange",
	onCleanup: "onCleanup",
	onClick: "onClick",
	onClipboardData: "onClipboardData",
	onContextMenu: "onContextMenu",
	onDblClick: "onDblClick",
	onDocumentContentLoaded: "onDocumentContentLoaded",
	onError: "onError",
	onFocus: "onFocus",
	onFocusIn: "onFocusIn",
	onFocusOut: "onFocusOut",
	onFormData: "onFormData",
	onFullScreenChange: "onFullScreenChange",
	onFullScreenError: "onFullScreenError",
	onHashChange: "onHashChange",
	onInput: "onInput",
	onInvalid: "onInvalid",
	onKeyDown: "onKeyDown",
	onKeyPress: "onKeyPress",
	onKeyUp: "onKeyUp",
	onLoad: "onLoad",
	onLoadEnd: "onLoadEnd",
	onLoadStart: "onLoadStart",
	onMount: "onMount",
	onMouseDown: "onMouseDown",
	onMouseEnter: "onMouseEnter",
	onMouseLeave: "onMouseLeave",
	onMouseMove: "onMouseMove",
	onMouseOut: "onMouseOut",
	onMouseOver: "onMouseOver",
	onMouseUp: "onMouseUp",
	onPageHide: "onPageHide",
	onPageShow: "onPageShow",
	onPopState: "onPopState",
	onProgress: "onProgress",
	onReadyStateChange: "onReadyStateChange",
	onReset: "onReset",
	onSearch: "onSearch",
	onSubmit: "onSubmit",
	onTimeout: "onTimeout",
	onUnload: "onUnload",
} as const

export const TypeOfTrim = {
	BOTH: "BOTH",
	LEFT: "LEFT",
	NONE: "NONE",
	RIGHT: "RIGHT",
} as const

export const TypeOfTruncation = {
	CHARACTERS: "CHARACTERS",
	LINES: "LINES",
	NONE: "NONE",
	ROUND: "ROUND",
	ROUND_DOWN: "ROUND_DOWN",
	ROUND_UP: "ROUND_UP",
	TRUNCATE: "TRUNCATE",
	WORDS: "WORDS",
} as const

export const TypeOfUpdate = {
	MERGE: "MERGE",
	REPLACE: "REPLACE",
} as const

export const WindowFocusTrigger = {
	onBlur: "onblur",
	onFocus: "onfocus",
} as const

export const WindowLoadingTrigger = {
	onBeforeUnload: "onbeforeunload",
	onLoad: "onload",
	onUnload: "onunload",
	DOM_CONTENT_LOAD_DATAED: "DOM_CONTENT_LOAD_DATAED",
} as const
