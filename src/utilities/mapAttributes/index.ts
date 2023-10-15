import type { Dataset, HTMLAttributes } from "../../types/html"

import createClassList from "../createClassList"
import mapDataset from "../mapDataset"

type Attributes = HTMLAttributes & {
	format?: string | undefined | null
	validation?: string | undefined | null
}

export default function mapAttributes(
	data: Partial<Attributes> | null = {},
	classes: Array<string> = [],
	...attrs: Array<Attributes>
) {
	const {
		"class:list": classList = [],
		condition,
		dataset = {} as Dataset,
		format,
		prefix = "data",
		validation,
		...attributes
	} = data as Partial<Attributes>

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
