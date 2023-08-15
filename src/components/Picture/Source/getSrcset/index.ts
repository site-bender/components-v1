import type { ImageType } from "../../../../types"
import makePath from "../makePath"

export default function getSrcset(
	createPath = makePath,
	filename: string,
	type: ImageType,
	sizes: Array<string>,
): string {
	return sizes
		.map((size: string, index: number) =>
			createPath(filename, size, type, index)
		)
		.join(", ")
}
