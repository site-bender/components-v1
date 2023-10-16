import type { Dataset, HTMLAttributes } from "../../types/html"
import mapDataset from "../mapDataset"
import unique from "../unique"

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
		class: cls,
		"class:list": cList = [],
		condition,
		dataset = {} as Dataset,
		format,
		prefix = "data",
		validation,
		...attributes
	} = data as Partial<Attributes>

	const classList = unique([
		...(cls ? [cls] : []),
		...(Array.isArray(cList) ? cList : []),
		...classes,
	])

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
		"class:list": classList,
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
