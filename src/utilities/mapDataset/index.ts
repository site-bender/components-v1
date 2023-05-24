import type { Dataset } from "../../types"

export default function mapDataset(dataset: Dataset = {}): Dataset {
	return Object.keys(dataset).reduce((out, key) => ({
		...out,
		[`data-${key}`]: dataset[key],
	}), {})
}
