import not from "../not"

export default function getLineNumberingWidth(codeBlock: string): number {
	return codeBlock
		.trim()
		.split(/\n/)
		.filter((line) =>
			not(
				line.startsWith("```") ||
					line.startsWith("<!-- markdownlint") ||
					line.startsWith("<!-- dprint")
			)
		)
		.length.toString().length
}
