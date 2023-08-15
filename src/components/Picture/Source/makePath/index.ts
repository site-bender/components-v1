export default function makePath(
	filename: string,
	size: string,
	type: string,
	index: number,
) {
	return `/images/${size}/${filename}.${type} ${index + 1}x`
}
