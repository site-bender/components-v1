import type { Dataset, HTMLAttributes } from "../../types/html"

import createClassList from "../createClassList"
import mapDataset from "../mapDataset"

export default function mapAttributes(
	data: Partial<HTMLAttributes> | null = {},
	classes: Array<string> = [],
	...attrs: Array<HTMLAttributes>
) {
	const {
		"class:list": classList = [],
		condition,
		dataset = {} as Dataset,
		format,
		prefix = "data",
		validation,
		...attributes
	} = data as Partial<HTMLAttributes>

	const sbCondition =
		condition && typeof condition !== "string"
			? JSON.stringify(condition)
			: condition
	const sbFormat =
		format && typeof format !== "string" ? JSON.stringify(format) : format
	const sbValidation =
		validation && typeof validation !== "string"
			? JSON.stringify(validation)
			: validation

	return {
		...attributes,
		"class:list": createClassList(...classes, classList as Array<string>),
		...mapDataset(
			{
				...dataset,
				...(sbCondition ? { sbCondition } : {}),
				...(sbFormat ? { sbFormat } : {}),
				...(sbValidation ? { sbValidation } : {}),
			},
			prefix as string,
		),
		...attrs,
	}
}
