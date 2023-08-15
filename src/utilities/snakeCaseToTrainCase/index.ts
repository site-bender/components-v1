export default function snakeCaseToTrainCase(snakeCase = ""): string {
	return snakeCase.toLocaleLowerCase().replace(/_/g, "-")
}
