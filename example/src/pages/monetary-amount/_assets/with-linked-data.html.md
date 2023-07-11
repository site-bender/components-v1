---
  caption: "MonetaryAmount with JSON+LD output"
---

<!-- markdownlint-disable MD041 -->
<!-- dprint-ignore -->
```html
<span itemscope itemtype="https://schema.org/MonetaryAmount">
  <span
    class="sb-monetary-amount"
    itemprop="value"
  >
    €42,000,000,000.00
  </span>

  <script type="application/json+ld">{
    type: "MonetaryAmount",
    "maxValue": 1000000000000,
    "minValue": 1000000000,
    "name": "Bob's stash"
  }</script>
</span>
```
