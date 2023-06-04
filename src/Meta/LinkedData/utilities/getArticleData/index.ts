import type { Basedata, LdArticle, LdPerson, Metadata } from "../../../../types"

export default function getArticleData(
	basedata: Basedata,
	metadata: Partial<Metadata>,
): LdArticle | void {
	const authors = (
		metadata.article?.authors?.length
			? metadata.article.authors
			: basedata.authors
	).map((author) =>
		typeof author === "string"
			? {
				"@type": "Person",
				name: author,
			} as LdPerson
			: author
	)

	const publishers = (
		metadata.article?.publishers?.length
			? metadata.article.publishers
			: basedata.publishers
	).map((publisher) =>
		typeof publisher === "string"
			? {
				"@type": "Organization",
				name: publisher,
			}
			: publisher
	)

	return metadata.type === "article"
		? {
			"@type": "Article",
			author: authors,
			...(metadata.article?.publishDate
				? { datePublished: metadata.article.publishDate }
				: {}),
			...(metadata.article?.modifiedDate
				? { dateModified: metadata.article.modifiedDate }
				: {}),
			description: metadata.description,
			headline: metadata.title,
			inLanguage: metadata.language || basedata.language,
			license: metadata.article?.license || basedata.license,
			mainEntityOfPage: metadata.canonical,
			potentialAction: [
				{
					"@type": "ReadAction",
					target: [
						metadata.canonical as string,
					],
				},
			],
			publisher: publishers,
			teaches: "business analysis",
			url: metadata.canonical,
			version: 1,
		}
		: undefined
}
