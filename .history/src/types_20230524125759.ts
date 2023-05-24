import type { CALENDAR, TIME_ZONE } from "./constants"

import type { Temporal } from "@js-temporal/polyfill"

export type Basedata = {
	authors: Array<LdPerson>;
	baseUrl: string;
	calendar: Calendar;
	charset: string;
	googleVerification: string;
	imageUrl: string;
	language?: string;
	license: string;
	locale: string;
	publishers: Array<LdOrganization>;
	robots: string;
	siteName: string
	siteTitle: string;
	timeZone: keyof typeof TIME_ZONE;
	twitterCard: TwitterCard;
	type: string;
	viewport: string;
}

export type Calendar = typeof CALENDAR[keyof typeof CALENDAR]

export type Dataset = Record<string, string | number | boolean>

export type DateTimeFormatOptions = {
	weekday?: "narrow" | "short" | "long" | undefined
	era?: "narrow" | "short" | "long"
	year?: "numeric" | "2-digit" | undefined
	month?: "numeric" | "2-digit" | "narrow" | "short" | "long" | undefined
	day?: "numeric" | "2-digit" | undefined
	hour?: "numeric" | "2-digit" | undefined
	minute?: "numeric" | "2-digit" | undefined
	second?: "numeric" | "2-digit" | undefined
	timeZoneName?: "short" | "long" | undefined
	timeZone?: string | Temporal.TimeZoneProtocol
	hour12?: boolean
	hourCycle?: "h11" | "h12" | "h23" | "h24"
	formatMatcher?: "basic" | "best fit"
}

export type ImageSource = {
	media?: string
	sizes: Array<string>
	types?: Array<"avif" | "png" | "webp">
}

export type ImageType =
	| "image/jpeg"
	| "image/png"
	| "image/webp"
	| "image/avif"
	| "image/svg"

	export type LdArticle = {
		"@type": "Article"
		author?: Array<LdPerson>
		datePublished?: string | Date
		dateModified?: string | Date
		description: string | undefined
		headline: string | undefined
		inLanguage?: string
		license?: string
		mainEntityOfPage?: string | undefined
		potentialAction?: Array<ReadAction>
		publisher: Array<LdOrganization>
		teaches?: string
		url: string | undefined
		version?: number | string
	}
	
	export type LdImage = {
		"@type": "ImageObject"
		"@id": string
		acquireLicensePage?: string
		contentUrl: string
		copyrightNotice: string
		creator?: {
			"@id": string
		}
		creditText: string
		height?: string | number | undefined
		inLanguage: string
		license: string
		url: string
		width?: string | number | undefined
	}
	
	export type LdPerson = {
		"@type"?: "Person" | string
		name: string
		jobTitle?: string
		url?: string
	}
	
	export type LdOrganization = {
		"@type"?: "Organization" | string
		name: string
		url?: string
	}
	
export type Messages = Partial<
	Record<
		| "customError"
		| "patternMismatch"
		| "typeMismatch"
		| "rangeOverflow"
		| "rangeUnderflow"
		| "stepMismatch"
		| "tooLong"
		| "tooShort"
		| "valueMissing"
		| "badInput",
		string
	>
>

export type Metadata = {
	article?: {
		authors?: Array<string | LdPerson> | undefined
		license?: string | undefined
		modifiedDate?: Date | string | undefined
		publishers?: Array<string | LdOrganization> | undefined
		publishDate?: Date | string
		tags?: Array<string> | undefined
		title?: string
	} | undefined
	author?: string | LdPerson | undefined
	blurb?: string | undefined
	canonical: string
	chapter?: number
	charset?: string | undefined
	children?: Array<string>
	description: string
	image?: {
		alt: string
		filename?: string
		height?: string | number
		isInvertible?: boolean
		license?: string
		src?: string
		sources?: Array<ImageSource>
		type?: ImageType | undefined
		width?: string | number
	} | undefined
	index?: number
	label?: string
	language?: string | undefined
	locale?: string | undefined
	modifiedDate?: Date | string | undefined
	noAnalytics?: boolean | undefined
	publishDate?: Date | string
	robots?: "all" | "nofollow" | "noindex" | "none" | string | undefined
	siteName?: string | undefined
	subtitle?: string
	thumbnailUrl?: string | undefined
	title: string
	twitter?: {
		card: TwitterCard
		creator?: string | undefined
		description?: string | undefined
		image?: string | undefined
		imageAlt?: string | undefined
		site?: string | undefined
		title?: string | undefined
	} | undefined
	type?: ObjectType
	url?: string | undefined
	viewport?: string | undefined
}

export type ObjectType = "website" | "article" | "profile"

export type ReadAction = {
	"@type": "ReadAction"
	target: Array<string>
}

export type TwitterCard = "app" | "player" | "summary" | "summary_large_image"
