import pipe from "."

const add = (x: number) => (y: number): number => x + y
const multiply = (x: number) => (y: number): number => x * y
const subtract = (x: number) => (y: number): number => y - x
const divide = (x: number) => (y: number): number => y / x

test("[pipe] accepts array of functions and returns a function that calls them sequentially", () => {
	expect(pipe([add(5), multiply(4), subtract(10), divide(2)])(0)).toBe(5)
})

test("[pipe] works as identity if no functions passed", () => {
	expect(pipe()(5)).toBe(5)
})
