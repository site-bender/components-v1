export default function snakeCaseToTitleCase(snakeStr = ""): string {
	if (!snakeStr) {
		return snakeStr
	}

	const [head, ...tail] = snakeStr

	return `${head?.toLocaleUpperCase()}${tail
		.map((c) => (c === "-" ? " " : c))
		.join("")}.`
}
