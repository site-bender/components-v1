import type { Options } from "../../../types/form"

export default function getOptionsCount(opts: Options): number {
	return opts.reduce(
		(acc, opt) => acc + (opt.options?.length ? opt.options.length + 1 : 1),
		0,
	)
}
