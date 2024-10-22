import type { HTMLTag, Polymorphic } from "astro/types"
import type {
	AnchorTarget,
	Dataset,
	Formattable,
	HTMLAttributes,
	Override,
} from "./html"
import { OpenGraphArticle, OpenGraphBasic } from "./openGraph"
import type {
	Article,
	ArticleLeaf,
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
	Number as NumberSO,
	OrganizationLeaf,
	Person,
	PersonLeaf,
	QuantitativeValueDistribution,
	Quotation,
	Schedule,
	SiteNavigationElement,
	SiteNavigationElementLeaf,
	Thing,
	WebPage,
	WebSite,
} from "./schema.org"

import type { Temporal } from "@js-temporal/polyfill"
import type { AstroInstance } from "astro"
import type { TIME_ZONE } from "../constants"

export interface AstroPage extends AstroInstance {
	metadata: Metadata
}

export type Crumb = {
	ariaLabel?: string | undefined | null
	description?: string | undefined | null
	href: string
	label: string
}

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

export type TimeToReadProps<Tag extends HTMLTag> = Polymorphic<{ as: Tag }> &
	Override<
		HTMLAttributes,
		{
			article: Article
			header?: (HTMLAttributes & { as: Tag }) | undefined | null
			hideClass?: string | undefined
			id?: string | undefined | null
			title?: string | undefined | null
		}
	>

export type ObjectType = "website" | "article" | "profile"

export type TwitterCardType =
	| "summary"
	| "summary_large_image"
	| "app"
	| "player"

export type TwitterCardImage = {
	alt?: string | undefined | null
	height?: number | string | undefined | null
	width?: number | string | undefined | null
	url: string
}

export type TwitterCard = {
	card: TwitterCardType
	creator?: string | undefined | null
	description?: string | undefined | null
	image?: TwitterCardImage | undefined | null
	site?: string | undefined | null
	title?: string | undefined | null
}

export type Author = Override<
	Person,
	{
		href?: string | undefined | null
	}
>

export type DurationOptions = {
	years?: number | undefined
	months?: number | undefined
	weeks?: number | undefined
	days?: number | undefined
	hours?: number | undefined
	minutes?: number | undefined
	seconds?: number | undefined
	milliseconds?: number | undefined
	microseconds?: number | undefined
	nanoseconds?: number | undefined
}

export type Metadata = {
	article?: ArticleLeaf | undefined
	webPage?: WebPage | undefined
	webSite?: WebSite | undefined
}

export type Beacon = {
	href?: string
	firstCarbon: number
	grade: string
	percentage: number
	repeatCarbon: number
}

export type Ecograder = {
	href?: string
	score: number
}

export type WebCarbon = {
	count: number
	href?: string
	percentage: number
}

export type Carbon = {
	beacon?: Beacon | undefined | null
	ecograder?: Ecograder | undefined | null
	webCarbon?: WebCarbon | undefined | null
}

export type PageMeta = {
	ariaLabel?: string | undefined | null
	author?: string | undefined | null
	blurb?: string | undefined | null
	carbon?: Carbon
	children?: Array<string> | undefined | null
	description?: string | undefined | null
	getArticleData?: ((v: string) => Article) | undefined | null
	getCodeSnippetData?: (() => OpenGraphBasic) | undefined | null
	getOpenGraphData?: (() => OpenGraphBasic) | undefined | null
	getQuotations?: (() => Array<Quotation>) | undefined | null
	getTwitterCard?: (() => TwitterCard) | undefined | null
	getWebPageData?: ((v: string) => WebPage) | undefined | null
	id?: string | undefined | null
	keywords?: Array<string> | undefined | null
	label?: string | undefined | null
	menu?: Array<string> | undefined | null
	next?: string | undefined | null
	path: string
	prev?: string | undefined | null
	pageTitle?: string | undefined | null
	question?: string | undefined | null
	robots?: string | undefined | null
	title?: string | undefined | null
}

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

export type Fallback = Override<
	HTMLAttributes,
	{
		href?: string | undefined | null
		label: string | undefined | null
	}
>

export type AriaHeader = Override<
	HTMLAttributes,
	{
		label: string | undefined | null
		level?: 1 | 2 | 3 | 4 | 5 | 6
	}
>

export type Pages = Record<string, Partial<Metadata>>

export type Trail = {
	fallback?: Fallback | undefined
	heading?: AriaHeader | undefined
	page?: Partial<HTMLAttributes> | undefined
	pages?: Pages | undefined
}

export type ArticleProps<T, Tag extends HTMLTag> = Polymorphic<{ as: Tag }> &
	Override<
		HTMLAttributes,
		{
			as?: Tag
			heading?: Partial<HTMLAttributes> | undefined | null
			level?: 1 | 2 | 3 | 4 | 5 | 6
			microdata?: Partial<HTMLAttributes> | undefined | null
			properties?: Partial<T>
			title?: string | undefined | null
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
	} & Formattable
>

export type BylineProps<Tag extends HTMLTag> = Polymorphic<{ as: Tag }> &
	Override<
		HTMLAttributes,
		{
			ariaLabel?: string | undefined | null
			as?: Tag
			author: string
			href?: string | undefined | null
			pronunciation?: string | undefined | null
			pubDate?: string | Temporal.PlainDate | undefined | null
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
		picture?: PictureProps<Tag> | undefined | null
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

export type ColumnsProps<T, Tag extends HTMLTag> = Polymorphic<{ as: Tag }> &
	Override<
		HTMLAttributes,
		{
			as?: Tag
			heading?: Partial<HTMLAttributes> | undefined | null
			level?: 1 | 2 | 3 | 4 | 5 | 6
			microdata?: Partial<HTMLAttributes> | undefined | null
			properties?: Partial<T>
			title?: string | undefined | null
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
	} & Formattable
>

export type EmailProps<Tag extends HTMLTag> = Override<
	MetadataProps<Partial<ContactPointLeaf | OrganizationLeaf | PersonLeaf>, Tag>,
	{
		email?: string | undefined | null
		link?: Partial<LinkAttributes> | undefined | null
		mailtoOptions?: MailtoOptions
		type?: "ContactPoint" | "Organization" | "Person"
		useMailto?: boolean | undefined | null
	} & Formattable
>

export type EntryProps = {
	abbreviation?: string | undefined | null
	definition: Array<string>
	expansion?: string | undefined | null
	id: string
	isAcronym?: boolean | undefined | null
	term: string
}

export type FaqProps<Tag extends HTMLTag> = Override<
	MetadataProps<Thing, Tag>,
	{
		question: QuestionProps<Tag>
	}
>

export type FaqsProps<Tag extends HTMLTag> = Override<
	MetadataProps<Thing, Tag>,
	{
		header?: Partial<HTMLAttributes> | undefined | null
		hideClass?: string | undefined | null
		title?: string | undefined | null
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

export type GlossaryProps = {
	groups?: Array<GlossaryGroupProps> | undefined | null
	id?: string | undefined | null
	title: string
}

export type GlossaryGroupProps = {
	definitions: Array<EntryProps> | undefined | null
	id: string
	label: string
}

export type HeadProps<Tag extends HTMLTag> = Override<
	MetadataProps<Partial<Thing>, Tag>,
	{
		canonicalSite: string
		charset?: string | undefined | null
		description?: string | undefined | null
		metadata?: PageMeta | undefined | null
		siteTitle: string
		viewport?: string | undefined | null
	}
>

export type HeaderProps<Tag extends HTMLTag> = MetadataProps<
	Partial<Thing>,
	Tag
>

export type HeroProps = HTMLAttributes

export type InstantProps<Tag extends HTMLTag> = Override<
	MetadataProps<Partial<Thing>, Tag>,
	{
		instant: string | Temporal.Instant
		locales?: string | Array<string> | undefined | null
		options?: Intl.DateTimeFormatOptions | undefined | null
	} & Formattable
>

export type ItemsProps<T, Tag extends HTMLTag> = Override<
	MetadataProps<T, Tag>,
	{
		children?: Array<string> | undefined
		page: string
		pages: Record<string, Partial<Metadata>>
		parent: string
	}
>

export type LatestProps<Tag extends HTMLTag> = Polymorphic<{ as: Tag }> &
	Override<
		MetadataProps<SiteNavigationElement, Tag>,
		{
			header?: HTMLAttributes | undefined | null
			latest?: Array<{ href: string; label: string }> | undefined | null
		}
	>

export type LinkProps<Tag extends HTMLTag> = Override<
	MetadataProps<SiteNavigationElement, Tag>,
	{
		description?: string | undefined | null
		href: string
		label: string
		link?: Partial<LinkAttributes> | undefined | null
		title?: string | undefined | null
	} & Formattable
>

export type LogotypeProps<Tag extends HTMLTag> = Override<
	MetadataProps<SiteNavigationElement, Tag>,
	{
		ariaLabel?: string | undefined | null
		href: string
		label: string
		level?: 1 | 2 | 3 | 4 | 5 | 6
		link?: Partial<LinkAttributes> | undefined | null
		noLink?: boolean | undefined | null
	}
>

export type MainProps<Tag extends HTMLTag> = Override<
	MetadataProps<SiteNavigationElement, Tag>,
	{
		imageUrl?: string | undefined | null
	}
>

export type MenuItemTreeProps<Tag extends HTMLTag> = Override<
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

export type MenuProps<Tag extends HTMLTag> = Override<
	MetadataProps<Partial<SiteNavigationElementLeaf>, Tag>,
	{
		as?: Tag
		hideClass?: string | undefined | null
		nav: NavListProps<Tag>
		pages?: Array<PageMeta> | undefined | null
		showDescription?: boolean | undefined | null
	}
>

export type MessengerProps<Tag extends HTMLTag> = Override<
	MetadataProps<SiteNavigationElement, Tag>,
	{
		header?: HTMLAttributes | undefined | null
	}
>

export type NavProps<Tag extends HTMLTag> = Override<
	MetadataProps<Partial<SiteNavigationElementLeaf>, Tag>,
	{
		hideClass?: string | undefined | null
		nav: NavListProps<Tag>
	}
>

export type NavListProps<Tag extends HTMLTag> = Polymorphic<{ as: Tag }> &
	Override<
		MetadataProps<Partial<SiteNavigationElementLeaf>, Tag>,
		{
			header?: HTMLAttributes | undefined | null
			hideClass?: string | undefined | null
			links: Array<LinkProps<Tag>>
			list?: ListAttributes | undefined | null
			title?: string | undefined | null
		}
	>

export type PaginatorProps<Tag extends HTMLTag> = Override<
	MetadataProps<Partial<SiteNavigationElementLeaf>, Tag>,
	{
		pages: Record<string, Partial<Metadata>>
		position?: "bottom" | "top" | undefined | null
	}
>

export type QuestionProps<Tag extends HTMLTag> = Override<
	MetadataProps<Thing, Tag>,
	{
		text?: string | undefined | null
	}
>

export type TrailProps<Tag extends HTMLTag> = Override<
	MetadataProps<Partial<SiteNavigationElementLeaf>, Tag>,
	{
		fullWidth?: boolean | undefined | null
		hideClass?: string | undefined | null
		trail: TrailListProps<Tag>
	}
>

export type TrailListProps<Tag extends HTMLTag> = Override<
	MetadataProps<Partial<SiteNavigationElementLeaf>, Tag>,
	{
		crumbs: Array<LinkProps<Tag>>
		header?: HTMLAttributes | undefined | null
		hideClass?: string | undefined | null
		level?: 1 | 2 | 3 | 4 | 5 | 6
		list?: ListAttributes | undefined | null
		showPage?: boolean | undefined | null
		title?: string | undefined | null
		type?: "ol" | "ul" | undefined | null
	}
>

export type NumberProps<Tag extends HTMLTag> = Override<
	MetadataProps<Partial<Float | Integer | NumberSO>, Tag>, // eslint-disable-line
	{
		instant: string | Temporal.Instant
		link?: Partial<LinkAttributes> | undefined | null
		locales?: string | Array<string> | undefined | null
		options?: NumberFormatOptions | undefined | null
		type?: "Number" | "Integer" | "Float"
		useTabularNumerals?: boolean | undefined | null
		value?: string | number | undefined | null
	} & Formattable
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
	} & Formattable
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
	} & Formattable
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
	} & Formattable
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
	} & Formattable
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
	} & Formattable
>

export type PostProps<T, Tag extends HTMLTag> = Polymorphic<{ as: Tag }> &
	Override<
		HTMLAttributes,
		{
			as?: Tag
			asColumns?: boolean | undefined | null
			byline?: BylineProps<Tag> | undefined | null
			heading?: Partial<HTMLAttributes> | undefined | null
			microdata?: Partial<HTMLAttributes> | undefined | null
			properties?: Partial<T>
			subtitle?: SubtitleProps<Tag> | undefined | null
			title?: string | undefined | null
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
	} & Formattable
>

export type SourceProps = {
	createPath: CreatePath | undefined
	filename: string
	source: ImageSource
}

export type SubtitleProps<Tag extends HTMLTag> = Polymorphic<{ as: Tag }> &
	Override<
		HTMLAttributes,
		{
			as?: Tag
			subtitle: string
		}
	>

export type TelProps<Tag extends HTMLTag> = Override<
	MetadataProps<Partial<ContactPointLeaf | OrganizationLeaf | PersonLeaf>, Tag>,
	{
		link?: Partial<LinkAttributes> | undefined | null
		tel?: string | undefined | null
		useTel?: boolean | undefined | null
	} & Formattable
>

export type TimeZoneProps<Tag extends HTMLTag> = Override<
	MetadataProps<Partial<Thing>, Tag>,
	{
		display?: "name" | "offset" | "both"
		localTime?: string | Temporal.Instant | Temporal.ZonedDateTime
		timeZone: string | Temporal.TimeZone | Temporal.ZonedDateTime
	} & Formattable
>

export type UrlProps<Tag extends HTMLTag> = Override<
	MetadataProps<Partial<ContactPointLeaf | OrganizationLeaf | PersonLeaf>, Tag>,
	{
		link?: Partial<LinkAttributes> | undefined | null
		url?: string | undefined | null
		useLink?: boolean | undefined | null
	} & Formattable
>

export type YearWeekProps<Tag extends HTMLTag> = Override<
	MetadataProps<Partial<Thing>, Tag>,
	{
		date?: Temporal.PlainDateLike | undefined | null
		plainDate?: string | Temporal.PlainMonthDayLike | undefined | null
		week?: number | string | undefined | null
		year?: number | string | undefined | null
	} & Formattable
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
	} & Formattable
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
