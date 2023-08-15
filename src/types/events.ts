import type {
	AjaxTrigger,
	ClipboardTrigger,
	DocumentLoadingTrigger,
	ElementFocusTrigger,
	FileReaderTrigger,
	FormTrigger,
	FullScreenTrigger,
	HistoryTrigger,
	InputElementTrigger,
	InputTrigger,
	KeyboardTrigger,
	MouseTrigger,
	TypeOfAction,
	TypeOfTrigger,
	WindowFocusTrigger,
	WindowLoadingTrigger,
} from "./enums"

export type Action = {
	action: typeof TypeOfAction
	payload?: Record<string, unknown>
}

export type AjaxEvent = Partial<Record<keyof typeof AjaxTrigger, Action>>

export interface CustomEvent<T = unknown> extends Event {
	detail: T
}

export type TriggeredEvent = Partial<Record<keyof typeof TypeOfTrigger, Action>>

export type ClipboardEvent = Partial<
	Record<keyof typeof ClipboardTrigger, Action>
>

export type DocumentLoadingEvent = Record<
	keyof typeof DocumentLoadingTrigger,
	Action
>

export type ElementFocusEvent = Partial<
	Record<keyof typeof ElementFocusTrigger, Action>
>

export type FileReaderEvent = Partial<
	Record<keyof typeof FileReaderTrigger, Action>
>

export type FormEvent = Partial<Record<keyof typeof FormTrigger, Action>>

export type FullScreenEvent = Partial<
	Record<keyof typeof FullScreenTrigger, Action>
>

export type HistoryEvent = Partial<Record<keyof typeof HistoryTrigger, Action>>

export type InputElementEvent = Partial<
	Record<keyof typeof InputElementTrigger, Action>
>

export type InputEvent = Partial<Record<keyof typeof InputTrigger, Action>>

export type KeyboardEvent = Partial<
	Record<keyof typeof KeyboardTrigger, Action>
>

export type MouseEvent = Partial<Record<keyof typeof MouseTrigger, Action>>

export type WindowFocusEvent = Partial<
	Record<keyof typeof WindowFocusTrigger, Action>
>

export type WindowLoadingEvent = Record<
	keyof typeof WindowLoadingTrigger,
	Action
>

export type EventProps = {
	onAuxClick?: (e: Event) => void
	onClick?: (e: Event) => void
	onContextMenu?: (e: Event) => void
	onDblClick?: (e: Event) => void
	onMouseDown?: (e: Event) => void
	onMouseEnter?: (e: Event) => void
	onMouseLeave?: (e: Event) => void
	onMouseMove?: (e: Event) => void
	onMouseOut?: (e: Event) => void
	onMouseOver?: (e: Event) => void
	onMouseUp?: (e: Event) => void
}
