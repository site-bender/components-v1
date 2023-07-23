---
caption: "BookTitle with microdata example"
---

<!-- markdownlint-disable MD041 -->
<!-- dprint-ignore -->

```jsx
<BookTitle
	properties={{
		author: {
			type: "Person",
			name: "Herman Melville",
		},
		bookFormat: "Paperback",
		isbn: "9780393285000",
		name: "Moby Dick, or the Whale",
		numberOfPages: 736,
		publisher: {
			type: "Organization",
			name: "W. W. Norton & Company",
		},
	}}
>
	Moby Dick
</BookTitle>
```
