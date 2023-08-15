import type { Injector } from "../../../../types/operations"
import type { Value } from "../../../../types/values"

export default function makeNoOp(): Injector {
	return function noOp() {
		return {} as Value
	}
}
