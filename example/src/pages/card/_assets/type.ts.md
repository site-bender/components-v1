---
caption: "BooleanField props"
---

<!-- markdownlint-disable MD041 -->
<!-- dprint-ignore -->

```ts
export type Dataset = Record<string, string | number | boolean>

type Image = {
	alt: string
	filename: string
	height?: number
	sources?: Array<ImageSource>
	src: string
	width: number
}

export type Props = {
	href?: string
	image?: Image
	isInvertible?: boolean
	title: string
}
```
