export default function collapseWhitespace(str: string): string {
	return str.trim().replace(/\s+/g, " ")
}
