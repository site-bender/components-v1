export default function flattenOptions<T>(
	optionGroups: Array<Option<T>> | Array<OptionGroup<T>>,
): Array<Option<T>> {
	const isGrouped = Boolean((optionGroups?.[0] as OptionGroup<T>)?.options)

	return (
		isGrouped
			? (optionGroups as Array<OptionGroup<T>>).reduce<Array<Option<T>>>(
					(acc: Array<Option<T>>, optionGroup: OptionGroup<T>) => [
						...acc,
						...(optionGroup.options || []),
					],
					[],
			  )
			: optionGroups
	) as Array<Option<T>>
}
