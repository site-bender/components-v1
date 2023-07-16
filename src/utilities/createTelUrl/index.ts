export default function createTelUrl(tel = ""): string {
	return `tel:${tel.replaceAll(/[ -]/g, "")}`
}
