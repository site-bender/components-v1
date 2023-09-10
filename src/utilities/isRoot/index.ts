export default function isRoot(pathname: string): boolean {
	return /^\/?$/.test(pathname) || /^[?#]/.test(pathname)
}
