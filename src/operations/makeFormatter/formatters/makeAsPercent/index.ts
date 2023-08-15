const numericPattern = /^[+-]?[1-9]?\d+(\.\d+)?$/

export default function makeAsPercent(): Formatter {
	return (value: number | string) => {
		const out = String(value)

		return numericPattern.test(out) ? `${out}%` : out
	}
}
