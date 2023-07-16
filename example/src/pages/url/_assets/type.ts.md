---
caption: "Url props"
---

<!-- markdownlint-disable MD041 -->
<!-- dprint-ignore -->

```ts
import type { HTMLAttributes } from "astro/types"

export type Dataset = Record<string, string | number | boolean>

export type Props = HTMLAttributes<"a"> & {
	dataset?: Dataset
	useMailto?: boolean
	properties?: Partial<ContactPointLeaf | OrganizationLeaf | PersonLeaf>
	type?: "ContactPoint" | "Organization" | "Person"
}
```
