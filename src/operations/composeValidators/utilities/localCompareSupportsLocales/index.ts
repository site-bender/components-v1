export default function localeCompareSupportsLocales(): boolean {
	try {
		"foo".localeCompare("bar", "i")
	} catch (e) {
		return (e as Error).name === "RangeError"
	}

	/* istanbul ignore next */
	return false
}
