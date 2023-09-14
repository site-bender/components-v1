async function pipeAsync(...fns) {
	const funcs = await Promise.all(fns)

	return function (input) {
		return funcs.reduce(async (out, f) => await f(out), input)
	}
}

export default pipeAsync
