---
caption: "Instant with formatting options example"
---

<!-- markdownlint-disable MD041 -->
<!-- dprint-ignore -->

```jsx
<Instant
	instant={Temporal.Now.instant()}
	locale="en-US"
	options={{
		dateStyle: "full",
		timeStyle: "full",
		fractionalSecondDigits: 3,
	}}
/>
```
