import not from "../../operations/utilities/not"
import pipe from "../../operations/utilities/pipe"
import makeAsCurrency from "./formatters/makeAsCurrency"
import makeAsPercent from "./makeAsPercent"
import makeInsert from "./makeInsert"
import makeMaskValue from "./makeMaskValue"
import makeReplace from "./makeReplace"

enum TypeOfFormatter {
	AS_CURRENCY = "AS_CURRENCY",
	AS_PERCENT = "AS_PERCENT",
	INSERT = "INSERT",
	MASK_VALUE = "MASK_VALUE",
	REPLACE = "REPLACE",
}

const formatterMakers = {
	[TypeOfFormatter.AS_CURRENCY]: makeAsCurrency,
	[TypeOfFormatter.AS_PERCENT]: makeAsPercent,
	[TypeOfFormatter.INSERT]: makeInsert,
	[TypeOfFormatter.MASK_VALUE]: makeMaskValue,
	[TypeOfFormatter.REPLACE]: makeReplace,
}

export default function makeFormatter(
	config: MakeFormatterParameters | Array<MakeFormatterParameters>,
): Formatter {
	if (not(config)) {
		return (value: string) => value
	}

	const params: Array<MakeFormatterParameters> = Array.isArray(config)
		? config
		: [config]

	const formatters = params.map((format: MakeFormatterParameters) => {
		const formatMaker = formatterMakers[
			format.formatType as TypeOfFormatter
		] as (format: MakeFormatterParameters) => Formatter

		return formatMaker(format)
	})

	return pipe(formatters)
}
