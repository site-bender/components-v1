---
caption: "Nav props"
---

<!-- markdownlint-disable MD041 -->
<!-- dprint-ignore -->

```ts
export type Dataset = Record<string, string | number | boolean>

export type LinkProps = {
	dataset?: Dataset | undefined | null
	href: string
	label?: string
	properties?: SiteNavigationElement
}

export type Props<Tag extends HTMLTag> = Polymorphic<{ as: Tag }> & {
	dataset?: Dataset | undefined | null
	h2?: Partial<HTMLAttributes<"h2">>
	links: Array<LinkProps>
	properties?: SiteNavigationElementLeaf
	title?: string
	ul?: Partial<HTMLAttributes<"ul">>
}
```
