import type { MailtoOptions } from "../../types"
import compact from "../compact"

export default function createMailto(
	email: string,
	options: MailtoOptions = {}
): string {
	const { bcc, cc, subject, replyTo } = options

	const opts = compact([
		subject ? `subject=${subject}` : undefined,
		bcc ? `bcc=${bcc.join(",")}` : undefined,
		cc ? `cc=${cc.join(",")}` : undefined,
		replyTo ? `reply-to=${replyTo}` : undefined,
	])

	return `mailto:${email}${opts.length ? `?${opts.join("&")}` : ""}`
}
