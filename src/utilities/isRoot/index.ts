export default function isRoot(pathname: string): boolean {
	return pathname === "/" || pathname.startsWith("?") ||
		pathname.startsWith("#") || pathname === ""
}
