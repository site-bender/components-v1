import type { Temporal } from "@js-temporal/polyfill"
import type { HTMLTag, Polymorphic } from "astro/types"
import type { TIME_ZONE } from "../constants"

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
	Schedule,
	Thing,
} from "../schema.org"

import type {
	AnchorTarget,
	BaseAttributes,
	Dataset,
	HTMLAttributes,
	Override,
} from "./html"

export type MailtoOptions = {
	subject?: string
	bcc?: Array<string>
	cc?: Array<string>
	replyTo?: string
}

export type MetadataProps<T, Tag extends HTMLTag> =
	& Polymorphic<{ as: Tag }>
	& Override<HTMLAttributes, {
		as?: Tag
		properties?: Partial<T>
	}>

export type CreatePath = (
	filename: string,
	size: string,
	type: string,
	index: number,
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

export type ImageType =
	| "jpeg"
	| "png"
	| "webp"
	| "avif"
	| "svg"

export type LinkAttributes = Override<HTMLAttributes, {
	download?: string | boolean | undefined | null
	href?: string | URL | undefined | null
	hreflang?: string | undefined | null
	media?: string | undefined | null
	ping?: string | undefined | null
	rel?: string | undefined | null
	target?: AnchorTarget | undefined | null
	type?: string | undefined | null
	referrerpolicy?: ReferrerPolicy | undefined | null
}>

export type BooleanProps<T, Tag extends HTMLTag> = Override<
	MetadataProps<T, Tag>,
	{
		labelFalse?: string | undefined | null
		labelTrue: string
		microdata?: Partial<HTMLAttributes> | undefined | null
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
	MetadataProps<
		Partial<
			| ContactPointLeaf
			| OrganizationLeaf
			| PersonLeaf
		>,
		Tag
	>,
	{
		email?: string | undefined | null
		link?: Partial<LinkAttributes> | undefined | null
		mailtoOptions?: MailtoOptions
		type?: "ContactPoint" | "Organization" | "Person"
		useMailto?: boolean | undefined | null
	}
>

export type InstantProps<Tag extends HTMLTag> = Override<
	MetadataProps<
		Partial<Thing>,
		Tag
	>,
	{
		instant: string | Temporal.Instant
		locales?: string | Array<string> | undefined | null
		microdata?: Partial<HTMLAttributes> | undefined | null
		options?: Intl.DateTimeFormatOptions | undefined | null
	}
>

export type NumberProps<Tag extends HTMLTag> = Override<
	MetadataProps<
		Partial<Float | Integer | Number>,
		Tag
	>,
	{
		instant: string | Temporal.Instant
		link?: Partial<LinkAttributes> | undefined | null
		locales?: string | Array<string> | undefined | null
		microdata?: Partial<HTMLAttributes> | undefined | null
		options?: NumberFormatOptions | undefined | null
		type?: "Number" | "Integer" | "Float"
		useTabularNumerals?: boolean | undefined | null
		value?: string | number | undefined | null
	}
>

export type PictureProps = {
	alt: string
	createPath?: CreatePath | undefined | null
	dataset?: Dataset | undefined | null
	description?: string | undefined | null
	descriptionAttrs?: BaseAttributes | undefined | null
	filename: string
	height?: number | undefined | null
	href?: string | undefined | null
	linkAttrs?: LinkAttributes | undefined | null
	loading?: "eager" | "lazy" | undefined | null
	properties?: Partial<ImageObject> | undefined | null
	sources?: Array<ImageSource> | undefined | null
	src: string
	width: number
}

export type SourceProps = {
	createPath: CreatePath | undefined
	filename: string
	source: ImageSource
}

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
