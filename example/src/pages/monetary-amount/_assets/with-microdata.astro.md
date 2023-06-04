---
  caption: "MonetaryAmount with microdata example"
---

<!-- markdownlint-disable MD041 -->
<!-- dprint-ignore -->
```jsx
<MonetaryAmount
  options={{
    currency: "NZD",
  }}
  properties={{
    maxValue: 1_000_000_000_000,
    minValue: 1_000_000_000,
    name: "Bob's stash",
  }}
  value={42_000_000_000}
/>
```
