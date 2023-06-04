import type { HTMLAttributes } from "astro/types"

type Props = HTMLAttributes<"p"> & {
	byAttribution?: boolean
	noDerivatives?: boolean
	nonCommercial?: boolean
	shareAlike?: boolean
}

type LicenseData = {
	href: string
	license: string
}

export default function getLicense(
	{ byAttribution, noDerivatives, nonCommercial, shareAlike }: Props,
): LicenseData {
	if (!byAttribution) {
		return {
			href: "https://creativecommons.org/publicdomain/zero/1.0/",
			license: "CC0 1.0 Universal Public Domain Dedication",
		}
	}

	const { saHref, saLicense } = noDerivatives
		? {
			saHref: "-nd",
			saLicense: "-NoDerivatives",
		}
		: shareAlike
		? {
			saHref: "-sa",
			saLicense: "-ShareAlike",
		}
		: { saHref: "", saLicense: "" }

	const { ncHref, ncLicense } = nonCommercial
		? {
			ncHref: "-nc",
			ncLicense: "-NonCommercial",
		}
		: { ncHref: "", ncLicense: "" }

	return {
		href: `https://creativecommons.org/licenses/by${ncHref}${saHref}/4.0/`,
		license: `Attribution${ncLicense}${saLicense} 4.0 International License`,
	}
}
