export default function camelCaseToSentenceCase(camelCase: string): string {
	const [firstWord, ...remainingWords] = camelCase.split(/(?=[A-Z])/)
	const [firstLetter, ...restOfFirstWord] = firstWord.split("")

	return (
		firstLetter.toLocaleUpperCase() +
		[restOfFirstWord.join(""), ...remainingWords].join(" ").toLocaleLowerCase()
	)
}
