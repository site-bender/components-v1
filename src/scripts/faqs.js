// deno-lint-ignore no-extra-semi
;(function() {
	const header = document.querySelector("header#faqs")

	const showAllButton = globalThis._makeElement(
		"BUTTON",
		{
			type: "button",
		},
		[globalThis._makeTextNode("Show all")],
	)

	showAllButton.addEventListener("click", function(e) {
		e.preventDefault()
		const details = [...document.getElementsByTagName("DETAILS")]
		details.forEach((elem) => elem.setAttribute("open", true))
	})

	const showAllItem = globalThis._makeElement("LI", {}, [showAllButton])

	const hideAllButton = globalThis._makeElement(
		"BUTTON",
		{
			type: "button",
		},
		[globalThis._makeTextNode("Hide all")],
	)

	hideAllButton.addEventListener("click", function(e) {
		e.preventDefault()
		const details = [...document.getElementsByTagName("DETAILS")]
		details.forEach((elem) => elem.removeAttribute("open"))
	})

	const hideAllItem = globalThis._makeElement("LI", {}, [hideAllButton])

	const ul = globalThis._makeElement(
		"UL",
		{
			class: "faq-show-hide-buttons",
		},
		[showAllItem, hideAllItem],
	)

	header.appendChild(ul)

	console.info("« FAQ buttons injected. »")
})()
