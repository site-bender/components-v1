---
  caption: "RealNumber with tabular numerals output"
---

<!-- markdownlint-disable MD041 -->
<!-- dprint-ignore -->
```html
<span itemscope itemtype="https://schema.org/RealNumber">
  <span
    class="sb-integer tabular-nums"
    itemprop="value"
  >
    123,456,789
  </span>

  <style media="all">
    a.tabular-nums,
    span.tabular-nums {
      font-variant-numeric: tabular-nums;
    }
  </style>
</span>
```
