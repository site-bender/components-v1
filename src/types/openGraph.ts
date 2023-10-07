export type OpenGraphArticle = {
	alternativeHeadline?: string | undefined | null
	author?: URL | undefined | null
	expirationTime?: string | undefined | null
	modifiedTime?: string | undefined | null
	publishedTime?: string | undefined | null
	section?: string | undefined | null
	tag?: Array<string> | undefined | null
}

export type OpenGraphAudio = {
	audio?: string | undefined | null
	secureUrl?: string | undefined | null
	type?: string | undefined | null
}

export type OpenGraphBook = {
	author?: URL | undefined | null
	isbn?: string | undefined | null
	releaseDate?: string | undefined | null
	tag?: Array<string> | undefined | null
}

export type OpenGraphImage = {
	alt?: string | undefined | null
	height?: number | string | undefined | null
	image?: string | undefined | null // min 1200x630, 1.91:1 ratio for primary
	secureUrl?: string | undefined | null
	type?: string | undefined | null
	width?: number | string | undefined | null
}

export type OpenGraphProfile = {
	firstName?: string | undefined | null
	gender?: "male" | "female" | undefined | null
	lastName?: string | undefined | null
	username?: string | undefined | null
}

export type OpenGraphVideo = {
	height?: number | string | undefined | null
	secureUrl?: string | undefined | null
	type?: string | undefined | null
	video?: string | undefined | null
	width?: number | string | undefined | null
}

export type OpenGraphTypes =
	| "article"
	| "book"
	| "music.album"
	| "music.playlist"
	| "music.radio_station"
	| "music.song"
	| "profile"
	| "video.episode"
	| "video.movie"
	| "video.other"
	| "video.tv_show"
	| "website"

export type OpenGraphBasic = {
	audio?: Array<URL | string> | undefined | null
	description?: string | undefined | null // same as meta max 300 trunc to 110 in comments optimal 155
	determiner?: string | undefined | null // "a", "an", "the", "" (default)
	locale?: string | undefined | null // en_US is default
	localeAlternate?: string | undefined | null
	image?: Array<OpenGraphImage> | undefined | null
	siteName?: string | undefined | null // Craft Code
	title?: string | undefined | null // raw title, no site name <= 60 chars
	type: OpenGraphTypes
	url?: string | undefined | null // same as canonical URL
	video?: Array<URL | string> | undefined | null
}
