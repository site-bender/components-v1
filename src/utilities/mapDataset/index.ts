import type { Dataset } from "../../types"
import toTrainCase from "../toTrainCase"

export default function mapDataset(dataset: Dataset = {}): Dataset {
	return Object.keys(dataset).reduce(
		(out, key) => ({
			...out,
			[`data-${toTrainCase(key)}`]: dataset[key],
		}),
		{},
	)
}
