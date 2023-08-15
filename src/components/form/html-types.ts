// All the WAI-ARIA 1.1 attributes from https://www.w3.org/TR/wai-aria-1.1/
export type AriaAttributes = {
	/** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
	"aria-activedescendant"?: string | undefined | null
	/** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
	"aria-atomic"?: boolean | "false" | "true" | undefined | null
	/**
	 * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
	 * presented if they are made.
	 */
	"aria-autocomplete"?: "none" | "inline" | "list" | "both" | undefined | null
	/** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
	"aria-busy"?: boolean | "false" | "true" | undefined | null
	/**
	 * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
	 * @see aria-pressed @see aria-selected.
	 */
	"aria-checked"?: boolean | "false" | "mixed" | "true" | undefined | null
	/**
	 * Defines the total number of columns in a table, grid, or treegrid.
	 * @see aria-colindex.
	 */
	"aria-colcount"?: number | string | undefined | null
	/**
	 * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
	 * @see aria-colcount @see aria-colspan.
	 */
	"aria-colindex"?: number | string | undefined | null
	/**
	 * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
	 * @see aria-colindex @see aria-rowspan.
	 */
	"aria-colspan"?: number | string | undefined | null
	/**
	 * Identifies the element (or elements) whose contents or presence are controlled by the current element.
	 * @see aria-owns.
	 */
	"aria-controls"?: string | undefined | null
	/** Indicates the element that represents the current item within a container or set of related elements. */
	"aria-current"?:
		| boolean
		| "false"
		| "true"
		| "page"
		| "step"
		| "location"
		| "date"
		| "time"
		| undefined
		| null
	/**
	 * Identifies the element (or elements) that describes the object.
	 * @see aria-labelledby
	 */
	"aria-describedby"?: string | undefined | null
	/**
	 * Identifies the element that provides a detailed, extended description for the object.
	 * @see aria-describedby.
	 */
	"aria-details"?: string | undefined | null
	/**
	 * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
	 * @see aria-hidden @see aria-readonly.
	 */
	"aria-disabled"?: boolean | "false" | "true" | undefined | null
	/**
	 * Indicates what functions can be performed when a dragged object is released on the drop target.
	 * @deprecated in ARIA 1.1
	 */
	"aria-dropeffect"?:
		| "none"
		| "copy"
		| "execute"
		| "link"
		| "move"
		| "popup"
		| undefined
		| null
	/**
	 * Identifies the element that provides an error message for the object.
	 * @see aria-invalid @see aria-describedby.
	 */
	"aria-errormessage"?: string | undefined | null
	/** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
	"aria-expanded"?: boolean | "false" | "true" | undefined | null
	/**
	 * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
	 * allows assistive technology to override the general default of reading in document source order.
	 */
	"aria-flowto"?: string | undefined | null
	/** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
	"aria-haspopup"?:
		| boolean
		| "false"
		| "true"
		| "menu"
		| "listbox"
		| "tree"
		| "grid"
		| "dialog"
		| undefined
		| null
	/**
	 * Indicates whether the element is exposed to an accessibility API.
	 * @see aria-disabled.
	 */
	"aria-hidden"?: boolean | "false" | "true" | undefined | null
	/**
	 * Indicates the entered value does not conform to the format expected by the application.
	 * @see aria-errormessage.
	 */
	"aria-invalid"?:
		| boolean
		| "false"
		| "true"
		| "grammar"
		| "spelling"
		| undefined
		| null
	/** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
	"aria-keyshortcuts"?: string | undefined | null
	/**
	 * Defines a string value that labels the current element.
	 * @see aria-labelledby.
	 */
	"aria-label"?: string | undefined | null
	/**
	 * Identifies the element (or elements) that labels the current element.
	 * @see aria-describedby.
	 */
	"aria-labelledby"?: string | undefined | null
	/** Defines the hierarchical level of an element within a structure. */
	"aria-level"?: number | string | undefined | null
	/** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
	"aria-live"?: "off" | "assertive" | "polite" | undefined | null
	/** Indicates whether an element is modal when displayed. */
	"aria-modal"?: boolean | "false" | "true" | undefined | null
	/** Indicates whether a text box accepts multiple lines of input or only a single line. */
	"aria-multiline"?: boolean | "false" | "true" | undefined | null
	/** Indicates that the user may select more than one item from the current selectable descendants. */
	"aria-multiselectable"?: boolean | "false" | "true" | undefined | null
	/** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
	"aria-orientation"?: "horizontal" | "vertical" | undefined | null
	/**
	 * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
	 * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
	 * @see aria-controls.
	 */
	"aria-owns"?: string | undefined | null
	/**
	 * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
	 * A hint could be a sample value or a brief description of the expected format.
	 */
	"aria-placeholder"?: string | undefined | null
	/**
	 * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
	 * @see aria-setsize.
	 */
	"aria-posinset"?: number | string | undefined | null
	/**
	 * Indicates the current "pressed" state of toggle buttons.
	 * @see aria-checked @see aria-selected.
	 */
	"aria-pressed"?: boolean | "false" | "mixed" | "true" | undefined | null
	/**
	 * Indicates that the element is not editable, but is otherwise operable.
	 * @see aria-disabled.
	 */
	"aria-readonly"?: boolean | "false" | "true" | undefined | null
	/**
	 * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
	 * @see aria-atomic.
	 */
	"aria-relevant"?:
		| "additions"
		| "additions removals"
		| "additions text"
		| "all"
		| "removals"
		| "removals additions"
		| "removals text"
		| "text"
		| "text additions"
		| "text removals"
		| undefined
		| null
	/** Indicates that user input is required on the element before a form may be submitted. */
	"aria-required"?: boolean | "false" | "true" | undefined | null
	/** Defines a human-readable, author-localized description for the role of an element. */
	"aria-roledescription"?: string | undefined | null
	/**
	 * Defines the total number of rows in a table, grid, or treegrid.
	 * @see aria-rowindex.
	 */
	"aria-rowcount"?: number | string | undefined | null
	/**
	 * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
	 * @see aria-rowcount @see aria-rowspan.
	 */
	"aria-rowindex"?: number | string | undefined | null
	/**
	 * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
	 * @see aria-rowindex @see aria-colspan.
	 */
	"aria-rowspan"?: number | string | undefined | null
	/**
	 * Indicates the current "selected" state of various widgets.
	 * @see aria-checked @see aria-pressed.
	 */
	"aria-selected"?: boolean | "false" | "true" | undefined | null
	/**
	 * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
	 * @see aria-posinset.
	 */
	"aria-setsize"?: number | string | undefined | null
	/** Indicates if items in a table or grid are sorted in ascending or descending order. */
	"aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined | null
	/** Defines the maximum allowed value for a range widget. */
	"aria-valuemax"?: number | string | undefined | null
	/** Defines the minimum allowed value for a range widget. */
	"aria-valuemin"?: number | string | undefined | null
	/**
	 * Defines the current value for a range widget.
	 * @see aria-valuetext.
	 */
	"aria-valuenow"?: number | string | undefined | null
	/** Defines the human readable text alternative of aria-valuenow for a range widget. */
	"aria-valuetext"?: string | undefined | null
}

export type AriaRole =
	| "alert"
	| "alertdialog"
	| "application"
	| "article"
	| "banner"
	| "button"
	| "cell"
	| "checkbox"
	| "columnheader"
	| "combobox"
	| "complementary"
	| "contentinfo"
	| "definition"
	| "dialog"
	| "directory"
	| "document"
	| "feed"
	| "figure"
	| "form"
	| "grid"
	| "gridcell"
	| "group"
	| "heading"
	| "img"
	| "link"
	| "list"
	| "listbox"
	| "listitem"
	| "log"
	| "main"
	| "marquee"
	| "math"
	| "menu"
	| "menubar"
	| "menuitem"
	| "menuitemcheckbox"
	| "menuitemradio"
	| "navigation"
	| "none"
	| "note"
	| "option"
	| "presentation"
	| "progressbar"
	| "radio"
	| "radiogroup"
	| "region"
	| "row"
	| "rowgroup"
	| "rowheader"
	| "scrollbar"
	| "search"
	| "searchbox"
	| "separator"
	| "slider"
	| "spinbutton"
	| "status"
	| "switch"
	| "tab"
	| "table"
	| "tablist"
	| "tabpanel"
	| "term"
	| "textbox"
	| "timer"
	| "toolbar"
	| "tooltip"
	| "tree"
	| "treegrid"
	| "treeitem"

export type DOMAttributes = {
	children?: Children

	// Clipboard Events
	oncopy?: string | undefined | null
	oncut?: string | undefined | null
	onpaste?: string | undefined | null

	// Composition Events
	oncompositionend?: string | undefined | null
	oncompositionstart?: string | undefined | null
	oncompositionupdate?: string | undefined | null

	// Focus Events
	onfocus?: string | undefined | null
	onfocusin?: string | undefined | null
	onfocusout?: string | undefined | null
	onblur?: string | undefined | null

	// Form Events
	onchange?: string | undefined | null
	oninput?: string | undefined | null
	onreset?: string | undefined | null
	onsubmit?: string | undefined | null
	oninvalid?: string | undefined | null
	onbeforeinput?: string | undefined | null

	// Image Events
	onload?: string | undefined | null
	onerror?: string | undefined | null // also a Media Event

	// Detail Events
	ontoggle?: string | undefined | null

	// Keyboard Events
	onkeydown?: string | undefined | null
	onkeypress?: string | undefined | null
	onkeyup?: string | undefined | null

	// Media Events
	onabort?: string | undefined | null
	oncanplay?: string | undefined | null
	oncanplaythrough?: string | undefined | null
	oncuechange?: string | undefined | null
	ondurationchange?: string | undefined | null
	onemptied?: string | undefined | null
	onencrypted?: string | undefined | null
	onended?: string | undefined | null
	onloadeddata?: string | undefined | null
	onloadedmetadata?: string | undefined | null
	onloadstart?: string | undefined | null
	onpause?: string | undefined | null
	onplay?: string | undefined | null
	onplaying?: string | undefined | null
	onprogress?: string | undefined | null
	onratechange?: string | undefined | null
	onseeked?: string | undefined | null
	onseeking?: string | undefined | null
	onstalled?: string | undefined | null
	onsuspend?: string | undefined | null
	ontimeupdate?: string | undefined | null
	onvolumechange?: string | undefined | null
	onwaiting?: string | undefined | null

	// MouseEvents
	onauxclick?: string | undefined | null
	onclick?: string | undefined | null
	oncontextmenu?: string | undefined | null
	ondblclick?: string | undefined | null
	ondrag?: string | undefined | null
	ondragend?: string | undefined | null
	ondragenter?: string | undefined | null
	ondragexit?: string | undefined | null
	ondragleave?: string | undefined | null
	ondragover?: string | undefined | null
	ondragstart?: string | undefined | null
	ondrop?: string | undefined | null
	onmousedown?: string | undefined | null
	onmouseenter?: string | undefined | null
	onmouseleave?: string | undefined | null
	onmousemove?: string | undefined | null
	onmouseout?: string | undefined | null
	onmouseover?: string | undefined | null
	onmouseup?: string | undefined | null

	// Selection Events
	onselect?: string | undefined | null
	onselectionchange?: string | undefined | null
	onselectstart?: string | undefined | null

	// Touch Events
	ontouchcancel?: string | undefined | null
	ontouchend?: string | undefined | null
	ontouchmove?: string | undefined | null
	ontouchstart?: string | undefined | null

	// Pointer Events
	ongotpointercapture?: string | undefined | null
	onpointercancel?: string | undefined | null
	onpointerdown?: string | undefined | null
	onpointerenter?: string | undefined | null
	onpointerleave?: string | undefined | null
	onpointermove?: string | undefined | null
	onpointerout?: string | undefined | null
	onpointerover?: string | undefined | null
	onpointerup?: string | undefined | null
	onlostpointercapture?: string | undefined | null

	// UI Events
	onscroll?: string | undefined | null
	onresize?: string | undefined | null

	// Wheel Events
	onwheel?: string | undefined | null

	// Animation Events
	onanimationstart?: string | undefined | null
	onanimationend?: string | undefined | null
	onanimationiteration?: string | undefined | null

	// Transition Events
	ontransitionstart?: string | undefined | null
	ontransitionrun?: string | undefined | null
	ontransitionend?: string | undefined | null
	ontransitioncancel?: string | undefined | null

	// Message Events
	onmessage?: string | undefined | null
	onmessageerror?: string | undefined | null

	// Global Events
	oncancel?: string | undefined | null
	onclose?: string | undefined | null
	onfullscreenchange?: string | undefined | null
	onfullscreenerror?: string | undefined | null
}

export type AstroBuiltinAttributes = {
	"class:list"?:
		| Record<string, boolean>
		| Record<unknown, unknown>
		| Iterable<string>
		| Iterable<unknown>
		| string
	"set:html"?: unknown
	"set:text"?: unknown
	"is:raw"?: boolean
}

export type HTMLAttributes =
	& AriaAttributes
	& DOMAttributes
	& AstroBuiltinAttributes
	& {
		// Standard HTML Attributes
		accesskey?: string | undefined | null
		autocapitalize?: string | undefined | null
		autofocus?: boolean | string | undefined | null
		class?: string | undefined | null
		contenteditable?:
			| "true"
			| "false"
			| boolean
			| "inherit"
			| string
			| undefined
			| null
		dir?: string | undefined | null
		draggable?: "true" | "false" | boolean | undefined | null
		enterkeyhint?:
			| "enter"
			| "done"
			| "go"
			| "next"
			| "previous"
			| "search"
			| "send"
			| undefined
			| null
		hidden?: boolean | string | undefined | null
		id?: string | undefined | null
		inert?: boolean | string | undefined | null
		inputmode?:
			| "none"
			| "text"
			| "tel"
			| "url"
			| "email"
			| "numeric"
			| "decimal"
			| "search"
			| undefined
			| null
		is?: string | undefined | null
		itemid?: string | undefined | null
		itemprop?: string | undefined | null
		itemref?: string | undefined | null
		itemscope?: boolean | string | undefined | null
		itemtype?: string | undefined | null
		lang?: string | undefined | null
		slot?: string | undefined | null
		spellcheck?: "true" | "false" | boolean | undefined | null
		style?: string | Record<string, unknown> | undefined | null
		tabindex?: number | string | undefined | null
		title?: string | undefined | null
		translate?: "yes" | "no" | undefined | null

		// <command>, <menuitem>
		radiogroup?: string | undefined | null

		// WAI-ARIA
		role?: AriaRole | undefined | null

		// RDFa Attributes
		about?: string | undefined | null
		datatype?: string | undefined | null
		inlist?: unknown
		prefix?: string | undefined | null
		property?: string | undefined | null
		resource?: string | undefined | null
		typeof?: string | undefined | null
		vocab?: string | undefined | null

		// Non-standard Attributes
		contextmenu?: string | undefined | null // Obsolete
		autosave?: string | undefined | null // Apple exclusive
		color?: string | undefined | null
		results?: number | string | undefined | null
		security?: string | undefined | null
		unselectable?: "on" | "off" | undefined | null // Internet Explorer
	}
