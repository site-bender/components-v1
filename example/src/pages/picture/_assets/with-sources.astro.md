---
caption: "Picture with <code>sources</code> example"
---

<!-- markdownlint-disable MD041 -->
<!-- dprint-ignore -->

```jsx
<Picture
	alt="Black hole sun"
	filename="darkness-at-noon"
	sources={[
		{ media: "(min-width: 500px)", sizes: ["768", "1536", "2034"] },
		{ media: "(max-width: 499px)", sizes: ["380"] },
	]}
	src="/images/darkness-at-noon.png"
	width={768}
/>
```
