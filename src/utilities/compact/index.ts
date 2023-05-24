export default function compact<T>(arr: Array<T>): Array<T> {
	return arr.filter((item) => item !== undefined && item !== null)
}
