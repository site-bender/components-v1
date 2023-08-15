export default function pipe<T>(fns: Array<(t: T) => T> = []): (t: T) => T {
	return (input) => fns.reduce((out, fn) => fn(out), input)
}
