---
  caption: "MonetaryAmount with JSON+LD example"
---

<!-- markdownlint-disable MD041 -->
<!-- dprint-ignore -->
```jsx
<MonetaryAmount
  options={{
    currency: "EUR",
  }}
  properties={{
    maxValue: 1_000_000_000_000,
    minValue: 1_000_000_000,
    name: "Bob's stash",
  }}
  useJsonLd
  value={42_000_000_000}
/>
```
