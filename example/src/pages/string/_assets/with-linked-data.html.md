---
  caption: "Email with JSON+LD output"
---

<!-- markdownlint-disable MD041 -->
<!-- dprint-ignore -->
```html
<span itemscope="" itemtype="https://schema.org/ContactPoint">
  <script type="application/json+ld">{
    type: "ContactPoint",
    "contactType": "guru",
    "email": "bob@dobbs.com",
    "name": "Church of the Subgenius"
  }</script>
  <span class="sb-email-address" itemprop="email">
    bob@dobbs.com
  </span>
</span>
```
