import type { Configuration } from "../../types/configurations"

export default async function fetchInterface(
	name: string,
): Promise<Configuration> {
	const response = await fetch("https://imaker.hasura.app/v1/graphql", {
		method: "POST",
		headers: {
			"x-hasura-admin-secret":
				"vxqJlZIraNka8T4wiefSd7fdQEsmN27xa7W5viCW7RYJ4R8OPFdo8JwNeD4QG2oc",
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify({
			query: `query GetInterface($name: String) {
					Interface(where: {name: { _eq: $name } }) {
						id
						name
						createdAt
						children
					}
				}`,
			variables: {
				name,
			},
			operationName: "GetInterface",
		}),
	})

	const json = await response.json()

	return json?.data?.Interface[0]
}
