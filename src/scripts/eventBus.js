globalThis._subscriptions ??= {}

const listeners = {
	blur: [
		"focusout",
		function(event) {
			const id = event.target.id
			event.target && globalThis._subscriptions.blur?.[id]?.(event)
		},
	],
	click: [
		"click",
		function(event) {
			const id = event.target.id
			event.target && globalThis._subscriptions.click?.[id]?.(event)
		},
	],
	focus: [
		"focusin",
		function(event) {
			const id = event.target.id
			event.target && globalThis._subscriptions.focus?.[id]?.(event)
		},
	],
	input: [
		"input",
		function(event) {
			const id = event.target.id
			event.target && globalThis._subscriptions.input?.[id]?.(event)
		},
	],
	submit: [
		"submit",
		function(event) {
			const id = event.target.id
			event.target && globalThis._subscriptions.submit?.[id]?.(event)
		},
	],
}

globalThis._subscribe = function(type, id, callback) {
	if (!globalThis._subscriptions[type]?.length) {
		document.body.addEventListener(...listeners[type])
	}

	globalThis._subscriptions = {
		...globalThis._subscriptions,
		[type]: {
			...globalThis._subscriptions[type],
			[id]: callback,
		},
	}
}

globalThis._unsubscribe = function(type, id) {
	const { [id]: _, ...rest } = globalThis._subscriptions[type] || {}

	globalThis._subscriptions = {
		...globalThis._subscriptions,
		[type]: rest,
	}

	if (!globalThis._subscriptions[type]?.length) {
		document.body.removeEventListener(...listeners[type])
	}
}

console.info("« Event bus enabled. »")