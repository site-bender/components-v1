import { CHARS } from "../../constants"

export default function getSubject(title: string): string {
	return `[${title.toLocaleUpperCase().replace(CHARS.middot, "-")}]`
}
