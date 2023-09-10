import not from "../not"

export default function getLineNumberingWidth(codeBlock: string): number {
	return codeBlock
		.trim()
		.split(/\n/)
		.filter((line) => not(/^(```|<!-- markdownlint|<!-- dprint)/.test(line)))
		.length.toString().length
}
