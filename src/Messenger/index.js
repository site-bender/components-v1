// deno-lint-ignore no-extra-semi
;(function() {
	const hide = sessionStorage.getItem("no-warning")
	const warning = document.querySelector("aside.sb-warning")

	function hideWarning () {
		warning.classList.add("remove")
		sessionStorage.setItem("no-warning", true)
	}

	if (hide) {
		hideWarning()
		return
	}

	const closer = document.createElement("BUTTON")
	const x = document.createElement("SPAN")
	x.appendChild(document.createTextNode("×"))
	closer.classList.add("sb=closer")
	closer.setAttribute("aria-label", "×: Hide warning")
	closer.appendChild(x)
	closer.addEventListener("click", hideWarning)

	warning.appendChild(closer)

	console.info("« Warning closer injected. »")
})()
