import type { Dataset } from "../../types/html"
import toTrainCase from "../toTrainCase"

export default function mapDataset(
	dataset: Dataset = {},
	prefix = "data",
): Dataset {
	return Object.keys(dataset).reduce(
		(out, key) => ({
			...out,
			[`${prefix}-${toTrainCase(key)}`]: dataset[key],
		}),
		{},
	)
}
