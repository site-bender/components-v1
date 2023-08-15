export default function pipe(fs: Array<Formatter>): Formatter {
	return (value: string) => fs.reduce((out, f) => f(out), value)
}
