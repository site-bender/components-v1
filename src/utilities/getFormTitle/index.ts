import { CHARS } from "../../constants"

export default function getFormTitle(form: string, msg = ""): string {
	return `${msg} ${CHARS.middot} ${form}`.trim()
}
