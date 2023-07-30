globalThis._makeElement = function(tagName, attributes = {}, children = []) {
	const elem = document.createElement(tagName)

	Object.entries(attributes).forEach(([key, value]) => {
		if (key === "dataset") {
			Object.entries(value || {}).forEach(([k, v]) => {
				elem.setAttribute(`data-${k}`, v)
			})
		} else {
			elem.setAttribute(key, String(value))
		}
	})

	children.forEach((child) => elem.appendChild(child))

	return elem
}

globalThis._makeTextNode = function(txt) {
	return document.createTextNode(txt)
}

console.info("« Element methods injected. »")
