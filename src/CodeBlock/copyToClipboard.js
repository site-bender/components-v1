// deno-lint-ignore no-extra-semi
;(function () {
	function addCopyToClipboard() {
		const blocks = document.querySelectorAll(".astro-code")

		blocks?.forEach((block) => {
			const button = document.createElement("button")

			button.classList.add("copy-to-clipboard")
			button.appendChild(document.createTextNode("copy"))
			button.addEventListener("click", function () {
				const code = block.querySelector("code")

				code &&
					navigator.clipboard.writeText(
						[...code.children].map((child) => child.innerText || "").join("\n")
					)

				this.innerText = "copied"

				setTimeout(() => {
					this.innerText = "copy"
				}, 3000)
			})

			block.appendChild(button)
		})

		console.info("« Clipboard copy enabled. »")
	}

	globalThis.addEventListener("DOMContentLoaded", addCopyToClipboard)
})()
