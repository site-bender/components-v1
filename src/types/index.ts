import type { HTMLTag, Polymorphic } from "astro/types"
import type {
	Audiobook,
	Book,
	ContactPointLeaf,
	Episode,
	Event,
	Float,
	ImageObject,
	Integer,
	MediaObject,
	Movie,
	MusicRecording,
	MusicRelease,
	Number,
	OrganizationLeaf,
	PersonLeaf,
	QuantitativeValueDistribution,
	Quotation,
	Schedule,
	SiteNavigationElement,
	SiteNavigationElementLeaf,
	Thing,
	WebPage,
	WebSite,
} from "../schema.org"
import type { AnchorTarget, Dataset, HTMLAttributes, Override } from "./html"

import type { Temporal } from "@js-temporal/polyfill"
import type { TIME_ZONE } from "../constants"

export type Frontmatter = {
	anchor?: string | undefined | null
	aria?: string | undefined | null
	blurb?: string | undefined | null
	client?: string | undefined | null
	content?: Array<string> | undefined | null
	dataset?: Dataset | undefined | null
	description?: string | undefined | null
	label?: string | undefined | null
	layout?: string | undefined | null
	page?: string | undefined | null
	publishedOn?: string | undefined | null
	rel?: string | undefined | null
	tags?: Array<string> | undefined | null
	thumbnail?: string | undefined | null
	title?: string | undefined | null
}

export type MDXInstance<T> = {
	compiledContent: () => string
	file: string
	frontmatter: T
	publishedOn?: string | undefined | null
	rawContent: () => string
	title?: string | undefined | null
	url: string | undefined
}

export type MailtoOptions = {
	subject?: string
	bcc?: Array<string>
	cc?: Array<string>
	replyTo?: string
}

export type MetadataProps<T, Tag extends HTMLTag> = Polymorphic<{ as: Tag }> &
	Override<
		HTMLAttributes,
		{
			as?: Tag
			microdata?: Partial<HTMLAttributes> | undefined | null
			properties?: Partial<T>
			property?: string | null | undefined
		}
	>

export type CreatePath = (
	filename: string,
	size: string,
	type: string,
	index: number
) => string

export type ImageMediaType =
	| "image/jpeg"
	| "image/png"
	| "image/webp"
	| "image/avif"
	| "image/svg"

export type ImageSource = {
	media?: string
	sizes: Array<string>
	types?: Array<ImageType>
}

export type ImageType = "jpeg" | "png" | "webp" | "avif" | "svg"

export type LinkAttributes = Override<
	HTMLAttributes,
	{
		charset?: string | undefined | null
		crossorigin?: boolean | string | undefined | null
		download?: string | boolean | undefined | null
		fetchpriority?: "auto" | "high" | "low" | undefined | null
		href?: string | URL | undefined | null
		hreflang?: string | undefined | null
		imagesrcset?: string | undefined | null
		imagesizes?: string | undefined | null
		integrity?: string | undefined | null
		label?: string | undefined | null
		media?: string | undefined | null
		ping?: string | undefined | null
		referrerpolicy?: ReferrerPolicy | undefined | null
		rel?: string | undefined | null
		sizes?: string | undefined | null
		target?: AnchorTarget | undefined | null
		type?: string | undefined | null
	}
>

export type ListAttributes = Override<
	HTMLAttributes,
	{
		reversed?: boolean | string | undefined | null
		start?: number | string | undefined | null
		type?: "1" | "a" | "A" | "i" | "I" | undefined | null
	}
>

export type BodyProps<T, Tag extends HTMLTag> = Override<
	MetadataProps<T, Tag>,
	{
		pageProperties?: Partial<WebPage> | undefined | null
		site?: string
		siteProperties?: Partial<WebSite> | undefined | null
	}
>

export type BooleanProps<T, Tag extends HTMLTag> = Override<
	MetadataProps<T, Tag>,
	{
		labelFalse?: string | undefined | null
		labelTrue: string
		value: boolean
	}
>

export type BookTitleProps<Tag extends HTMLTag> = Override<
	MetadataProps<Book, Tag>,
	{
		link?: Partial<LinkAttributes> | undefined | null
		outer?: Partial<HTMLAttributes> | undefined | null
	}
>

export type CardProps<T, Tag extends HTMLTag> = Override<
	MetadataProps<T, Tag>,
	{
		description?: Partial<HTMLAttributes> | undefined | null
		heading?: Partial<HTMLAttributes> | undefined | null
		href?: string | undefined | null
		isInvertible?: boolean | undefined | null
		level?: 1 | 2 | 3 | 4 | 5 | 6
		link?: Partial<LinkAttributes> | undefined | null
		picture?: PictureProps | undefined | null
		title?: string | undefined | null
		wrapper?: Partial<HTMLAttributes> | undefined | null
	}
>

export type CCLicenseProps<Tag extends HTMLTag> = Override<
	MetadataProps<Book, Tag>,
	{
		byAttribution?: boolean | undefined | null
		fill?: string | undefined | null
		link?: Partial<LinkAttributes> | undefined | null
		noDerivatives?: boolean | undefined | null
		nonCommercial?: boolean | undefined | null
		shareAlike?: boolean | undefined | null
		size?: string | undefined | null
		stroke?: string | undefined | null
	}
>

export type CodeBlockProps<T, Tag extends HTMLTag> = Override<
	MetadataProps<Book, Tag>,
	{
		caption?: string | undefined | null
		dataset?: Dataset | undefined | undefined | null
		index?: number | undefined | null
		isIndexed?: boolean | undefined | null
		legend?: Partial<HTMLAttributes> | undefined | null
		lineNumberingWidth?: number | undefined | null
		snippet?: MDXInstance<T> | undefined | null
	}
>

export type DurationProps<Tag extends HTMLTag> = Override<
	MetadataProps<
		Partial<
			| Audiobook
			| Episode
			| Event
			| MediaObject
			| Movie
			| MusicRecording
			| MusicRelease
			| QuantitativeValueDistribution
			| Schedule
		>,
		Tag
	>,
	{
		duration: string | Temporal.Duration
	}
>

export type EmailProps<Tag extends HTMLTag> = Override<
	MetadataProps<Partial<ContactPointLeaf | OrganizationLeaf | PersonLeaf>, Tag>,
	{
		email?: string | undefined | null
		link?: Partial<LinkAttributes> | undefined | null
		mailtoOptions?: MailtoOptions
		type?: "ContactPoint" | "Organization" | "Person"
		useMailto?: boolean | undefined | null
	}
>

export type FigureProps<Tag extends HTMLTag> = Override<
	MetadataProps<Thing, Tag>,
	{
		caption?: string | undefined | null
		dataset?: Dataset | undefined | undefined | null
		figcaption?: Partial<HTMLAttributes> | undefined | null
		index?: number | undefined | null
		isIndexed?: boolean | undefined | null
	}
>

export type FooterProps<Tag extends HTMLTag> = MetadataProps<
	Partial<Thing>,
	Tag
>

export type HeadProps<Tag extends HTMLTag> = Override<
	MetadataProps<Partial<Thing>, Tag>,
	{
		charset?: string
		favicon?: string
		properties?: WebSite
		site?: string
		viewport?: string
	}
>

export type HeaderProps<Tag extends HTMLTag> = MetadataProps<
	Partial<Thing>,
	Tag
>

export type InstantProps<Tag extends HTMLTag> = Override<
	MetadataProps<Partial<Thing>, Tag>,
	{
		instant: string | Temporal.Instant
		locales?: string | Array<string> | undefined | null
		options?: Intl.DateTimeFormatOptions | undefined | null
	}
>

export type LinkProps<Tag extends HTMLTag> = Override<
	MetadataProps<SiteNavigationElement, Tag>,
	{
		href: string
		label: string
		link?: Partial<LinkAttributes> | undefined | null
	}
>

export type NavProps<Tag extends HTMLTag> = Override<
	MetadataProps<Partial<SiteNavigationElementLeaf>, Tag>,
	{
		hideClass?: string | undefined | null
		nav: NavListProps<Tag>
	}
>

export type NavListProps<Tag extends HTMLTag> = Override<
	MetadataProps<Partial<SiteNavigationElementLeaf>, Tag>,
	{
		header?: HTMLAttributes | undefined | null
		hideClass?: string | undefined | null
		level?: 1 | 2 | 3 | 4 | 5 | 6
		links: Array<LinkProps<Tag>>
		list?: ListAttributes | undefined | null
		title?: string | undefined | null
		type?: "ol" | "ul" | undefined | null
	}
>

export type NumberProps<Tag extends HTMLTag> = Override<
	MetadataProps<Partial<Float | Integer | Number>, Tag>, // eslint-disable-line
	{
		instant: string | Temporal.Instant
		link?: Partial<LinkAttributes> | undefined | null
		locales?: string | Array<string> | undefined | null
		options?: NumberFormatOptions | undefined | null
		type?: "Number" | "Integer" | "Float"
		useTabularNumerals?: boolean | undefined | null
		value?: string | number | undefined | null
	}
>

export type PictureProps<Tag extends HTMLTag> = Override<
	MetadataProps<Partial<Thing>, Tag>,
	{
		alt: string
		createPath?: CreatePath | undefined | null
		dataset?: Dataset | undefined | null
		description?: string | undefined | null
		descriptionAttrs?: HTMLAttributes | undefined | null
		filename: string
		height?: number | undefined | null
		href?: string | undefined | null
		linkAttrs?: LinkAttributes | undefined | null
		loading?: "eager" | "lazy" | undefined | null
		properties?: Partial<ImageObject> | undefined | null
		sources?: Array<ImageSource> | undefined | null
		src: string
		width: number
		wrapper?: HTMLAttributes | undefined | null
	}
>

export type PictureElementProps<Tag extends HTMLTag> = Omit<
	PictureProps<Tag>,
	"wrapper"
>

export type PlainDateProps<Tag extends HTMLTag> = Override<
	MetadataProps<Partial<Thing>, Tag>,
	{
		calendar?: Calendar | Temporal.CalendarLike
		day?: number | string | undefined | null
		era?: string | undefined | null
		eraYear?: string | undefined | null
		locales?: string | Array<string> | undefined | null
		month?: number | string | undefined | null
		monthCode?: string | undefined | null
		options?: Intl.DateTimeFormatOptions | undefined | null
		plainDate?: string | Temporal.PlainDateLike | undefined | null
		year?: number | string | undefined | null
	}
>

export type PlainDateTimeProps<Tag extends HTMLTag> = Override<
	MetadataProps<Partial<Thing>, Tag>,
	{
		calendar?: Calendar | Temporal.CalendarLike
		day?: number | string | undefined | null
		era?: string | undefined | null
		eraYear?: string | undefined | null
		hour?: number | string | undefined | null
		locales?: string | Array<string> | undefined | null
		microsecond?: number | string | undefined | null
		millisecond?: number | string | undefined | null
		minute?: number | string | undefined | null
		month?: number | string | undefined | null
		monthCode?: string | undefined | null
		nanosecond?: number | string | undefined | null
		options?: Intl.DateTimeFormatOptions | undefined | null
		plainDateTime?: string | Temporal.PlainDateTimeLike | undefined | null
		second?: number | string | undefined | null
		year?: number | string | undefined | null
	}
>

export type PlainMonthDayProps<Tag extends HTMLTag> = Override<
	MetadataProps<Partial<Thing>, Tag>,
	{
		calendar?: Calendar | Temporal.CalendarLike
		day?: number | string | undefined | null
		era?: string | undefined | null
		eraYear?: string | undefined | null
		locales?: string | Array<string> | undefined | null
		month?: number | string | undefined | null
		monthCode?: string | undefined | null
		options?: Intl.DateTimeFormatOptions | undefined | null
		plainDate?: string | Temporal.PlainMonthDayLike | undefined | null
		year?: number | string | undefined | null
	}
>

export type PlainTimeProps<Tag extends HTMLTag> = Override<
	MetadataProps<Partial<Thing>, Tag>,
	{
		calendar?: Calendar | Temporal.CalendarLike
		hour?: number | string | undefined | null
		locales?: string | Array<string> | undefined | null
		microsecond?: number | string | undefined | null
		millisecond?: number | string | undefined | null
		minute?: number | string | undefined | null
		nanosecond?: number | string | undefined | null
		options?: Intl.DateTimeFormatOptions | undefined | null
		plainTime?: string | Temporal.PlainTimeLike | undefined | null
		second?: number | string | undefined | null
	}
>

export type PlainYearMonthProps<Tag extends HTMLTag> = Override<
	MetadataProps<Partial<Thing>, Tag>,
	{
		calendar?: Calendar | Temporal.CalendarLike
		era?: string | undefined | null
		eraYear?: string | undefined | null
		locales?: string | Array<string> | undefined | null
		month?: number | string | undefined | null
		monthCode?: string | undefined | null
		options?: Intl.DateTimeFormatOptions | undefined | null
		plainDate?: string | Temporal.PlainMonthDayLike | undefined | null
		year?: number | string | undefined | null
	}
>

export type PullQuoteProps<Tag extends HTMLTag> = Override<
	MetadataProps<Partial<Quotation>, Tag>,
	{
		author?: string
		authorItemprop?: string
		authorType?: "Person" | "Organization" | "Thing"
	}
>

export type StringProps<T extends Thing, Tag extends HTMLTag> = Override<
	MetadataProps<Partial<T>, Tag>,
	{
		link?: Partial<LinkAttributes> | undefined | null
		value?: string | undefined | null
	}
>

export type SourceProps = {
	createPath: CreatePath | undefined
	filename: string
	source: ImageSource
}

export type TelProps<Tag extends HTMLTag> = Override<
	MetadataProps<Partial<ContactPointLeaf | OrganizationLeaf | PersonLeaf>, Tag>,
	{
		link?: Partial<LinkAttributes> | undefined | null
		tel?: string | undefined | null
		useTel?: boolean | undefined | null
	}
>

export type TimeZoneProps<Tag extends HTMLTag> = Override<
	MetadataProps<Partial<Thing>, Tag>,
	{
		display?: "name" | "offset" | "both"
		localTime?: string | Temporal.Instant | Temporal.ZonedDateTime
		timeZone: string | Temporal.TimeZone | Temporal.ZonedDateTime
	}
>

export type UrlProps<Tag extends HTMLTag> = Override<
	MetadataProps<Partial<ContactPointLeaf | OrganizationLeaf | PersonLeaf>, Tag>,
	{
		link?: Partial<LinkAttributes> | undefined | null
		url?: string | undefined | null
		useLink?: boolean | undefined | null
	}
>

export type YearWeekProps<Tag extends HTMLTag> = Override<
	MetadataProps<Partial<Thing>, Tag>,
	{
		date?: Temporal.PlainDateLike | undefined | null
		plainDate?: string | Temporal.PlainMonthDayLike | undefined | null
		week?: number | string | undefined | null
		year?: number | string | undefined | null
	}
>

export type ZonedDateTimeProps<Tag extends HTMLTag> = Override<
	MetadataProps<Partial<Thing>, Tag>,
	{
		calendar?: Calendar | Temporal.CalendarLike
		day?: number | string | undefined | null
		era?: string | undefined | null
		eraYear?: string | undefined | null
		hour?: number | string | undefined | null
		locales?: string | Array<string> | undefined | null
		microsecond?: number | string | undefined | null
		millisecond?: number | string | undefined | null
		minute?: number | string | undefined | null
		month?: number | string | undefined | null
		monthCode?: string | undefined | null
		nanosecond?: number | string | undefined | null
		offset?: string
		options?: Intl.DateTimeFormatOptions | undefined | null
		second?: number | string | undefined | null
		timeZone?: keyof typeof TIME_ZONE | Temporal.TimeZoneLike
		year?: number | string | undefined | null
		zonedDateTime?: string | Temporal.ZonedDateTimeLike
	}
>

export type Calendar =
	| "buddhist"
	| "chinese"
	| "coptic"
	| "dangi"
	| "ethioaa"
	| "ethiopic"
	| "gregory"
	| "hebrew"
	| "indian"
	| "islamic-civil"
	| "islamic-rgsa"
	| "islamic-tbla"
	| "islamic-umalqura"
	| "islamic"
	| "iso8601"
	| "japanese"
	| "persian"
	| "roc"

export type NumberFormatOptions = {
	compactDisplay?: "short" | "long"
	currency?: CurrencyCode
	currencyDisplay?: "symbol" | "narrowSymbol" | "code" | "name"
	currencySign?: "standard" | "accounting"
	localeMatcher?: "best fit" | "lookup"
	maximumFractionDigits?: number // 0-20; default is larger of min and 3 for currency
	maximumSignificantDigits?: number // 1-21; default is 21
	minimumFractionDigits?: number // 0-20 default is 0 or 2 for currency
	minimumIntegerDigits?: number // 1-21; default is 1
	minimumSignificantDigits?: number // 1-21; default is 1
	notation?: "standard" | "scientific" | "engineering" | "compact"
	numberingSystem?: NumberingSystem
	signDisplay?: "auto" | "always" | "exceptZero" | "never"
	style?: NumberStyle
	unit?: Unit
	unitDisplay?: "short" | "long" | "narrow"
}

export type DateTimeFormatOptions = {
	dateStyle?: "full" | "long" | "medium" | "short"
	timeStyle?: "full" | "long" | "medium" | "short"
	calendar?: Calendar
	dayPeriod?: "narrow" | "short" | "long"
	numberingSystem?: NumberingSystem
	localeMatcher?: "best fit" | "lookup"
	timeZone?: keyof typeof TIME_ZONE
	hour12?: boolean
	hourCycle?: "h11" | "h12" | "h23" | "h24"
	formatMatcher?: "best fit" | "basic"
	weekday?: "long" | "short" | "narrow"
	era?: "long" | "short" | "narrow"
	year?: "numeric" | "2-digit"
	month?: "numeric" | "2-digit" | "long" | "short" | "narrow"
	day?: "numeric" | "2-digit"
	hour?: "numeric" | "2-digit"
	minute?: "numeric" | "2-digit"
	second?: "numeric" | "2-digit"
	fractionalSecondDigits?: number
	timeZoneName?:
		| "long"
		| "short"
		| "shortOffset"
		| "longOffset"
		| "shortGeneric"
		| "longGeneric"
}

export type NumberStyle = "decimal" | "currency" | "percent" | "unit"

export type CurrencyCode =
	| "AED"
	| "AFN"
	| "ALL"
	| "AMD"
	| "ANG"
	| "AOA"
	| "ARS"
	| "AUD"
	| "AWG"
	| "AZN"
	| "BAM"
	| "BBD"
	| "BDT"
	| "BGN"
	| "BHD"
	| "BIF"
	| "BMD"
	| "BND"
	| "BOB"
	| "BOV"
	| "BRL"
	| "BSD"
	| "BTN"
	| "BWP"
	| "BYN"
	| "BZD"
	| "CAD"
	| "CDF"
	| "CHE"
	| "CHF"
	| "CHW"
	| "CLF"
	| "CLP"
	| "CNY"
	| "COP"
	| "COU"
	| "CRC"
	| "CUC"
	| "CUP"
	| "CVE"
	| "CZK"
	| "DJF"
	| "DKK"
	| "DOP"
	| "DZD"
	| "EGP"
	| "ERN"
	| "ETB"
	| "EUR"
	| "FJD"
	| "FKP"
	| "GBP"
	| "GEL"
	| "GHS"
	| "GIP"
	| "GMD"
	| "GNF"
	| "GTQ"
	| "GYD"
	| "HKD"
	| "HNL"
	| "HTG"
	| "HUF"
	| "IDR"
	| "ILS"
	| "INR"
	| "IQD"
	| "IRR"
	| "ISK"
	| "JMD"
	| "JOD"
	| "JPY"
	| "KES"
	| "KGS"
	| "KHR"
	| "KMF"
	| "KPW"
	| "KRW"
	| "KWD"
	| "KYD"
	| "KZT"
	| "LAK"
	| "LBP"
	| "LKR"
	| "LRD"
	| "LSL"
	| "LYD"
	| "MAD"
	| "MDL"
	| "MGA"
	| "MKD"
	| "MMK"
	| "MNT"
	| "MOP"
	| "MRU"
	| "MUR"
	| "MVR"
	| "MWK"
	| "MXN"
	| "MXV"
	| "MYR"
	| "MZN"
	| "NAD"
	| "NGN"
	| "NIO"
	| "NOK"
	| "NPR"
	| "NZD"
	| "OMR"
	| "PAB"
	| "PEN"
	| "PGK"
	| "PHP"
	| "PKR"
	| "PLN"
	| "PYG"
	| "QAR"
	| "RON"
	| "RSD"
	| "RUB"
	| "RWF"
	| "SAR"
	| "SBD"
	| "SCR"
	| "SDG"
	| "SEK"
	| "SGD"
	| "SHP"
	| "SLE"
	| "SLL"
	| "SOS"
	| "SRD"
	| "SSP"
	| "STN"
	| "SVC"
	| "SYP"
	| "SZL"
	| "THB"
	| "TJS"
	| "TMT"
	| "TND"
	| "TOP"
	| "TRY"
	| "TTD"
	| "TWD"
	| "TZS"
	| "UAH"
	| "UGX"
	| "USD"
	| "USN"
	| "UYI"
	| "UYU"
	| "UYW"
	| "UZS"
	| "VED"
	| "VES"
	| "VND"
	| "VUV"
	| "WST"
	| "XAF"
	| "XAG"
	| "XAU"
	| "XBA"
	| "XBB"
	| "XBC"
	| "XBD"
	| "XCD"
	| "XDR"
	| "XOF"
	| "XPD"
	| "XPF"
	| "XPT"
	| "XSU"
	| "XTS"
	| "XUA"
	| "XXX"
	| "YER"
	| "ZAR"
	| "ZMW"
	| "ZWL"

export type NumberingSystem =
	| "arab"
	| "arabext"
	| "bali"
	| "beng"
	| "deva"
	| "fullwide"
	| "gujr"
	| "guru"
	| "hanidec"
	| "khmr"
	| "kinda"
	| "laoo"
	| "latn"
	| "limb"
	| "mlym"
	| "mong"
	| "mymr"
	| "orya"
	| "tamldec"
	| "telu"
	| "thai"
	| "tibt"

export type Unit =
	| "acre"
	| "bit"
	| "byte"
	| "celsius"
	| "centimeter"
	| "day"
	| "degree"
	| "fahrenheit"
	| "fluid-ounce"
	| "foot"
	| "gallon"
	| "gigabit"
	| "gigabyte"
	| "gram"
	| "hectare"
	| "hour"
	| "inch"
	| "kilobit"
	| "kilobyte"
	| "kilogram"
	| "kilometer"
	| "liter"
	| "megabit"
	| "megabyte"
	| "meter"
	| "mile"
	| "mile-scandinavian"
	| "milliliter"
	| "millimeter"
	| "millisecond"
	| "minute"
	| "month"
	| "ounce"
	| "percent"
	| "petabyte"
	| "pound"
	| "second"
	| "stone"
	| "terabit"
	| "terabyte"
	| "week"
	| "yard"
	| "year"
