export default function flattenOptions(optionGroups) {
	const isGrouped = Boolean(optionGroups?.[0]?.options)

	return isGrouped
		? optionGroups.reduce((acc, optionGroup) => {
				if (optionGroup.options) {
					acc.concat(optionGroup.options)
				}

				return acc
		  }, [])
		: optionGroups
}
