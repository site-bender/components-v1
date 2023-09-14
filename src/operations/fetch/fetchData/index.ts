export default async function fetchData(
	operationName: string,
	query: string,
	url,
	variables: Record<string, unknown>,
): Promise<Record<string, unknown>> {
	const response = await fetch(url, {
		method: "POST",
		headers: {
			"x-hasura-admin-secret":
				"vxqJlZIraNka8T4wiefSd7fdQEsmN27xa7W5viCW7RYJ4R8OPFdo8JwNeD4QG2oc",
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify({
			query,
			variables,
			operationName,
		}),
	})

	const json = await response.json()

	return json?.data
}
