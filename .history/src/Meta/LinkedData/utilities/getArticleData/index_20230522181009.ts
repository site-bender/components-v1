import type { BaseData, LdArticle, LdPerson, Metadata } from "../../../../types"

export default function getArticleData(
	baseData: BaseData,
	metadata: Partial<Metadata>,
): LdArticle | void {
	const authors = (
		metadata.article?.authors?.length ? metadata.article.authors : baseData.authors
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
			: baseData.publishers
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
			inLanguage: metadata.language || baseData.language,
			license: metadata.article?.license || baseData.license,
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
